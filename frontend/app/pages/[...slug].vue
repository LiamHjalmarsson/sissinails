<template>
  <div class="min-h-screen">
    <component
      v-for="(section, index) in data?.builder?.sections"
      :key="index"
      :is="componentMap[section._type] || null"
      v-bind="section" />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const route = useRoute();
const slug = route.params.slug;

const { data } = await useSanityQuery(
  `*[_type == "page" && slug.current == "${slug}"][0] {
      builder {
        sections
      },
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
  }`
);

useSeo(data?.value?.seo);

useHead({
  title: data?.value?.title,
});

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
