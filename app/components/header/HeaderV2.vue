<template>
  <header
    class="relative w-full h-screen overflow-hidden flex flex-col justify-between">
    <!-- Middle content heder -->

    <div class="absolute opacity-20 top-0 left-0 w-full h-full">
      <NuxtImg
        src="images/s.png"
        class="h-full w-full object-cover"
        alt="Manicure Image" />
    </div>

    <div class="flex items-center justify-center h-full">
      <div
        class="flex flex-col lg:flex-row items-center w-fit gap-12 sm:gap-16 lg:gap-32 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0">
        <div
          class="flex-1 flex flex-col max-lg:items-center gap-6 md:gap-8 lg:gap-10 text-center lg:text-left">
          <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide uppercase leading-tight">
            Sissi Nails
          </h1>
          <p class="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
            Experience the art of luxury nails with a personalized touch.
          </p>
          <ButtonV2>Book Appointment</ButtonV2>
        </div>
        <!-- <div class="flex justify-center items-center flex-col relative z-10">
          <div class="relative flex justify-center">
            <div
              class="relative z-10 rounded-full bg-gradient-to-br from-primary/10 via-accent/10 to-red-500/10 p-12 overflow-hidden w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 flex items-center justify-center">
              <NuxtImg
                src="images/man.png"
                class="h-64 md:h-72 lg:h-96 object-contain absolute bottom-0"
                alt="Manicure Image" />
            </div>

            <div
              class="absolute inset-0 bg-gradient-to-br from-primary via-accent to-red-500 rounded-full blur-xl w-full h-full"></div>
          </div>
        </div> -->
      </div>
    </div>

    <!-- Bottom section of header -->
    <div
      class="absolute bottom-0 w-full py-6 px-5 lg:px-10 2xl:px-20 flex justify-between items-center gap-10 lg:gap-20">
      <div class="flex gap-5 lg:gap-10">
        <NuxtLink
          to="/"
          class="group flex justify-center items-center"
          aria-label="Facebook">
          <Icon
            name="fa-brands:facebook"
            class="text-xl md:text-2xl lg:text-3xl group-hover:-translate-y-2 duration-300 transition" />
        </NuxtLink>
        <NuxtLink
          to="/"
          class="group flex justify-center items-center"
          aria-label="Instagram">
          <Icon
            name="fa-brands:instagram"
            class="text-xl md:text-2xl lg:text-3xl group-hover:-translate-y-2 duration-300 transition" />
        </NuxtLink>
        <NuxtLink
          to="/"
          class="group flex justify-center items-center"
          aria-label="TikTok">
          <Icon
            name="fa-brands:tiktok"
            class="text-xl md:text-2xl lg:text-3xl group-hover:-translate-y-2 duration-300 transition" />
        </NuxtLink>
      </div>

      <button
        class="border-b border-neutral text-neutral font-semibold md:text-lg lg:text-xl">
        Contact Us
      </button>
    </div>
  </header>
</template>
