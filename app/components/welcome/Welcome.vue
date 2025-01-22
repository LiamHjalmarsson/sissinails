<template>
  <div class="w-full flex justify-center items-center relative">
    <div class="max-w-7xl lg:flex gap-16 h-full z-10">
      <div
        class="max-lg:mb-12 relative pl-8 py-6 content-center w-1/3 flex justify-center items-center">
        <NuxtImg
          src="/images/me.png"
          class="object-cover relative z-10 rounded-3xl ml-4 shadow-left shadow-neutral/50"
          width="380"
          height="450"
          alt="Image description for accessibility" />
        <div
          class="absolute left-0 h-full w-1/2 flex flex-wrap gap-4 overflow-hidden">
          <div
            v-for="n in 120"
            :key="n"
            class="h-3 w-3 bg-secondary rounded-full"></div>
        </div>
      </div>

      <div class="flex items-center flex-1 p-4">
        <Heading
          title="Camille at"
          subTitle="This is me">
          <p class="text-neutral-darkGray leading-relaxed text-lg">
            Step into a world of elegance and style. At My Nail Salon, we blend
            artistry with precision to bring your nail dreams to life. From
            timeless classics to bold modern designs, every detail is crafted
            with care. Relax, unwind, and let us pamper you with luxury.
          </p>
        </Heading>
      </div>
    </div>
  </div>
</template>

<script setup>
import Heading from '@/components/ui/Heading.vue';
</script>
