<template>
  <div
    class="flex-1 h-96 md:h-[400px] lg:h-[450px] flex flex-col relative shadow-lg hover:shadow-2xl duration-300 transition group overflow-hidden hover:-translate-y-2 rounded-xl">
    <!-- Image Section -->
    <div :class="['w-full h-full absolute overflow-hidden opacity-40 ']">
      <NuxtImg
        :src="image"
        class="object-cover h-full w-full group-hover:scale-125 transition duration-300"
        alt="Service Image" />
    </div>

    <!-- Content Section -->
    <div class="h-full flex flex-col p-6 lg:p-8">
      <div
        class="relative h-full flex flex-col justify-center items-center gap-5">
        <h3 class="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-extrabold">
          {{ title }}
        </h3>

        <p class="cursor-default text-center max-sm:text-sm font-semibold">
          {{ description }}
        </p>
      </div>

      <div
        class="flex gap-5 justify-between p-6 lg:p-8 w-full absolute bottom-0 left-0 max-sm:text-sm lg:text-lg">
        <p class="flex flex-col">
          <strong class="">Price</strong>
          {{ price }}
        </p>
        <p class="flex flex-col">
          <strong class="">Duration</strong>
          {{ duration }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

let { color, image, title, icon, description, price, duration } = defineProps({
  image: String,
  title: String,
  icon: String,
  description: String,
  color: String,
  price: String,
  duration: String,
});

const borderColor = computed(() => `border-${color} text-${color}`);
</script>
