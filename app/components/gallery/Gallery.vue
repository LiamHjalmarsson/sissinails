<template>
  <section class="w-full flex flex-col py-20 lg:py-40">
    <Heading
      title="Gallery"
      subTitle="Nail Inspiration"
      class="max-w-3xl mx-auto text-center justify-center items-center" />

    <div class="mt-10 w-full">
      <div class="flex max-lg:flex-wrap w-full lg:h-[350px] max-w-7xl mx-auto">
        <NuxtImg
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          class="object-cover max-lg:h-72 max-lg:w-1/2 lg:flex-1 relative group overflow-hidden transition-all duration-500 delay-75 ease-in-out lg:hover:flex-[3] hover:z-10" />
      </div>
    </div>

    <div class="mt-10 max-md:w-1/2 mx-auto">
      <ButtonV2> View more </ButtonV2>
    </div>
  </section>
</template>

<script setup>
const images = [
  { src: '/images/hand.png', alt: 'Gallery Image 1' },
  { src: '/images/nails.png', alt: 'Gallery Image 2' },
  { src: '/images/style.png', alt: 'Gallery Image 3' },
  { src: '/images/s.png', alt: 'Gallery Image 4' },
];
</script>
