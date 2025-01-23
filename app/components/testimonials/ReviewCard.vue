<template>
  <div
    class="p-6 rounded-2xl shadow bg-neutral-white relative overflow-hidden w-96 h-96 group">
    <div
      class="absolute left-0 -top-3/4 rounded-full bg-secondary w-96 h-96 scale-125 shadow-bottom shadow-neutral/50"></div>
    <div class="flex flex-col items-center relative h-full">
      <NuxtImg
        :src="`images/${image}`"
        class="object-cover h-32 w-32 rounded-full mt-8"
        alt="Service Image" />
      <div class="flex-1 flex flex-col justify-center items-center">
        <div
          class="justify-between flex gap-4 text-2xl text-neutral w-fit mx-auto mb-4">
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
