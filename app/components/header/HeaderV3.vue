<template>
  <header
    class="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center">
    <div class="absolute w-full h-full flex">
      <div
        class="w-1/5 top-0 right-0 h-full opacity-20 hover:w-1/2 transition-all duration-300 hover:opacity-40">
        <NuxtImg
          src="images/s.png"
          class="object-cover h-full w-full"
          alt="Manicure Image" />
      </div>
      <div
        class="w-1/5 top-0 right-0 h-full opacity-20 hover:w-1/2 transition-all duration-300 hover:opacity-40">
        <NuxtImg
          src="images/clean.png"
          class="object-cover h-full w-full"
          alt="Manicure Image" />
      </div>
      <div
        class="w-1/5 top-0 right-0 h-full opacity-20 hover:w-1/2 transition-all duration-300 hover:opacity-40">
        <NuxtImg
          src="images/nails.png"
          class="object-cover h-full w-full"
          alt="Manicure Image" />
      </div>
      <div
        class="w-1/5 top-0 right-0 h-full opacity-20 hover:w-1/2 transition-all duration-300 hover:opacity-40">
        <NuxtImg
          src="images/style.png"
          class="object-cover h-full w-full"
          alt="Manicure Image" />
      </div>
      <div
        class="w-1/5 top-0 right-0 h-full opacity-20 hover:w-1/2 transition-all duration-300 hover:opacity-40">
        <NuxtImg
          src="images/hand.png"
          class="object-cover h-full w-full"
          alt="Manicure Image" />
      </div>
    </div>

    <!-- Middle content heder -->
    <div class="flex items-center justify-center h-fit absolute z-10">
      <!-- Text left side -->
      <div
        class="flex flex-col md:flex-row w-full justify-between h-full items-center">
        <div class="flex-1 flex justify-center items-center px-32">
          <div
            class="flex w-fit flex-col justify-center items-center gap-5 md:gap-10">
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
      </div>
    </div>

    <div
      class="absolute bottom-0 w-full py-6 px-8 md:px-32 flex justify-between items-end gap-40 z-10">
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
