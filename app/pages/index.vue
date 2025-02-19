<template>
  <div>
    <Header :header="data.header" />
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
  seo,
  services,
  gallery,
  header
}`);

useSeo(data.value.seo);

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
