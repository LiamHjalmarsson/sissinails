<template>
  <div
    class="max-md:min-w-[97vw] max-lg:min-w-[65vw] lg:w-full lg:flex-1 shadow-middle rounded-xl border-2 border-gray-50 transition duration-300 hover:-translate-y-1">
    <div class="transition p-4 sm:p-5 lg:p-6 rounded-xl">
      <div class="flex flex-col items-center h-full gap-6 sm:gap-8">
        <NuxtImg
          :src="`images/${image}`"
          class="object-cover w-14 h-14 sm:w-16 sm:h-16 md:h-20 md:w-20 lg:w-24 lg:h-24 rounded-full shadow-md"
          alt="Client Image" />

        <div
          class="flex gap-1 text-sm sm:text-base md:text-lg lg:text-xl w-fit mx-auto">
          <Icon
            v-for="number in 5"
            :key="number"
            :name="
              number <= rating
                ? 'material-symbols:star'
                : 'material-symbols:star-outline'
            "
            class="text-secondary" />
        </div>

        <p class="text-center text-sm sm:text-base leading-relaxed">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  description: String,
  image: String,
  rating: Number,
});
</script>
