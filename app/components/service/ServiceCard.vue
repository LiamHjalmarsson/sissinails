<template>
  <div
    class="flex-1 h-72 min-w-72 lg:min-w-80 md:h-[350px] lg:h-[450px] flex flex-col relative shadow-lg lg:hover:shadow-2xl duration-300 transition group overflow-hidden lg:hover:-translate-y-2">
    <div :class="['w-full h-full absolute overflow-hidden opacity-20']">
      <!-- <sanity-image :asset-id="service.image.asset._ref" auto="format" /> -->
      <NuxtImg
        :src="$urlFor(service.image.asset).url()"
        class="w-full h-full object-cover"
        :alt="service.image.alt" />
    </div>

    <!-- Content Section -->
    <div class="h-full flex flex-col p-5 lg:p-10">
      <div
        class="relative h-full flex flex-col justify-center items-center gap-5">
        <h3 class="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-extrabold">
          {{ service.title }}
        </h3>

        <p class="cursor-default text-center max-sm:text-sm font-semibold">
          {{ service.description }}
        </p>
      </div>

      <div
        class="flex gap-5 justify-between p-5 lg:p-10 w-full absolute bottom-0 left-0 max-sm:text-sm lg:text-lg">
        <p class="flex flex-col">
          <strong class="">Price</strong>
          {{ service.price }}
        </p>
        <p class="flex flex-col">
          <strong class="">Duration</strong>
          {{ service.duration }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
let { service } = defineProps({
  service: Object,
});
</script>
