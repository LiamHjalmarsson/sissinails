<template>
  <section class="w-full flex justify-center items-center relative">
    <div
      class="max-w-7xl flex flex-col lg:flex-row gap-10 lg:gap-20 h-full z-10 px-5 md:px-10 lg:px-20 items-center">
      <div class="relative flex justify-center items-center w-full lg:w-1/2">
        <div class="relative w-full max-lg:max-w-xs max-w-sm">
          <!-- Image -->
          <NuxtImg
            src="/images/me.png"
            fit="cover"
            class="w-full relative z-10 shadow-lg"
            densities="x1 x2"
            alt="Image description for accessibility" />
        </div>
      </div>

      <!-- Text Content -->
      <div class="flex flex-col flex-1 text-center lg:text-left">
        <Heading
          title="Who I Am"
          subTitle="About">
          <p class="text-neutral-darkGray leading-relaxed lg:text-lg mt-5">
            Step into a world of elegance and style. At
            <strong>My Nail Salon</strong>, we blend artistry with precision to
            bring your nail dreams to life. From timeless classics to bold
            modern designs, every detail is crafted with care. Relax, unwind,
            and let us pamper you with luxury.
          </p>
        </Heading>
      </div>
    </div>
  </section>
</template>
