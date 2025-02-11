<template>
  <div class="flex flex-col">
    <div class="border-l-2 pl-4 border-accent mb-5 lg:mb-10">
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
