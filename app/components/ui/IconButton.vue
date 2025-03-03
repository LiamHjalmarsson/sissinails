<template>
  <NuxtLink
    :to="to"
    class="group flex justify-center items-center p-4"
    :aria-label="label">
    <Icon
      :name="name"
      class="text-2xl lg:text-3xl lg:group-hover:-translate-y-2 duration-300 transition" />
  </NuxtLink>
</template>

<script setup>
defineProps({
  name: String,
  label: String,
  to: String,
});
</script>
