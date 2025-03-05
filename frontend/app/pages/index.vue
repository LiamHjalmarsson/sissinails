<template>
  <div>
    <component
      v-for="(section, index) in data?.builder?.sections"
      :key="index"
      :is="getComponentName(section._type)"
      v-bind="section" />
  </div>
</template>

<script setup>
const { data } = await useSanityQuery(`*[_type == "homePage"][0] {
  builder {
    sections
  },
  title,
}`);

useSeo();

const getComponentName = (type) => {
  const componentMap = {
    hero: () => import('~/components/hero/Hero.vue'),
    contentblock: () => import('~/components/content/Content.vue'),
    service: () => import('~/components/service/Service.vue'),
    list: () => import('~/components/list/List.vue'),
    gallery: () => import('~/components/gallery/Gallery.vue'),
    testimonial: () => import('~/components/testimonials/Testimonials.vue'),
  };

  return defineAsyncComponent(componentMap[type] || null);
};
</script>
