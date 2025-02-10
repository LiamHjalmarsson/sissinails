<template>
  <div class="flex flex-col">
    <div class="border-l-2 pl-4 border-accent mb-10">
      <h2 class="md:text-lg font-semibold text-accent tracking-wide uppercase">
        {{ subTitle }}
      </h2>

      <h1
        class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight uppercase mt-2.5">
        {{ title }}
      </h1>
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
