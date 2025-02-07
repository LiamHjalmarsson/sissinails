<template>
  <div
    class="p-5 lg:p-10 max-sm:min-w-full max-lg:min-w-80 w-full overflow-hidden group lg:hover:-translate-y-2 duration-500 bg-accent/5 shadow-middle lg:hover:shadow-xl">
    <div class="flex flex-col items-center h-full gap-5">
      <NuxtImg
        :src="`images/${image}`"
        class="object-cover w-20 h-20 sm:w-24 sm:h-24 md:h-28 md:w-28 lg:w-32 lg:h-32 rounded-full"
        alt="Service Image" />
      <div class="flex-1 flex flex-col justify-center items-center">
        <div
          class="justify-between flex gap-2.5 text-base sm:text-lg md:text-xl lg:text-2xl text-neutral w-fit mx-auto mb-4">
          <Icon
            name="material-symbols:star"
            class="text-secondary" />
          <Icon
            name="material-symbols:star"
            class="text-secondary" />
          <Icon
            name="material-symbols:star"
            class="text-secondary" />
          <Icon
            name="material-symbols:star"
            class="text-secondary" />
          <Icon
            name="material-symbols:star"
            class="text-secondary" />
        </div>

        <p
          class="text-center max-md:text-sm leading-relaxed font-medium line-clamp-3">
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
