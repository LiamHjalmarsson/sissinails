<template>
  <header class="relative w-full h-screen overflow-hidden">
    <!-- Middle content heder -->

    <div
      class="absolute opacity-20 top-0 max-lg:left-0 lg:right-0 w-full lg:w-1/2 h-full">
      <NuxtImg
        src="images/s.png"
        class="h-full w-full object-cover"
        alt="Manicure Image" />
    </div>

    <div class="flex items-center justify-center lg:justify-start h-full">
      <div
        class="flex flex-col lg:flex-row md:w-2/3 lg:w-1/2 lg:justify-center gap-12 sm:gap-16 lg:gap-32 px-10 2xl:px-20">
        <div
          class="flex flex-col items-center lg:items-start gap-6 md:gap-8 lg:gap-10">
          <h1
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide uppercase leading-tight max-lg:text-center">
            Sissi Nails - Luxury Nail Salon
          </h1>

          <!-- Subtitle with Keywords -->
          <h2
            class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-darkGray">
            Premium Manicure & Nail Art in
          </h2>

          <p class="text-sm md:text-base lg:text-lg max-lg:text-center">
            Experience the **art of luxury nails** with a **personalized
            touch**. Our expert nail technicians create **beautiful,
            long-lasting manicures** with high-quality products in a relaxing
            atmosphere.
          </p>

          <ButtonV2 to="/open">Book Appointment</ButtonV2>
        </div>
      </div>
    </div>

    <!-- Bottom section of header -->
    <div
      class="absolute bottom-0 w-full py-10 px-5 lg:px-10 2xl:px-20 flex justify-between items-center gap-10 lg:gap-20">
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
