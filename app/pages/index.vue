<template>
  <div>
    <HeaderV2 />
    <Welcome />
    <Service :services="data.services" />
    <Open />
    <Gallery />
    <Testimonials />
  </div>
</template>

<script setup>
const { data } = await useSanityQuery(`*[_type == "page"][0] {
  title,
  seo,
  services
}`);

useSeoMeta({
  title: data.value.seo.metaTitle,
  description: data.value.seo.metaDescription,
  ogTitle: data.value.seo.metaTitle,
  ogDescription: data.value.seo.metaDescription,
  ogImage: data.value.seo.ogImage,
  ogUrl: data.value.seo.ogUrl,
  twitterTitle: data.value.seo.metaTitle,
  twitterDescription: data.value.seo.metaDescription,
  twitterImage: data.value.seo.ogImage,
  twitterCard: data.value.seo.card,
});

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  // link: [
  //   {
  //     rel: 'icon',
  //     type: 'image/png',
  //     href: '/favicon.png',
  //   },
  // ],
});
</script>
