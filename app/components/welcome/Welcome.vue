<template>
  <div class="w-full flex justify-center items-center relative">
    <div class="max-w-7xl lg:flex gap-16 lg:gap-12 h-full z-10 px-6">
      <div
        class="max-lg:mb-12 relative pl-8 py-6 content-center w-full px-4 lg:w-1/3 flex justify-center items-center">
        <NuxtImg
          src="/images/me.png"
          class="object-cover relative z-10 rounded-2xl ml-4 shadow-left shadow-neutral/50"
          width="380"
          height="450"
          alt="Image description for accessibility" />
        <div
          class="absolute left-0 h-full w-1/2 flex flex-wrap gap-4 overflow-hidden">
          <div
            v-for="n in 120"
            :key="n"
            class="h-2 lg:h-3 w-2 lg:w-3 bg-secondary rounded-full"></div>
        </div>
      </div>

      <div class="flex items-center flex-1 lg:p-12 max-lg:mt-32">
        <Heading
          title="Camille at"
          subTitle="This is me">
          <p class="text-neutral-darkGray leading-relaxed lg:text-lg">
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
