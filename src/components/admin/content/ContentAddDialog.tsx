import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ContentAddDialogProps {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  existingPages: string[];
  existingSections: Record<string, string[]>;
}

const ContentAddDialog = ({ open, onOpenChange, existingPages, existingSections }: ContentAddDialogProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [page, setPage] = useState("");
  const [customPage, setCustomPage] = useState("");
  const [section, setSection] = useState("");
  const [customSection, setCustomSection] = useState("");
  const [contentKey, setContentKey] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [contentType, setContentType] = useState("text");

  const reset = () => {
    setPage(""); setCustomPage(""); setSection(""); setCustomSection("");
    setContentKey(""); setContentValue(""); setContentType("text");
  };

  const addMutation = useMutation({
    mutationFn: async () => {
      const finalPage = page === "__custom" ? customPage.trim().toLowerCase() : page;
      const finalSection = section === "__custom" ? customSection.trim().toLowerCase().replace(/\s+/g, "_") : section;
      const finalKey = contentKey.trim().toLowerCase().replace(/\s+/g, "_");

      if (!finalPage || !finalSection || !finalKey) throw new Error("All fields are required");

      const { error } = await supabase.from("site_content").insert({
        page: finalPage,
        section: finalSection,
        content_key: finalKey,
        content_value: contentValue,
        content_type: contentType,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["site_content_all"] });
      queryClient.invalidateQueries({ queryKey: ["site_content"] });
      toast({ title: "✅ Content added!" });
      reset();
      onOpenChange(false);
    },
    onError: (e: any) => toast({ title: "Error", description: e.message, variant: "destructive" }),
  });

  const activeSections = page && page !== "__custom" ? (existingSections[page] || []) : [];

  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) reset(); }}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Add New Content</DialogTitle>
        </DialogHeader>
        <form onSubmit={(e) => { e.preventDefault(); addMutation.mutate(); }} className="space-y-4">
          {/* Page */}
          <div>
            <Label className="text-xs text-muted-foreground">Page</Label>
            <Select value={page} onValueChange={setPage}>
              <SelectTrigger className="mt-1"><SelectValue placeholder="Select page..." /></SelectTrigger>
              <SelectContent>
                {existingPages.map((p) => (
                  <SelectItem key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</SelectItem>
                ))}
                <SelectItem value="__custom">+ New Page</SelectItem>
              </SelectContent>
            </Select>
            {page === "__custom" && (
              <Input className="mt-2" placeholder="New page name..." value={customPage} onChange={(e) => setCustomPage(e.target.value)} />
            )}
          </div>

          {/* Section */}
          <div>
            <Label className="text-xs text-muted-foreground">Section</Label>
            <Select value={section} onValueChange={setSection}>
              <SelectTrigger className="mt-1"><SelectValue placeholder="Select section..." /></SelectTrigger>
              <SelectContent>
                {activeSections.map((s) => (
                  <SelectItem key={s} value={s}>{s.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}</SelectItem>
                ))}
                <SelectItem value="__custom">+ New Section</SelectItem>
              </SelectContent>
            </Select>
            {section === "__custom" && (
              <Input className="mt-2" placeholder="New section name..." value={customSection} onChange={(e) => setCustomSection(e.target.value)} />
            )}
          </div>

          {/* Key + Type */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs text-muted-foreground">Content Key</Label>
              <Input className="mt-1" placeholder="e.g. heading_text" value={contentKey} onChange={(e) => setContentKey(e.target.value)} />
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Type</Label>
              <Select value={contentType} onValueChange={setContentType}>
                <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="text">Text</SelectItem>
                  <SelectItem value="json">JSON</SelectItem>
                  <SelectItem value="html">HTML</SelectItem>
                  <SelectItem value="url">URL</SelectItem>
                  <SelectItem value="number">Number</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Value */}
          <div>
            <Label className="text-xs text-muted-foreground">Value</Label>
            <Textarea className="mt-1 font-mono text-sm" rows={4} value={contentValue} onChange={(e) => setContentValue(e.target.value)} placeholder="Enter content value..." />
          </div>

          <div className="flex gap-2 justify-end pt-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="submit" disabled={addMutation.isPending}>
              {addMutation.isPending ? "Adding..." : "Add Content"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContentAddDialog;
