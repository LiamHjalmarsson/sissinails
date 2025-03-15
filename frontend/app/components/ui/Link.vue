<template>
  <NuxtLink
    :to="`/${to}`"
    class="group relative w-fit py-4 px-6 lg:py-3 lg:px-6 overflow-hidden z-10 bg-primary text-center flex justify-center items-center shadow-middle lg:hover:shadow-xl lg:hover:-translate-y-1 transition duration-500">
    <span
      class="absolute left-0 bg-primary-hover w-0 h-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:scale-110"></span>
    <span
      class="absolute left-0 bg-primary-active w-0 h-full transition-all duration-500 group-focus:w-full group-focus:h-full group-focus:scale-110"></span>

    <span
      class="relative z-10 tracking-wider font-semibold lg:font-bold lg:text-lg text-neutral-white flex justify-center items-center gap-2.5">
      <slot />
    </span>
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>
