<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-lg font-semibold text-primary tracking-wide uppercase">
      {{ subTitle }}
    </h2>

    <h1 class="text-4xl font-extrabold text-neutral leading-tight uppercase">
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
