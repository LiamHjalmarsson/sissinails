<template>
  <div
    class="max-lg:min-w-full lg:w-full lg:flex-1 p-5 xl:p-10 shadow-middle transition duration-300 hover:-translate-y-2 hover:shadow-hover">
    <div class="flex flex-col items-center h-full gap-5">
      <NuxtImg
        :src="`images/${image}`"
        class="object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full shadow-middle"
        alt="Client Image" />

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

      <p class="text-center text-sm sm:text-base font-light">
        {{ description }}
      </p>
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
