import { useState, useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Upload, FileJson, AlertTriangle, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContentImportItem {
  page: string;
  section: string;
  content_key: string;
  content_value: string;
  content_type?: string;
}

interface ContentBulkImportProps {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

const ContentBulkImport = ({ open, onOpenChange }: ContentBulkImportProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const fileRef = useRef<HTMLInputElement>(null);
  const [jsonText, setJsonText] = useState("");
  const [parsed, setParsed] = useState<ContentImportItem[] | null>(null);
  const [parseError, setParseError] = useState("");

  const reset = () => {
    setJsonText("");
    setParsed(null);
    setParseError("");
  };

  const validate = (data: unknown): ContentImportItem[] => {
    if (!Array.isArray(data)) throw new Error("JSON must be an array of objects");
    if (data.length === 0) throw new Error("Array is empty");
    if (data.length > 500) throw new Error("Maximum 500 items allowed per import");

    return data.map((item, i) => {
      if (!item.page || !item.section || !item.content_key)
        throw new Error(`Item ${i + 1}: page, section, and content_key are required`);
      return {
        page: String(item.page).trim().toLowerCase(),
        section: String(item.section).trim().toLowerCase().replace(/\s+/g, "_"),
        content_key: String(item.content_key).trim().toLowerCase().replace(/\s+/g, "_"),
        content_value: String(item.content_value ?? ""),
        content_type: String(item.content_type || "text"),
      };
    });
  };

  const handleParse = (text: string) => {
    setJsonText(text);
    setParsed(null);
    setParseError("");
    if (!text.trim()) return;
    try {
      const data = JSON.parse(text);
      const items = validate(data);
      setParsed(items);
    } catch (e: any) {
      setParseError(e.message);
    }
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      setParseError("File too large (max 2MB)");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => handleParse(ev.target?.result as string);
    reader.readAsText(file);
    e.target.value = "";
  };

  const importMutation = useMutation({
    mutationFn: async () => {
      if (!parsed) return;
      const { error } = await supabase.from("site_content").upsert(
        parsed.map((item) => ({
          page: item.page,
          section: item.section,
          content_key: item.content_key,
          content_value: item.content_value,
          content_type: item.content_type || "text",
        })),
        { onConflict: "page,section,content_key", ignoreDuplicates: false }
      );
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["site_content_all"] });
      queryClient.invalidateQueries({ queryKey: ["site_content"] });
      toast({ title: `✅ ${parsed?.length} items imported successfully!` });
      reset();
      onOpenChange(false);
    },
    onError: (e: any) => toast({ title: "Import failed", description: e.message, variant: "destructive" }),
  });

  const pages = parsed ? [...new Set(parsed.map((p) => p.page))] : [];

  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) reset(); }}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5" /> Bulk Import Content
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* File upload */}
          <div>
            <input ref={fileRef} type="file" accept=".json" onChange={handleFile} className="hidden" />
            <Button variant="outline" className="gap-2 w-full" onClick={() => fileRef.current?.click()}>
              <FileJson className="w-4 h-4" /> Upload JSON File
            </Button>
          </div>

          <div className="relative flex items-center gap-3">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground">or paste JSON below</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* JSON textarea */}
          <div>
            <Label className="text-xs text-muted-foreground">JSON Content</Label>
            <Textarea
              value={jsonText}
              onChange={(e) => handleParse(e.target.value)}
              rows={10}
              className="font-mono text-xs mt-1"
              placeholder={`[\n  {\n    "page": "home",\n    "section": "hero",\n    "content_key": "heading",\n    "content_value": "Your Heading",\n    "content_type": "text"\n  }\n]`}
            />
          </div>

          {/* Error */}
          {parseError && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{parseError}</span>
            </div>
          )}

          {/* Preview */}
          {parsed && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-sm">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>{parsed.length} items ready to import across {pages.length} page(s)</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {pages.map((p) => (
                  <Badge key={p} variant="secondary">{p} ({parsed.filter((i) => i.page === p).length})</Badge>
                ))}
              </div>

              <div className="border rounded-lg overflow-hidden max-h-48 overflow-y-auto">
                <table className="w-full text-xs">
                  <thead className="bg-muted/50 sticky top-0">
                    <tr>
                      <th className="text-left p-2 font-medium">Page</th>
                      <th className="text-left p-2 font-medium">Section</th>
                      <th className="text-left p-2 font-medium">Key</th>
                      <th className="text-left p-2 font-medium">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    {parsed.slice(0, 20).map((item, i) => (
                      <tr key={i} className="hover:bg-muted/20">
                        <td className="p-2">{item.page}</td>
                        <td className="p-2">{item.section}</td>
                        <td className="p-2 font-mono">{item.content_key}</td>
                        <td className="p-2 truncate max-w-[200px]">{item.content_value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {parsed.length > 20 && (
                  <p className="text-center text-xs text-muted-foreground py-2">...and {parsed.length - 20} more</p>
                )}
              </div>

              <p className="text-xs text-muted-foreground">
                ⚠️ Existing content with matching page/section/key will be updated. New items will be added.
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-2 justify-end pt-2">
            <Button variant="outline" onClick={() => { reset(); onOpenChange(false); }}>Cancel</Button>
            <Button
              onClick={() => importMutation.mutate()}
              disabled={!parsed || importMutation.isPending}
              className="gap-1.5"
            >
              {importMutation.isPending ? "Importing..." : `Import ${parsed?.length || 0} Items`}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContentBulkImport;
