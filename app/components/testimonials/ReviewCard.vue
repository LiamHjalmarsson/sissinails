<template>
  <div
    class="max-lg:min-w-full lg:w-full lg:flex-1 rounded-xl transition duration-300 lg:hover:-translate-y-1 max-sm:px-5">
    <div class="transition p-4 sm:p-5 lg:p-6 rounded-xl">
      <div class="flex flex-col items-center h-full gap-6 sm:gap-8">
        <NuxtImg
          :src="`images/${image}`"
          class="object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full shadow-middle"
          alt="Client Image" />

        <p class="text-center text-sm sm:text-base leading-relaxed">
          {{ description }}
        </p>

        <div class="flex gap-1 text-base md:text-lg lg:text-xl w-fit mx-auto">
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
