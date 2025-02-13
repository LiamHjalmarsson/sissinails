<template>
  <div class="flex flex-col max-lg:mx-auto max-lg:w-fit">
    <div
      class="lg:border-l-2 max-lg:pb-4 lg:pl-4 border-accent mb-5 lg:mb-10 max-lg:text-center">
      <h1 class="md:text-lg font-semibold text-accent tracking-wide uppercase">
        {{ title }}
      </h1>

      <h2
        class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight uppercase mt-2.5">
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
