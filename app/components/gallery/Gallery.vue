<template>
  <div class="w-full flex flex-col">
    <Heading
      title="Featured Inspiration"
      subTitle="Gallery"
      class="max-w-3xl mx-auto text-center justify-center items-center">
    </Heading>

    <div class="mt-16 w-full">
      <div class="flex w-full h-[350px] max-w-7xl mx-auto">
        <NuxtImg
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          class="object-cover flex-1 relative group overflow-hidden transition-all duration-500 delay-75 ease-in-out hover:flex-[3] hover:z-10" />
      </div>
    </div>
  </div>
</template>

<script setup>
const images = [
  { src: '/images/hand.png', alt: 'Gallery Image 1' },
  { src: '/images/nails.png', alt: 'Gallery Image 2' },
  { src: '/images/style.png', alt: 'Gallery Image 3' },
  { src: '/images/s.png', alt: 'Gallery Image 4' },
];
</script>
