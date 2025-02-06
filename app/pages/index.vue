<template>
  <div>
    <HeaderV2 />
    <Welcome />
    <Service />
    <Open />
    <Gallery />
    <Testimonials />
  </div>
</template>

<script setup>
import HeaderV2 from '~/components/header/HeaderV2.vue';

useSeoMeta({
  title: 'Sissi Nails',
  description: 'Luxury nail care with a personalized touch.',
  ogTitle: 'Sissi Nails',
  ogDescription: 'Luxury nail care with a personalized touch.',
  ogImage: '/images/nails.png',
  ogUrl: `http:localhost:3000/`,
  twitterTitle: 'Sissi Nails',
  twitterDescription: 'Luxury nail care with a personalized touch.',
  twitterImage: '/images/nails.png',
  twitterCard: 'Summary',
});

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
});
</script>
