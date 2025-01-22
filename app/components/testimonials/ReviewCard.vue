<template>
  <div
    class="p-6 rounded-2xl shadow bg-neutral-white relative overflow-hidden w-96 h-96 group">
    <div
      class="absolute left-0 -top-2/3 rounded-full bg-secondary w-96 h-96 scale-125 shadow-bottom shadow-neutral/50 transition duration-700 group-hover:scale-[3] group-hover:opacity-50"></div>
    <div class="flex flex-col items-center relative h-full">
      <NuxtImg
        :src="`images/${image}`"
        class="object-cover h-36 w-36 rounded-full mt-8"
        alt="Service Image" />
      <div
        class="flex-1 flex-col justify-center items-center line-clamp-4 mt-4">
        <div
          class="justify-between flex gap-4 text-2xl text-neutral w-fit mx-auto mb-4">
          <Icon name="material-symbols:star" />
          <Icon name="material-symbols:star" />
          <Icon name="material-symbols:star" />
          <Icon name="material-symbols:star" />
          <Icon name="material-symbols:star" />
        </div>
        <p
          class="text-center leading-relaxed text-lg font-semibold transition duration-300 delay-150">
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
