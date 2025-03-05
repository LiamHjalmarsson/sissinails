<template>
  <header class="fixed z-[99999] top-0 w-full bg-neutral-white shadow-md">
    <nav
      class="p-3 md:px-12 flex gap-8 justify-between items-center mx-auto w-full">
      <NuxtLink
        to="/"
        class="flex py-4 items-center justify-center relative z-10">
        <NuxtImg v-if="config?.logo" />
        <span
          v-else
          class="text-2xl md:text-4xl font-bold">
          LOGO
        </span>
      </NuxtLink>

      <Sidebar
        v-model="menu"
        @closed="toggle" />

      <button
        class="flex flex-col top-0 gap-1.5 w-16 h-16 transition duration-300 z-[99999] right-0 max-h-[72px] justify-center items-center rounded-full overflow-hidden"
        aria-label="Toggle menu"
        :aria-expanded="menu"
        @click="toggle">
        <span
          :class="[
            'w-6 h-0.5 bg-neutral transition-all duration-200',
            menu ? ' rotate-45 translate-y-2' : 'rotate-0 translate-y-0',
          ]"></span>
        <span
          :class="[
            'w-4 h-0.5 bg-neutral transition-all duration-150 ',
            menu ? '-translate-x-[300%]' : 'translate-x-0',
          ]"></span>
        <span
          :class="[
            'w-6 h-0.5 bg-neutral transition-all duration-200',
            menu ? ' -rotate-45 -translate-y-2' : 'translate-x-0',
          ]"></span>
      </button>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const config = inject('config');

let menu = ref(false);

const toggle = () => {
  menu.value = !menu.value;
};
</script>
