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
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});
</script>
