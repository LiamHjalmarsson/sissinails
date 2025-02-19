export function useSeo(seoData) {
  useSeoMeta({
    title: seoData.metaTitle,
    description: seoData.metaDescription,
    ogTitle: seoData.metaTitle,
    ogDescription: seoData.metaDescription,
    ogImage: seoData.ogImage,
    ogUrl: seoData.ogUrl,
    twitterTitle: seoData.metaTitle,
    twitterDescription: seoData.metaDescription,
    twitterImage: seoData.ogImage,
    twitterCard: seoData.card,
  });
}
