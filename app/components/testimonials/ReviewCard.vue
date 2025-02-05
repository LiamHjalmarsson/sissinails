<template>
  <div
    class="px-6 py-12 bg-neutral-white max-lg:min-w-full relative overflow-hidden group hover:-translate-y-2 duration-500 shadow-middle hover:shadow-xl">
    <div class="flex flex-col items-center relative h-full gap-5">
      <NuxtImg
        :src="`images/${image}`"
        class="object-cover h-32 w-32 rounded-full"
        alt="Service Image" />
      <div class="flex-1 flex flex-col justify-center items-center">
        <div
          class="justify-between flex gap-2.5 text-2xl text-neutral w-fit mx-auto mb-4">
          <Icon name="material-symbols:star" />
          <Icon name="material-symbols:star" />
          <Icon name="material-symbols:star" />
          <Icon name="material-symbols:star" />
          <Icon name="material-symbols:star" />
        </div>

        <p class="text-center leading-relaxed font-medium line-clamp-3">
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
