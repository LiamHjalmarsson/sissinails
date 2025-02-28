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
import Gallery from '~/components/gallery/Gallery.vue';
import Hero from '~/components/hero/Hero.vue';
import List from '~/components/list/List.vue';
import Service from '~/components/service/Service.vue';

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
    service: Service,
    list: List,
    gallery: Gallery,
  };

  return componentMap[type] || null;
};

useSeo(data.value.seo);
</script>
