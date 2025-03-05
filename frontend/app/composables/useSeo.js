export function useSeo(seo) {
  const config = inject('config');

  useSeoMeta({
    title: seo?.metaTitle || config.value?.seo?.metaTitle,
    description: seo?.metaDescription || config.value?.seo?.metaDescription,
    ogTitle: seo?.metaTitle || config.value?.seo?.metaTitle,
    ogDescription: seo?.metaDescription || config.value?.seo?.metaDescription,
    ogImage: seo?.ogImage?.asset?.url || config.value?.seo?.ogImage?.asset?.url,
    ogUrl: seo?.canonicalUrl || config.value?.seo?.canonicalUrl,
    twitterTitle: seo?.metaTitle || config.value?.seo?.metaTitle,
    twitterDescription:
      seo?.metaDescription || config.value?.seo?.metaDescription,
    twitterImage:
      seo?.ogImage?.asset?.url || config.value?.seo?.ogImage?.asset?.url,
    twitterCard: seo?.twitterCard || config.value?.seo?.twitterCard,
  });
}
