import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface ContentItem {
  page: string;
  section: string;
  content_key: string;
  content_value: string;
}

export const useSiteContent = (page: string) => {
  const { data: contents = [] } = useQuery({
    queryKey: ["site_content", page],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_content")
        .select("page, section, content_key, content_value")
        .eq("page", page);
      if (error) throw error;
      return data as ContentItem[];
    },
    staleTime: 5 * 60 * 1000, // 5 min cache
  });

  const get = (section: string, key: string, fallback: string): string => {
    const found = contents.find(
      (c) => c.section === section && c.content_key === key
    );
    return found?.content_value || fallback;
  };

  const getList = (section: string, key: string, fallback: string[]): string[] => {
    const found = contents.find(
      (c) => c.section === section && c.content_key === key
    );
    if (found?.content_value) {
      try {
        const parsed = JSON.parse(found.content_value);
        if (Array.isArray(parsed)) return parsed;
      } catch {
        return found.content_value.split("\n").filter(Boolean);
      }
    }
    return fallback;
  };

  return { get, getList };
};
