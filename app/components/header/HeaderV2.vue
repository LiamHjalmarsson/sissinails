<template>
  <header
    class="relative w-full h-screen overflow-hidden flex flex-col justify-between">
    <!-- Middle content heder -->
    <div class="flex items-center justify-center h-full">
      <div
        class="flex flex-col lg:flex-row items-center w-fit gap-10 lg:gap-20 2xl:gap-40 px-5 md:px-10 xl:px-0">
        <div
          class="flex-1 flex flex-col max-lg:items-center gap-5 lg:gap-10 text-center lg:text-left">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide uppercase leading-tight">
            Sissi Nails
          </h1>
          <p class="text-base md:text-lg lg:text-xl font-medium">
            Experience the art of luxury nails with a personalized touch.
          </p>
          <ButtonV2>Book Appointment</ButtonV2>
        </div>

        <div class="flex justify-center items-center flex-col relative">
          <div class="relative flex justify-center">
            <div
              class="relative z-10 rounded-full bg-gradient-to-br from-primary/10 via-accent/10 to-red-500/10 p-12 overflow-hidden w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 flex items-center justify-center">
              <NuxtImg
                src="images/man.png"
                class="h-64 md:h-72 lg:h-96 object-contain absolute bottom-0"
                alt="Manicure Image" />
            </div>

            <div
              class="absolute inset-0 animate-blob bg-gradient-to-br from-primary/30 via-accent/30 to-red-500/30 rounded-full blur-xl w-full h-full"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom section of header -->
    <div
      class="absolute bottom-0 w-full py-6 px-5 lg:px-10 2xl:px-20 flex justify-between items-center gap-10 lg:gap-20">
      <div class="flex gap-5 lg:gap-10">
        <NuxtLink
          to="/"
          class="group"
          aria-label="Facebook">
          <Icon
            name="fa-brands:facebook"
            class="text-xl md:text-2xl lg:text-3xl group-hover:-translate-y-2 duration-300 transition" />
        </NuxtLink>
        <NuxtLink
          to="/"
          class="group"
          aria-label="Instagram">
          <Icon
            name="fa-brands:instagram"
            class="text-xl md:text-2xl lg:text-3xl group-hover:-translate-y-2 duration-300 transition" />
        </NuxtLink>
        <NuxtLink
          to="/"
          class="group"
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
