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

// useSeo(data.value.seo);
</script>
