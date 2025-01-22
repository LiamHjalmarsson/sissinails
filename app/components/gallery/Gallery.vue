<template>
  <div class="w-full flex flex-col">
    <Heading
      title="Get Social Together"
      subTitle="Let us"
      class="max-w-3xl mx-auto text-center justify-center items-center">
    </Heading>

    <div class="mt-16 w-full mx-auto max-w-7xl">
      <div class="flex flex-wrap w-full gap-8">
        <NuxtImg
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          class="object-cover relative flex-1 group overflow-hidden shadow-xl rounded-xl transition-all duration-500 hover:flex-[2] max-h-72" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Heading from '@/components/ui/Heading.vue';

const images = [
  { src: '/images/hand.png', alt: 'Gallery Image 1' },
  { src: '/images/nails.png', alt: 'Gallery Image 2' },
  { src: '/images/style.png', alt: 'Gallery Image 3' },
  { src: '/images/style.png', alt: 'Gallery Image 4' },
];
</script>
