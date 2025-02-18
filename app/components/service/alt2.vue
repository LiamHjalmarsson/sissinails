<template>
  <div
    class="flex-1 h-72 min-w-72 lg:min-w-80 md:h-[350px] lg:h-[450px] flex flex-col relative duration-300 transition group lg:hover:-translate-y-2 rounded-2xl shadow-middle overflow-hidden">
    <div class="flex-1 relative">
      <NuxtImg
        :src="$urlFor(service.image.asset).url()"
        class="w-full h-full absolute object-cover"
        :alt="service.image.alt" />

      <span
        class="absolute top-3 right-3 bg-primary text-sm text-white tracking-wider font-semibold px-3 py-1 rounded-full shadow-md">
        {{ service.price }}
      </span>
    </div>

    <!-- Content Section -->
    <div class="flex flex-col p-5 gap-2.5 lg:gap-2.5">
      <h3 class="text-lg sm:text-xl font-extrabold tracking-wide">
        {{ service.title }}
      </h3>

      <p class="cursor-default max-sm:text-sm font-semibold">
        {{ service.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
let { service } = defineProps({
  service: Object,
});
</script>
