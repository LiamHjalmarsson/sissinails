<template>
  <div class="flex flex-col max-lg:mx-auto max-lg:w-fit">
    <div
      class="lg:border-l-2 lg:pl-5 border-accent max-lg:text-center mb-5 lg:mb-10">
      <h1
        class="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-accent tracking-wide uppercase">
        {{ title }}
      </h1>

      <h2
        class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide uppercase mt-2.5">
        {{ subTitle }}
      </h2>
    </div>

    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subTitle: String,
});
</script>
