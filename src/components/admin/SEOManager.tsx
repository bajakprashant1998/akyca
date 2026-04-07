import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Save, Globe, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PAGES = [
  { key: "home", label: "Home", path: "/" },
  { key: "about", label: "About", path: "/about" },
  { key: "services", label: "Services", path: "/services" },
  { key: "contact", label: "Contact", path: "/contact" },
  { key: "blog", label: "Blog / Insights", path: "/blog" },
  { key: "branches", label: "Branches", path: "/branches" },
  { key: "history", label: "History", path: "/history" },
  { key: "tax-tools", label: "Tax Tools", path: "/tax-tools" },
];

interface SEOData {
  title: string;
  description: string;
  keywords: string;
}

const SEOManager = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState("");

  const { data: seoContent, isLoading } = useQuery({
    queryKey: ["seo_content"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_content")
        .select("*")
        .eq("page", "seo");
      if (error) throw error;
      return data || [];
    },
  });

  const getSEO = (pageKey: string): SEOData => {
    const find = (key: string) =>
      seoContent?.find((c) => c.section === pageKey && c.content_key === key)?.content_value || "";
    return { title: find("title"), description: find("description"), keywords: find("keywords") };
  };

  const saveMutation = useMutation({
    mutationFn: async ({ pageKey, seo }: { pageKey: string; seo: SEOData }) => {
      const rows = [
        { page: "seo", section: pageKey, content_key: "title", content_value: seo.title, content_type: "text" },
        { page: "seo", section: pageKey, content_key: "description", content_value: seo.description, content_type: "text" },
        { page: "seo", section: pageKey, content_key: "keywords", content_value: seo.keywords, content_type: "text" },
      ];
      const { error } = await supabase
        .from("site_content")
        .upsert(rows, { onConflict: "page,section,content_key", ignoreDuplicates: false });
      if (error) throw error;
    },
    onSuccess: (_, { pageKey }) => {
      queryClient.invalidateQueries({ queryKey: ["seo_content"] });
      queryClient.invalidateQueries({ queryKey: ["site_content"] });
      toast({ title: `✅ SEO saved for ${pageKey}` });
    },
    onError: (e: any) => toast({ title: "Save failed", description: e.message, variant: "destructive" }),
  });

  const filtered = PAGES.filter((p) =>
    p.label.toLowerCase().includes(filter.toLowerCase())
  );

  if (isLoading) return <p className="text-muted-foreground text-sm p-4">Loading SEO settings...</p>;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Filter pages..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="pl-9"
          />
        </div>
        <Badge variant="outline" className="gap-1">
          <Globe className="w-3 h-3" /> {PAGES.length} Pages
        </Badge>
      </div>

      {filtered.map((page) => (
        <SEOPageCard
          key={page.key}
          page={page}
          seo={getSEO(page.key)}
          saving={saveMutation.isPending}
          onSave={(seo) => saveMutation.mutate({ pageKey: page.key, seo })}
        />
      ))}
    </div>
  );
};

const SEOPageCard = ({
  page,
  seo: initial,
  saving,
  onSave,
}: {
  page: { key: string; label: string; path: string };
  seo: SEOData;
  saving: boolean;
  onSave: (seo: SEOData) => void;
}) => {
  const [seo, setSEO] = useState<SEOData>(initial);
  const [dirty, setDirty] = useState(false);

  const update = (field: keyof SEOData, value: string) => {
    setSEO((prev) => ({ ...prev, [field]: value }));
    setDirty(true);
  };

  // Sync when data reloads
  if (!dirty && (seo.title !== initial.title || seo.description !== initial.description || seo.keywords !== initial.keywords)) {
    setSEO(initial);
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center justify-between">
          <span className="flex items-center gap-2">
            {page.label}
            <Badge variant="secondary" className="text-xs font-mono">{page.path}</Badge>
          </span>
          <Button
            size="sm"
            disabled={!dirty || saving}
            onClick={() => { onSave(seo); setDirty(false); }}
            className="gap-1"
          >
            <Save className="w-3.5 h-3.5" /> Save
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <Label className="text-xs text-muted-foreground">
            Meta Title <span className="ml-1 text-xs">({seo.title.length}/60)</span>
          </Label>
          <Input value={seo.title} onChange={(e) => update("title", e.target.value)} placeholder="Page title for search engines" maxLength={80} />
        </div>
        <div>
          <Label className="text-xs text-muted-foreground">
            Meta Description <span className="ml-1 text-xs">({seo.description.length}/160)</span>
          </Label>
          <Textarea value={seo.description} onChange={(e) => update("description", e.target.value)} placeholder="Brief description for search results" rows={2} maxLength={200} />
        </div>
        <div>
          <Label className="text-xs text-muted-foreground">Keywords (comma-separated)</Label>
          <Input value={seo.keywords} onChange={(e) => update("keywords", e.target.value)} placeholder="keyword1, keyword2, keyword3" />
        </div>
      </CardContent>
    </Card>
  );
};

export default SEOManager;
