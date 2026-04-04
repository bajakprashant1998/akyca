import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Pencil, Search, FileText, Layout, ChevronDown, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

interface ContentItem {
  id: string;
  page: string;
  section: string;
  content_key: string;
  content_value: string;
  content_type: string;
}

const PAGE_LABELS: Record<string, string> = {
  home: "🏠 Homepage",
  footer: "🦶 Footer",
  about: "ℹ️ About Page",
  services: "🛠️ Services",
  contact: "📞 Contact",
};

const ContentManager = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<ContentItem | null>(null);
  const [editValue, setEditValue] = useState("");
  const [search, setSearch] = useState("");
  const [expandedPages, setExpandedPages] = useState<Record<string, boolean>>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const { data: contents = [], isLoading } = useQuery({
    queryKey: ["site_content_all"],
    queryFn: async () => {
      const { data, error } = await supabase.from("site_content").select("*").order("page").order("section").order("content_key");
      if (error) throw error;
      return data as ContentItem[];
    },
  });

  const saveMutation = useMutation({
    mutationFn: async ({ id, content_value }: { id: string; content_value: string }) => {
      const { error } = await supabase.from("site_content").update({ content_value }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["site_content_all"] });
      queryClient.invalidateQueries({ queryKey: ["site_content"] });
      toast({ title: "Content updated!" });
      setOpen(false);
      setEditing(null);
    },
    onError: (e: any) => toast({ title: "Error", description: e.message, variant: "destructive" }),
  });

  const openEdit = (item: ContentItem) => {
    setEditing(item);
    setEditValue(item.content_value);
    setOpen(true);
  };

  const togglePage = (page: string) => {
    setExpandedPages((prev) => ({ ...prev, [page]: !prev[page] }));
  };

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Group by page -> section
  const filtered = contents.filter((c) =>
    !search || 
    c.content_key.toLowerCase().includes(search.toLowerCase()) ||
    c.content_value.toLowerCase().includes(search.toLowerCase()) ||
    c.section.toLowerCase().includes(search.toLowerCase()) ||
    c.page.toLowerCase().includes(search.toLowerCase())
  );

  const grouped: Record<string, Record<string, ContentItem[]>> = {};
  filtered.forEach((item) => {
    if (!grouped[item.page]) grouped[item.page] = {};
    if (!grouped[item.page][item.section]) grouped[item.page][item.section] = [];
    grouped[item.page][item.section].push(item);
  });

  const formatKey = (key: string) => key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Layout className="w-5 h-5" />
              Website Content Editor
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Edit any text on your website from here</p>
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search content..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p className="text-center py-8 text-muted-foreground">Loading content...</p>
        ) : Object.keys(grouped).length === 0 ? (
          <p className="text-center py-8 text-muted-foreground">No content found.</p>
        ) : (
          <div className="space-y-3">
            {Object.entries(grouped).map(([page, sections]) => {
              const isPageExpanded = expandedPages[page] !== false; // default open
              const totalItems = Object.values(sections).reduce((a, b) => a + b.length, 0);

              return (
                <div key={page} className="border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => togglePage(page)}
                    className="w-full flex items-center justify-between p-4 bg-muted/50 hover:bg-muted transition-colors text-left"
                  >
                    <div className="flex items-center gap-2">
                      {isPageExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                      <span className="font-semibold text-base">{PAGE_LABELS[page] || page}</span>
                      <Badge variant="secondary" className="text-xs">{totalItems} items</Badge>
                    </div>
                  </button>

                  {isPageExpanded && (
                    <div className="divide-y divide-border">
                      {Object.entries(sections).map(([section, items]) => {
                        const sectionKey = `${page}-${section}`;
                        const isSectionExpanded = expandedSections[sectionKey] !== false;

                        return (
                          <div key={sectionKey}>
                            <button
                              onClick={() => toggleSection(sectionKey)}
                              className="w-full flex items-center justify-between px-6 py-3 bg-background hover:bg-muted/30 transition-colors text-left"
                            >
                              <div className="flex items-center gap-2">
                                {isSectionExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                                <FileText className="w-3.5 h-3.5 text-muted-foreground" />
                                <span className="font-medium text-sm">{formatKey(section)}</span>
                                <span className="text-xs text-muted-foreground">({items.length})</span>
                              </div>
                            </button>

                            {isSectionExpanded && (
                              <div className="divide-y divide-border/50">
                                {items.map((item) => (
                                  <div
                                    key={item.id}
                                    className="flex items-start justify-between gap-4 px-8 py-3 hover:bg-muted/20 transition-colors group"
                                  >
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="text-sm font-medium text-foreground">{formatKey(item.content_key)}</span>
                                        {item.content_type !== "text" && (
                                          <Badge variant="outline" className="text-[10px] px-1.5 py-0">{item.content_type}</Badge>
                                        )}
                                      </div>
                                      <p className="text-xs text-muted-foreground line-clamp-2 max-w-xl">
                                        {item.content_value || "(empty)"}
                                      </p>
                                    </div>
                                    <Button
                                      size="icon"
                                      variant="ghost"
                                      className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                      onClick={() => openEdit(item)}
                                    >
                                      <Pencil className="w-4 h-4" />
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) setEditing(null); }}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Edit Content</DialogTitle>
            </DialogHeader>
            {editing && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  saveMutation.mutate({ id: editing.id, content_value: editValue });
                }}
                className="space-y-4"
              >
                <div className="flex gap-2">
                  <Badge>{editing.page}</Badge>
                  <Badge variant="outline">{editing.section}</Badge>
                  <Badge variant="secondary">{formatKey(editing.content_key)}</Badge>
                </div>
                <div>
                  <Label>Value</Label>
                  <Textarea
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    rows={editing.content_type === "json" ? 8 : 4}
                    className="font-mono text-sm"
                  />
                  {editing.content_type === "json" && (
                    <p className="text-xs text-muted-foreground mt-1">JSON format: use ["item1", "item2"] for lists</p>
                  )}
                </div>
                <div className="flex gap-2 justify-end">
                  <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                  <Button type="submit" disabled={saveMutation.isPending}>
                    {saveMutation.isPending ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ContentManager;
