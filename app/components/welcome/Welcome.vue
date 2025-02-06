<template>
  <section
    class="w-full flex justify-center items-center relative bg-primary/10">
    <div
      class="flex flex-col-reverse md:flex-row gap-10 lg:gap-20 h-full z-10 px-5 md:px-10 lg:px-0 items-center py-20 lg:py-40 max-w-7xl">
      <div class="relative flex justify-center items-center max-lg:max-w-xs">
        <NuxtImg
          src="/images/me.png"
          class="w-full object-cover h-[450px] shadow-lg"
          densities="x1 x2"
          alt="Image description for accessibility" />
      </div>

      <!-- Text Content -->
      <div class="flex flex-col flex-1 text-center lg:text-left">
        <Heading
          title="About Us"
          subTitle="Sissi Nails – Where Beauty Meets Precision">
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
