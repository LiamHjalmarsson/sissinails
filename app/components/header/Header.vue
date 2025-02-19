<template>
  <header class="relative w-full h-screen overflow-hidden">
    <!-- Image -->
    <div class="absolute top-0 max-lg:left-0 lg:right-0 w-full lg:w-1/2 h-full">
      <NuxtImg
        src="images/s.png"
        class="h-full w-full object-cover"
        alt="Manicure Image" />

      <div
        class="w-1/2 h-full absolute z-10 bg-gradient-to-r from-white to-white/0 top-0 left-0"></div>
      <div
        class="w-full h-full absolute z-10 bg-gradient-to-t from-white to-white/0 top-0 left-0"></div>
    </div>

    <!-- text -->
    <div
      class="flex items-center justify-center lg:justify-start h-full relative z-30">
      <div
        class="flex flex-col md:w-2/3 lg:w-1/2 lg:justify-center items-center lg:items-start gap-5 lg:gap-10 px-10 2xl:px-20">
        <h1
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide uppercase leading-tight max-lg:text-center">
          Sissi Nails - Luxury Nail Salon
        </h1>

        <h2
          class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-darkGray">
          Premium Manicure & Nail Art in
        </h2>

        <p class="text-neutral-darkGray leading-relaxed text-base lg:text-lg">
          text
        </p>

        <Button to="">Book Appointment</Button>
      </div>
    </div>

    <!-- header footer -->
    <div
      class="absolute bottom-0 w-full py-10 px-5 lg:px-10 2xl:px-20 flex justify-between items-center z-30">
      <div class="flex gap-5 lg:gap-10">
        <NuxtLink
          to="/"
          class="group flex justify-center items-center"
          aria-label="Follow Sissi Nails on Facebook">
          <Icon
            name="fa-brands:facebook"
            class="text-xl md:text-2xl lg:text-3xl group-hover:-translate-y-2 duration-300 transition" />
        </NuxtLink>
        <NuxtLink
          to="/"
          class="group flex justify-center items-center"
          aria-label="Follow Sissi Nails on Instagram">
          <Icon
            name="fa-brands:instagram"
            class="text-xl md:text-2xl lg:text-3xl group-hover:-translate-y-2 duration-300 transition" />
        </NuxtLink>
        <NuxtLink
          to="/"
          class="group flex justify-center items-center"
          aria-label="Follow Sissi Nails on TikTok">
          <Icon
            name="fa-brands:tiktok"
            class="text-xl md:text-2xl lg:text-3xl group-hover:-translate-y-2 duration-300 transition" />
        </NuxtLink>
      </div>

      <button
        class="border-b border-neutral text-neutral font-semibold md:text-lg lg:text-xl"
        aria-label="Contact Sissi Nails">
        Contact Us
      </button>
    </div>
  </header>
</template>
