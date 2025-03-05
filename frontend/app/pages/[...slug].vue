<template>
  <div class="min-h-screen">
    <component
      v-for="(section, index) in data?.builder?.sections"
      :key="index"
      :is="getComponentName(section._type)"
      v-bind="section" />
  </div>
</template>

<script setup>
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
