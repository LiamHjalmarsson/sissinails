<template>
  <footer class="bg-neutral text-neutral-white py-16">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="flex flex-col lg:items-start">
        <div
          class="flex lg:justify-between lg:items-center w-full relative max-lg:flex-col">
          <div
            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold">
            LOGO
          </div>

          <ul class="gap-10 flex max-lg:flex-col max-lg:mt-10">
            <li class="">
              <NuxtLink to="/about"> Booking </NuxtLink>
            </li>
            <li class="">
              <NuxtLink to="/about"> Service </NuxtLink>
            </li>
            <li class="">
              <NuxtLink to="/about"> Contact </NuxtLink>
            </li>
            <li class="">
              <NuxtLink to="/about"> About </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="h-96 w-full mt-10">
          <Map />
        </div>
      </div>
    </div>
  </footer>
</template>
