<template>
  <div
    v-for="(image, index) in images"
    :key="image._key"
    class="w-full"
    :class="getImageClass(index)">
    <NuxtImg
      :src="$urlFor(image.asset).url()"
      :class="[
        'w-full object-cover h-64 sm:h-72 md:h-96 lg:h-[450px] relative shadow-middle',
        getImagePosition(index),
      ]"
      :alt="image.alt"
      loading="lazy" />
  </div>
</template>

<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const getImageClass = (index) => {
  return index === 0 ? 'md:w-2/3' : 'md:w-1/3';
};

const getImagePosition = (index) => {
  return index === 0 ? 'lg:bottom-5' : 'lg:top-5';
};
</script>
