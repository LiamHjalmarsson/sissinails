<template>
  <section
    class="w-full py-20 lg:py-40 mx-auto max-w-7xl max-lg:px-5 max-xl:px-10 section"
    ref="sectionRef">
    <slot />
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { observeSection } from '@/utils/sectionObserver';

const sectionRef = ref(null);

observeSection(sectionRef);
</script>
