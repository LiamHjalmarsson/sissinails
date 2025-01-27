<template>
  <NuxtLink
    to="/about"
    class="group relative w-fit">
    <div
      class="py-4 overflow-hidden px-8 z-10 bg-primary text-center relative flex justify-center items-center shadow-middle hover:shadow-xl hover:-translate-y-1 transition duration-500">
      <span
        class="absolute left-0 bg-accent w-0 h-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:scale-110 group-focus:bg-accent"></span>
      <span
        class="absolute left-0 bg-secondary w-0 h-full transition-all duration-500 group-focus:w-full group-focus:h-full group-focus:bg-secondary group-focus:scale-110"></span>

      <span
        class="relative z-10 tracking-wider font-extrabold text-xl text-neutral-white flex justify-center items-center gap-8">
        <slot />
      </span>
    </div>
  </NuxtLink>
</template>
