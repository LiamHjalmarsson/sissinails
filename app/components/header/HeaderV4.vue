<template>
  <header
    class="relative w-full h-screen overflow-hidden flex flex-col justify-between">
    <div class="absolute w-1/2 top-0 left-0 h-full opacity-20">
      <NuxtImg
        src="images/s.png"
        class="object-cover h-full w-full"
        alt="Manicure Image" />
    </div>

    <!-- Middle content heder -->
    <div class="flex items-center justify-center h-full relative z-10">
      <div class="flex flex-col md:flex-row w-full justify-between">
        <div class="flex-1 flex justify-end items-end">
          <div
            class="flex-1 flex flex-col gap-5 md:gap-10 justify-end items-end px-20">
            <h1
              class="text-4xl md:text-7xl 2xl:text-[124px] font-extrabold tracking-wide uppercase leading-tight">
              Sissi Nails
            </h1>
            <p class="text-lg md:text-xl font-medium">
              Experience the art of luxury nails with a personalized touch.
            </p>
            <ButtonV2 class="mt-4">Book Appointment</ButtonV2>
          </div>
        </div>

        <div class="flex-1">
          <div
            class="flex justify-center items-center flex-col gap-20 relative">
            <div class="relative flex justify-center">
              <div
                class="relative z-10 rounded-full bg-gradient-to-br from-primary/10 via-accent/10 to-red-500/10 p-12 overflow-hidden w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
                <NuxtImg
                  src="images/man.png"
                  class="h-60 md:h-80 object-contain absolute bottom-0"
                  alt="Manicure Image" />
              </div>

              <div
                class="absolute inset-0 animate-blob bg-gradient-to-br from-primary/30 via-accent/30 to-red-500/30 rounded-full blur-xl w-full h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom section of header -->
    <div
      class="absolute bottom-0 w-full py-6 px-8 md:px-32 flex justify-between items-end gap-40">
      <div class="flex gap-10">
        <NuxtLink
          to="/"
          aria-label="Facebook">
          <Icon
            name="fa-brands:facebook"
            class="text-2xl md:text-3xl" />
        </NuxtLink>
        <NuxtLink
          to="/"
          aria-label="Instagram">
          <Icon
            name="fa-brands:instagram"
            class="text-2xl md:text-3xl" />
        </NuxtLink>
        <NuxtLink
          to="/"
          aria-label="TikTok">
          <Icon
            name="fa-brands:tiktok"
            class="text-2xl md:text-3xl" />
        </NuxtLink>
      </div>

      <button
        class="border-b border-neutral text-neutral font-semibold text-lg md:text-xl">
        Contact Us
      </button>
    </div>
  </header>
</template>
