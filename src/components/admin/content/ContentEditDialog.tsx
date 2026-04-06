import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";

interface ContentItem {
  id: string;
  page: string;
  section: string;
  content_key: string;
  content_value: string;
  content_type: string;
}

interface ContentEditDialogProps {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  item: ContentItem | null;
}

const ContentEditDialog = ({ open, onOpenChange, item }: ContentEditDialogProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editValue, setEditValue] = useState("");
  const [contentType, setContentType] = useState("text");
  const [showPreview, setShowPreview] = useState(false);

  const handleOpen = (v: boolean) => {
    if (v && item) {
      setEditValue(item.content_value);
      setContentType(item.content_type);
      setShowPreview(false);
    }
    onOpenChange(v);
  };

  const saveMutation = useMutation({
    mutationFn: async () => {
      if (!item) return;
      const { error } = await supabase
        .from("site_content")
        .update({ content_value: editValue, content_type: contentType })
        .eq("id", item.id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["site_content_all"] });
      queryClient.invalidateQueries({ queryKey: ["site_content"] });
      toast({ title: "✅ Content updated!" });
      onOpenChange(false);
    },
    onError: (e: any) => toast({ title: "Error", description: e.message, variant: "destructive" }),
  });

  const formatKey = (key: string) => key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  const isValidJson = (str: string) => {
    try { JSON.parse(str); return true; } catch { return false; }
  };

  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg">Edit Content</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={(e) => { e.preventDefault(); saveMutation.mutate(); }}
          className="space-y-5"
        >
          {/* Location badges */}
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">{item.page}</Badge>
            <Badge variant="outline">{item.section}</Badge>
            <Badge variant="secondary">{formatKey(item.content_key)}</Badge>
          </div>

          {/* Content type selector */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-xs text-muted-foreground">Content Type</Label>
              <Select value={contentType} onValueChange={setContentType}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text">Text</SelectItem>
                  <SelectItem value="json">JSON (List/Object)</SelectItem>
                  <SelectItem value="html">HTML</SelectItem>
                  <SelectItem value="url">URL / Link</SelectItem>
                  <SelectItem value="number">Number</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="gap-1.5"
                onClick={() => setShowPreview(!showPreview)}
              >
                {showPreview ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                {showPreview ? "Hide Preview" : "Show Preview"}
              </Button>
            </div>
          </div>

          {/* Editor */}
          <div>
            <Label className="text-xs text-muted-foreground mb-1.5 block">Value</Label>
            {contentType === "text" || contentType === "html" ? (
              <Textarea
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                rows={contentType === "html" ? 10 : 5}
                className="font-mono text-sm"
                placeholder={contentType === "html" ? "<p>Your HTML content...</p>" : "Enter text..."}
              />
            ) : contentType === "json" ? (
              <>
                <Textarea
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  rows={8}
                  className={`font-mono text-sm ${editValue && !isValidJson(editValue) ? "border-destructive" : ""}`}
                  placeholder='["item1", "item2", "item3"]'
                />
                {editValue && !isValidJson(editValue) && (
                  <p className="text-xs text-destructive mt-1">⚠️ Invalid JSON format</p>
                )}
                <p className="text-xs text-muted-foreground mt-1">Use ["item1", "item2"] for lists or {`{"key": "value"}`} for objects</p>
              </>
            ) : (
              <Input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                type={contentType === "number" ? "number" : "text"}
                placeholder={contentType === "url" ? "https://..." : "Enter value..."}
                className="font-mono text-sm"
              />
            )}
          </div>

          {/* Preview */}
          {showPreview && (
            <div className="rounded-lg border bg-muted/30 p-4">
              <Label className="text-xs text-muted-foreground mb-2 block">Preview</Label>
              {contentType === "html" ? (
                <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: editValue }} />
              ) : contentType === "json" && isValidJson(editValue) ? (
                <pre className="text-xs bg-background rounded p-3 overflow-auto max-h-40">
                  {JSON.stringify(JSON.parse(editValue), null, 2)}
                </pre>
              ) : (
                <p className="text-sm">{editValue || "(empty)"}</p>
              )}
            </div>
          )}

          {/* Character count */}
          <p className="text-xs text-muted-foreground">{editValue.length} characters</p>

          {/* Actions */}
          <div className="flex gap-2 justify-end pt-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button
              type="submit"
              disabled={saveMutation.isPending || (contentType === "json" && editValue !== "" && !isValidJson(editValue))}
            >
              {saveMutation.isPending ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContentEditDialog;
