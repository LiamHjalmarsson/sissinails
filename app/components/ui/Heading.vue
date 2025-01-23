<template>
  <div class="flex flex-col">
    <h2 class="text-lg font-semibold text-primary tracking-wide uppercase">
      {{ subTitle }}
    </h2>

    <h1
      class="text-4xl font-extrabold text-neutral leading-tight uppercase mt-2 mb-4">
      {{ title }}
    </h1>

    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subTitle: String,
});
</script>
