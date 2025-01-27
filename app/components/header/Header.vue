<template>
  <header class="relative w-full h-screen overflow-hidden">
    <div
      class="flex justify-center items-center h-full bg-gradient-to-b from-primary/50 via-primary/25 to-white px-32">
      <!-- Left Section with Text -->

      <div class="flex gap-32 justify-center items-center">
        <div
          class="flex flex-1 justify-center items-center h-full w-fit px-8 flex-col gap-8">
          <h1 class="text-[128px] font-extrabold tracking-wide uppercase">
            Sissi Nails
          </h1>
          <p class="text-lg sm:text-xl font-semibold mb-8">
            Experience the art of luxury nails with a personalized touch.
          </p>
          <ButtonV2> Appoitment </ButtonV2>
        </div>

        <!-- Right Section with Pattern and Image -->
        <div class="absolute -bottom-24 -right-24 -rotate-45">
          <NuxtImg
            src="/images/png.webp"
            format="webp"
            class="object-cover"
            width="500px"
            height="500px"
            alt="Nail Salon" />
        </div>
      </div>
    </div>
  </header>
</template>
