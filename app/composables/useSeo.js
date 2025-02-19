export function useSeo(seoData) {
  useSeoMeta({
    title: seoData.metaTitle,
    description: seoData.metaDescription,
    ogTitle: seoData.metaTitle,
    ogDescription: seoData.metaDescription,
    ogImage: seoData.ogImage.asset.url,
    ogUrl: seoData.ogUrl,
    twitterTitle: seoData.metaTitle,
    twitterDescription: seoData.metaDescription,
    twitterImage: seoData.ogImage.asset.url,
    twitterCard: seoData.card,
  });
}
