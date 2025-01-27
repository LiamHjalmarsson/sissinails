<template>
  <div class="flex flex-col">
    <h2
      class="text-lg font-semibold text-primary-active tracking-wide uppercase">
      {{ subTitle }}
    </h2>

    <h1 class="text-4xl font-extrabold leading-tight uppercase">
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
