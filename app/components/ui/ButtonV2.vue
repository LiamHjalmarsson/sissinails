<template>
  <NuxtLink
    to="/about"
    class="group relative w-full sm:w-fit">
    <div
      class="py-4 md:py-4 px-8 md:px-6 lg:py-3 lg:px-6 overflow-hidden z-10 bg-primary text-center relative flex justify-center items-center shadow-middle hover:shadow-xl hover:-translate-y-1 transition duration-500 rounded-md">
      <span
        class="absolute left-0 bg-accent w-0 h-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:scale-110 group-focus:bg-accent"></span>
      <span
        class="absolute left-0 bg-secondary w-0 h-full transition-all duration-500 group-focus:w-full group-focus:h-full group-focus:bg-secondary group-focus:scale-110"></span>

      <span
        class="relative z-10 tracking-wider font-semibold lg:font-bold lg:text-lg text-neutral-white flex justify-center items-center gap-5">
        <slot />
      </span>
    </div>
  </NuxtLink>
</template>
