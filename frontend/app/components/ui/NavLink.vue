<template>
  <li class="flex w-full group">
    <NuxtLink
      @click="handleMenu"
      :to="`/${to}`"
      class="capitalize w-full font-bold tracking-wider text-xl sm:text-2xl md:text-3xl lg:text-4xl group-hover:text-primary relative cursor-pointer transition duration-300">
      {{ label }}
    </NuxtLink>
  </li>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },

  label: {
    type: String,
    required: true,
  },

  variant: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['close']);

const handleMenu = () => {
  emit('close');
};
</script>
