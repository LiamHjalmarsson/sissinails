<template>
  <header class="relative w-full h-screen overflow-hidden">
    <!-- Left Section: Full Square with Text -->
    <div class="w-full h-full bg-gradient-to-br from-secondary to-secondary/30">
      <div
        class="flex justify-center items-center h-full px-8 text-center flex-col gap-12">
        <h1 class="text-7xl font-extrabold tracking-wide uppercase">
          Sissi Nails
        </h1>
        <p class="text-lg sm:text-xl font-semibold">
          Experience the art of luxury nails with a personalized touch.
        </p>

        <Button />
      </div>
    </div>

    <!-- Right Triangle with Image -->
    <div
      class="absolute top-0 right-0 w-1/2 h-full bg-neutral-white clip-path-triangle-right transition-all duration-1000 ease-in-out,">
      <NuxtImg
        src="/images/png.webp"
        format="webp"
        class="object-cover w-1/2 h-1/2 absolute -right-44 bottom-24 -rotate-45"
        alt="Nail Salon" />
    </div>
  </header>
</template>

<script setup>
import Button from '@/components/ui/Button.vue';
</script>

<style scoped>
/* Diagonal Clip Path for Right Triangle */
.clip-path-triangle-right {
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
}
</style>
