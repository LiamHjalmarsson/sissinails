<template>
  <div class="min-h-screen flex justify-center items-center">
    <h1>
      {{ data.title }}
    </h1>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const { data } = await useSanityQuery(
  `*[_type == "page" && slug.current == $slug][0]`,
  {
    slug: route.params.slug,
  }
);

useSeoMeta({
  title: data.value?.seo?.metaTitle,
  description: data.value?.seo?.metaDescription,
  ogTitle: data.value?.seo?.metaTitle,
  ogDescription: data.value?.seo?.metaDescription,
  ogImage: data.value?.seo?.ogImage,
  ogUrl: data.value?.seo?.ogUrl,
  twitterTitle: data.value?.seo?.metaTitle,
  twitterDescription: data.value?.seo?.metaDescription,
  twitterImage: data.value?.seo?.ogImage,
  twitterCard: data.value?.seo?.card,
});

useHead({
  htmlAttrs: {
    lang: 'en',
  },
});
</script>
