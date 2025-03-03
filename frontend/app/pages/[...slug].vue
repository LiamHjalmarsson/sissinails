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
import Content from '~/components/content/Content.vue';
import Gallery from '~/components/gallery/Gallery.vue';
import Hero from '~/components/hero/Hero.vue';
import List from '~/components/list/List.vue';
import Service from '~/components/service/Service.vue';
import Testimonials from '~/components/testimonials/Testimonials.vue';

const route = useRoute();
const slug = route.params.slug;

const { data } = await useSanityQuery(
  `*[_type == "page" && slug.current == "${slug}"][0]`
);

useHead({
  title: data.value.title,
});

const getComponentName = (type) => {
  const componentMap = {
    hero: Hero,
    contentblock: Content,
    service: Service,
    list: List,
    gallery: Gallery,
    testimonial: Testimonials,
  };

  return componentMap[type] || null;
};
</script>
