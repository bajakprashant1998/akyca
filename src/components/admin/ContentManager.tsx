import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Pencil, Search, FileText, Layout, ChevronDown, ChevronRight, Plus, Trash2, Copy, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import ContentEditDialog from "@/components/admin/content/ContentEditDialog";
import ContentAddDialog from "@/components/admin/content/ContentAddDialog";
import ContentBulkImport from "@/components/admin/content/ContentBulkImport";

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

const TYPE_COLORS: Record<string, string> = {
  text: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  json: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  html: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  url: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  number: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
};

const ContentManager = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editOpen, setEditOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [editing, setEditing] = useState<ContentItem | null>(null);
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

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("site_content").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["site_content_all"] });
      queryClient.invalidateQueries({ queryKey: ["site_content"] });
      toast({ title: "🗑️ Content deleted" });
    },
    onError: (e: any) => toast({ title: "Error", description: e.message, variant: "destructive" }),
  });

  const duplicateMutation = useMutation({
    mutationFn: async (item: ContentItem) => {
      const { error } = await supabase.from("site_content").insert({
        page: item.page,
        section: item.section,
        content_key: item.content_key + "_copy",
        content_value: item.content_value,
        content_type: item.content_type,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["site_content_all"] });
      toast({ title: "📋 Content duplicated" });
    },
    onError: (e: any) => toast({ title: "Error", description: e.message, variant: "destructive" }),
  });

  const openEdit = (item: ContentItem) => {
    setEditing(item);
    setEditOpen(true);
  };

  const togglePage = (page: string) => setExpandedPages((p) => ({ ...p, [page]: !p[page] }));
  const toggleSection = (key: string) => setExpandedSections((p) => ({ ...p, [key]: !p[key] }));

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

  const existingPages = [...new Set(contents.map((c) => c.page))];
  const existingSections: Record<string, string[]> = {};
  contents.forEach((c) => {
    if (!existingSections[c.page]) existingSections[c.page] = [];
    if (!existingSections[c.page].includes(c.section)) existingSections[c.page].push(c.section);
  });

  const formatKey = (key: string) => key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  const exportContent = () => {
    const json = JSON.stringify(contents, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "site-content-backup.json"; a.click();
    URL.revokeObjectURL(url);
    toast({ title: "📥 Content exported" });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Layout className="w-5 h-5" />
              Website Content Editor
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {contents.length} content items across {existingPages.length} pages
            </p>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-60">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search content..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
            </div>
            <Button size="icon" variant="outline" onClick={exportContent} title="Export backup">
              <Download className="w-4 h-4" />
            </Button>
            <Button onClick={() => setAddOpen(true)} className="gap-1.5 whitespace-nowrap">
              <Plus className="w-4 h-4" /> Add
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="text-center py-12 text-muted-foreground">
            <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full mx-auto mb-3" />
            Loading content...
          </div>
        ) : Object.keys(grouped).length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <FileText className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p>No content found{search ? ` matching "${search}"` : ""}.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {Object.entries(grouped).map(([page, sections]) => {
              const isPageExpanded = expandedPages[page] !== false;
              const totalItems = Object.values(sections).reduce((a, b) => a + b.length, 0);

              return (
                <div key={page} className="border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => togglePage(page)}
                    className="w-full flex items-center justify-between p-4 bg-muted/50 hover:bg-muted transition-colors text-left"
                  >
                    <div className="flex items-center gap-2">
                      {isPageExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                      <span className="font-semibold text-base">{PAGE_LABELS[page] || `📄 ${page.charAt(0).toUpperCase() + page.slice(1)}`}</span>
                      <Badge variant="secondary" className="text-xs">{totalItems} items</Badge>
                    </div>
                    <span className="text-xs text-muted-foreground">{Object.keys(sections).length} sections</span>
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
                                    className="flex items-start justify-between gap-3 px-8 py-3 hover:bg-muted/20 transition-colors group"
                                  >
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="text-sm font-medium text-foreground">{formatKey(item.content_key)}</span>
                                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${TYPE_COLORS[item.content_type] || TYPE_COLORS.text}`}>
                                          {item.content_type}
                                        </span>
                                      </div>
                                      <p className="text-xs text-muted-foreground line-clamp-2 max-w-xl">
                                        {item.content_value || "(empty)"}
                                      </p>
                                    </div>
                                    <div className="flex items-center gap-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                      <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => openEdit(item)} title="Edit">
                                        <Pencil className="w-3.5 h-3.5" />
                                      </Button>
                                      <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => duplicateMutation.mutate(item)} title="Duplicate">
                                        <Copy className="w-3.5 h-3.5" />
                                      </Button>
                                      <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                          <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive hover:text-destructive" title="Delete">
                                            <Trash2 className="w-3.5 h-3.5" />
                                          </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                          <AlertDialogHeader>
                                            <AlertDialogTitle>Delete this content?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                              This will remove "{formatKey(item.content_key)}" from {item.page}/{item.section}. The website will fall back to default text.
                                            </AlertDialogDescription>
                                          </AlertDialogHeader>
                                          <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => deleteMutation.mutate(item.id)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                                              Delete
                                            </AlertDialogAction>
                                          </AlertDialogFooter>
                                        </AlertDialogContent>
                                      </AlertDialog>
                                    </div>
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

        <ContentEditDialog open={editOpen} onOpenChange={setEditOpen} item={editing} />
        <ContentAddDialog open={addOpen} onOpenChange={setAddOpen} existingPages={existingPages} existingSections={existingSections} />
      </CardContent>
    </Card>
  );
};

export default ContentManager;
