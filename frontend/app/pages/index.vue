<template>
  <component
    v-for="(section, index) in data?.builder?.sections"
    :key="index"
    :is="componentMap[section._type]"
    v-bind="section" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const { data } = await useSanityQuery(`*[_type == "homePage"][0] {
  builder {
    sections
  },
  title,
}`);

useSeo();

const componentMap = {
  hero: defineAsyncComponent(() => import('~/components/hero/Hero.vue')),
  contentblock: defineAsyncComponent(
    () => import('~/components/content/Content.vue')
  ),
  service: defineAsyncComponent(
    () => import('~/components/service/Service.vue')
  ),
  list: defineAsyncComponent(() => import('~/components/list/List.vue')),
  gallery: defineAsyncComponent(
    () => import('~/components/gallery/Gallery.vue')
  ),
  testimonial: defineAsyncComponent(
    () => import('~/components/testimonials/Testimonials.vue')
  ),
};
</script>
