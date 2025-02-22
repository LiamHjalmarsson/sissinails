<template>
  <div>
    <Header :header="data.hero" />
    <Welcome />
    <Service :services="data.services" />
    <Open />
    <Gallery :gallery="data.gallery" />
    <Testimonials />
  </div>
</template>

<script setup>
const { data } = await useSanityQuery(`*[_type == "homePage"][0] {
  title,
  seo {
    metaDescription,
    metaTitle,
    ogUrl,
    card,
    ogImage {
      asset->{url}
    }
  },
  services,
  gallery,
  hero
}`);

useSeo(data.value.seo);
</script>
