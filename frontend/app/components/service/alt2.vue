<template>
  <div
    class="relative flex flex-col flex-1 h-72 min-w-72 lg:min-w-80 md:h-[350px] lg:h-[450px] shadow-lg lg:hover:shadow-2xl transition duration-300 group overflow-hidden rounded-2xl lg:hover:-translate-y-2 bg-white">
    <!-- Background Image with Overlay -->
    <div
      class="absolute inset-0 opacity-25 group-hover:opacity-30 transition-opacity duration-300">
      <NuxtImg
        :src="$urlFor(service.image.asset).url()"
        :alt="service.image.alt"
        class="w-full h-full object-cover" />
    </div>

    <!-- Content Section -->
    <div
      class="relative z-10 flex flex-col justify-center items-center gap-5 h-full p-5 lg:p-10 bg-gradient-to-t from-neutral-white via-neutral-white/30 to-transparent">
      <h3 class="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-extrabold">
        {{ service.title }}
      </h3>
      <p class="text-gray-700 text-sm sm:text-base font-medium text-center">
        {{ service.description }}
      </p>
    </div>

    <!-- Pricing & Duration -->
    <div
      class="flex justify-between w-full text-sm lg:text-base absolute bottom-0 p-10 z-10">
      <div class="flex flex-col">
        <span class="font-semibold">Price</span>
        <span class="font-bold">{{ service.price }}</span>
      </div>
      <div class="flex flex-col">
        <span class="font-semibold">Duration</span>
        <span class="font-bold">{{ service.duration }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  service: Object,
});
</script>
