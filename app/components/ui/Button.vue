<template>
  <NuxtLink
    to="booking"
    class="group relative w-fit">
    <div
      class="py-3 overflow-hidden px-6 z-10 bg-primary text-center relative w-48 h-48 flex justify-center items-center rounded-full shadow-middle hover:shadow-xl transition duration-500">
      <span
        class="absolute bg-accent w-0 h-0 rounded-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:scale-110 origin-center group-focus:bg-secondary"></span>
      <span
        class="absolute bg-secondary w-0 h-0 rounded-full transition-all duration-500 group-focus:w-full group-focus:h-full origin-center group-focus:bg-secondary group-focus:scale-110"></span>

      <span
        class="relative z-10 tracking-wider font-extrabold text-xl text-neutral-white">
        Appointment
      </span>
    </div>
  </NuxtLink>
</template>
