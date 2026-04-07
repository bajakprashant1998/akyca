import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
  pageKey?: string;
}

export const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl = "",
  ogImage = "/akyca.jpeg",
  jsonLd,
  noindex = false,
  pageKey,
}: SEOProps) => {
  const siteName = "Ashvin K Yagnik & Co.";
  const baseUrl = "https://akyca.com";

  const { data: seoOverrides } = useQuery({
    queryKey: ["seo_overrides", pageKey],
    queryFn: async () => {
      if (!pageKey) return null;
      const { data } = await supabase
        .from("site_content")
        .select("content_key, content_value")
        .eq("page", "seo")
        .eq("section", pageKey);
      if (!data?.length) return null;
      const map: Record<string, string> = {};
      data.forEach((r) => { map[r.content_key] = r.content_value; });
      return map;
    },
    enabled: !!pageKey,
    staleTime: 5 * 60 * 1000,
  });

  const finalTitle = seoOverrides?.title || title;
  const finalDesc = seoOverrides?.description || description;
  const finalKeywords = seoOverrides?.keywords || keywords;

  const fullTitle = finalTitle.includes(siteName)
    ? finalTitle
    : `${finalTitle} | ${siteName} | Best CA Firm in Ahmedabad, Gujarat`;
  const fullCanonical = `${baseUrl}${canonicalUrl}`;
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={finalDesc} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}
      <link rel="canonical" href={fullCanonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={`${siteName} - Best CA Firm in Ahmedabad`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={fullOgImage} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)}
        </script>
      )}
    </Helmet>
  );
};
