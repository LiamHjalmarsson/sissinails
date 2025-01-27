<template>
  <div class="relative text-neutral bg-neutral-white font-montserrat">
    <Nav />

    <main class="flex flex-col gap-32 min-h-screen">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup></script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
