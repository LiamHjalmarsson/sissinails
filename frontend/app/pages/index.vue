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

const config = inject('config');

useSeo();

const faviconUrl = config.value?.favicon?.asset?.url || '/default-favicon.png';

useHead({
  htmlAttrs: {
    lang: config.value?.lang || 'en',
  },

  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: faviconUrl,
    },
  ],

  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      charset: 'utf-8',
    },
    {
      name: 'keywords',
      content: config.value?.seo?.keywords?.join(', '),
    },
    {
      name: 'description',
      content: config.value?.seo?.metaDescription,
    },
  ],
});

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
