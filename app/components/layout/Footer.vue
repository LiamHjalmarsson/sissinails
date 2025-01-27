<template>
  <footer class="bg-neutral text-neutral-white py-16 mt-20">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="flex flex-col justify-center items-center lg:items-start">
        <div
          class="flex justify-between items-center w-full relative max-lg:flex-col">
          <div class="text-4xl font-bold">LOGO</div>

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
