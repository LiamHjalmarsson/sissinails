<template>
  <section
    class="w-full py-20 lg:py-40 mx-auto max-w-7xl max-lg:px-5 max-xl:px-10">
    <div
      class="flex-col w-full section"
      ref="galleryRef">
      <Heading
        title="Gallery"
        subTitle="Nail Inspiration"
        class="max-w-3xl mb-5" />

      <div class="w-full">
        <div
          class="grid grid-cols-2 lg:flex max-lg:flex-wrap w-full lg:h-[300px] max-w-7xl mx-auto">
          <NuxtImg
            v-for="(image, index) in images"
            :key="index"
            :src="image.src"
            :alt="image.alt"
            class="flex-1 object-cover max-lg:h-52 max-lg:w-full" />
          <!-- class="object-cover max-lg:h-72 max-lg:w-1/2 lg:flex-1 relative group overflow-hidden transition-all duration-500 delay-75 ease-in-out lg:hover:flex-[3] hover:z-10" /> -->
        </div>
      </div>
      <div class="w-full">
        <div
          class="grid grid-cols-2 lg:flex max-lg:flex-wrap w-full lg:h-[300px] max-w-7xl mx-auto">
          <NuxtImg
            v-for="(image, index) in images"
            :key="index"
            :src="image.src"
            :alt="image.alt"
            class="flex-1 object-cover max-lg:h-52 max-lg:w-full" />
        </div>
      </div>

      <div class="mt-10 w-full sm:w-1/2 lg:w-fit mx-auto">
        <ButtonV2> View more </ButtonV2>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { observeSection } from '@/utils/sectionObserver';

const images = [
  { src: '/images/hand.png', alt: 'Gallery Image 1' },
  { src: '/images/nails.png', alt: 'Gallery Image 2' },
  { src: '/images/style.png', alt: 'Gallery Image 3' },
  { src: '/images/s.png', alt: 'Gallery Image 4' },
];

const galleryRef = ref(null);

observeSection(galleryRef);
</script>
