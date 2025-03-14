<template>
  <button
    :type="type"
    :class="variantType"
    class="group relative w-fit py-4 px-6 lg:py-3 lg:px-6 overflow-hidden z-10 text-center flex justify-center items-center shadow-middle lg:hover:shadow-xl lg:hover:-translate-y-1 transition duration-500">
    <span
      :class="hoverVariantType"
      class="absolute left-0 w-0 h-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:scale-110" />
    <span
      :class="focusVariantType"
      class="absolute left-0 w-0 h-full transition-all duration-500 group-focus:w-full group-focus:h-full group-focus:scale-110" />

    <span
      class="relative z-10 tracking-wider font-semibold lg:font-bold lg:text-lg flex justify-center items-center gap-2.5">
      <slot />
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const { variant } = defineProps({
  type: {
    type: String,
    default: 'button',
  },

  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value),
  },
});

const variantType = computed(() => {
  return variant === 'secondary'
    ? 'bg-secondary text-neutral-white'
    : 'bg-primary text-neutral-white';
});

const hoverVariantType = computed(() => {
  return variant === 'secondary' ? 'bg-secondary-hover' : 'bg-primary-hover';
});

const focusVariantType = computed(() => {
  return variant === 'secondary' ? 'bg-secondary-active' : 'bg-primary-active';
});
</script>
