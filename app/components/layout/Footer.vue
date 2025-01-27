<template>
  <footer class="bg-neutral text-neutral-white py-16 mt-32">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="flex flex-col justify-center items-center lg:items-start">
        <div
          class="flex justify-between items-center w-full relative max-lg:flex-col">
          <div class="text-4xl font-bold">LOGO</div>

          <ul class="gap-16 flex max-lg:flex-col max-lg:mt-16">
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

        <div class="h-96 w-full mt-16">
          <Map />
        </div>

        <div
          class="flex max-lg:flex-col gap-16 mt-16 justify-center items-center mx-auto">
          <div
            class="p-4 bg-primary text-white shadow flex justify-center items-center text-3xl w-fit rounded-full font-bold hover:bg-primary-hover transition duration-300 cursor-pointer">
            <Icon name="material-symbols:call-sharp" />
          </div>

          <div
            class="p-4 bg-primary text-white shadow flex justify-center items-center text-3xl w-fit rounded-full font-bold hover:bg-primary-hover transition duration-300 cursor-pointer">
            <Icon name="material-symbols:mail-sharp" />
          </div>

          <div
            class="p-4 bg-primary text-white shadow flex justify-center items-center text-3xl w-fit rounded-full font-bold hover:bg-primary-hover transition duration-300 cursor-pointer">
            <Icon name="ion:logo-instagram" />
          </div>

          <div
            class="p-4 bg-primary text-white shadow flex justify-center items-center text-3xl w-fit rounded-full font-bold hover:bg-primary-hover transition duration-300 cursor-pointer">
            <Icon name="ion:logo-tiktok" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
