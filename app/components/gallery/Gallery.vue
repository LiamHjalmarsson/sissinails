<template>
  <section class="w-full flex flex-col">
    <Heading
      title="Featured Inspiration"
      subTitle="Gallery"
      class="max-w-3xl mx-auto text-center justify-center items-center" />

    <div class="mt-10 w-full">
      <div class="flex w-full h-[350px] max-w-7xl mx-auto">
        <NuxtImg
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          class="object-cover flex-1 relative group overflow-hidden transition-all duration-500 delay-75 ease-in-out hover:flex-[3] hover:z-10" />
      </div>
    </div>

    <div class="mt-10 mx-auto flex w-full justify-center max-w-7xl">
      <div
        class="mt-10 border-t-2 border-primary flex flex-col gap-10 w-1/2 justify-center items-center pt-10">
        <Heading
          title="Let´s get social"
          class="max-w-3xl mx-auto text-center justify-center items-center" />

        <div class="flex gap-20">
          <div class="flex items-center gap-2.5">
            <IconButton
              name="ion:logo-instagram"
              class="p-3 text-3xl" />
            name
          </div>
          <div class="flex items-center gap-2.5">
            <IconButton
              name="ion:logo-tiktok"
              class="p-3 text-3xl" />
            name
          </div>
        </div>
      </div>
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
