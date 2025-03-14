<template>
  <li class="flex lg:w-full group">
    <NuxtLink
      @click="hasClose && $emit('close')"
      :to="toPath"
      class="uppercase lg:w-full tracking-wider group-hover:text-primary cursor-pointer transition duration-300"
      :class="variantClass">
      {{ label }}
    </NuxtLink>
  </li>
</template>

<script setup>
import { computed } from 'vue';

const { variant, to } = defineProps({
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
    default: 'primary',
  },
});

defineEmits(['close']);

const variantClass = computed(() => ({
  'font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl':
    variant === 'primary',
  'text-sm sm:text-base md:text-lg lg:text-xl': variant === 'secondary',
}));

const toPath = computed(() => (to.startsWith('/') ? to : `/${to}`));

const hasClose = computed(() => variant === 'primary');
</script>
