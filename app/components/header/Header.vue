<template>
  <header class="relative w-full h-screen overflow-hidden">
    <div
      class="flex justify-center items-center h-full bg-gradient-to-b from-primary/50 via-primary/25 to-white px-8 md:px-32">
      <div
        class="flex flex-col md:flex-row gap-20 md:gap-40 justify-center items-center">
        <div
          class="flex flex-1 flex-col items-center md:items-center text-center md:text-left gap-10">
          <h1
            class="text-5xl md:text-[124px] font-extrabold tracking-wide uppercase leading-tight">
            Sissi Nails
          </h1>
          <p class="text-lg md:text-xl font-medium max-w-3xl mb-5">
            Experience the art of luxury nails with a personalized touch.
          </p>
          <ButtonV2> Book Appointment </ButtonV2>
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-0 w-full py-5 px-20 flex justify-center items-center">
      <div class="max-w-3xl flex justify-between gap-10 items-center w-full">
        <div class="h-24 w-0.5 bg-primary"></div>

        <div class="">Contact</div>

        <div class="h-24 w-0.5 bg-primary"></div>

        <div class="">Hours</div>

        <div class="h-24 w-0.5 bg-primary"></div>

        <div class="">Address</div>

        <div class="h-24 w-0.5 bg-primary"></div>
      </div>
    </div>
  </header>
</template>
