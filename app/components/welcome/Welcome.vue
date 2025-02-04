<template>
  <section class="w-full flex justify-center items-center relative">
    <div class="max-w-7xl flex gap-20 2xl:gap-40 h-full z-10 max-2xl:px-8">
      <div
        class="max-lg:mb-12 relative pl-12 py-6 content-center flex justify-center items-center max-lg:w-96">
        <NuxtImg
          src="/images/me.png"
          class="object-cover relative z-10"
          width="350"
          height="450"
          alt="Image description for accessibility" />
        <div
          class="absolute left-0 h-full w-1/2 flex flex-wrap gap-4 overflow-hidden">
          <div
            v-for="n in 126"
            :key="n"
            class="h-2 lg:h-3 w-2 lg:w-3 bg-secondary rounded-full"></div>
        </div>
      </div>

      <div class="flex items-center flex-1 max-lg:mt-20">
        <Heading
          title="Who i am"
          subTitle="About">
          <p class="text-neutral-darkGray leading-relaxed lg:text-lg mt-5">
            Step into a world of elegance and style. At My Nail Salon, we blend
            artistry with precision to bring your nail dreams to life. From
            timeless classics to bold modern designs, every detail is crafted
            with care. Relax, unwind, and let us pamper you with luxury.
          </p>
        </Heading>
      </div>
    </div>
  </section>
</template>
