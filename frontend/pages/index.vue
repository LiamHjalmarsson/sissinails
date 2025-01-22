<template>
  <h1>s</h1>
</template>

<script setup>
const query = groq`{ "articles": *[_type == "article"] }`;

const sanity = useSanity();

const { data } = await useAsyncData('articles', () => sanity.fetch(query));
</script>
