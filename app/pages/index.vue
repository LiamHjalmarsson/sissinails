<template>
  <div class="h-screen flex justify-center items-center">
    <component
      v-for="(section, index) in data?.builder?.sections"
      :key="index"
      :is="getComponentName(section._type)"
      v-bind="section" />
  </div>
</template>

<script setup>
import Hero from '~/components/hero/Hero.vue';

const { data } = await useSanityQuery(`*[_type == "homePage"][0] {
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
}`);

console.log(data);

const getComponentName = (type) => {
  const componentMap = {
    hero: Hero,
  };

  return componentMap[type] || null;
};

useSeo(data.value.seo);
</script>
