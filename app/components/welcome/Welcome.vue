<template>
  <Section>
    <div
      class="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 h-full z-10 max-lg:lg:px-10 items-center">
      <!-- Images -->
      <div
        class="relative max-sm:flex-col flex flex-1 max-lg:w-full lg:justify-center lg:items-center gap-10 lg:py-10 h-fit">
        <div class="w-full md:w-2/3">
          <NuxtImg
            src="/images/s.png"
            class="w-full object-cover h-64 sm:h-72 md:h-96 lg:h-[450px] relative lg:bottom-5 shadow-middle"
            alt="Image description for accessibility"
            loading="lazy" />
        </div>
        <div class="w-full md:w-1/3">
          <NuxtImg
            src="/images/me.png"
            class="w-full object-cover h-64 sm:h-72 md:h-96 lg:h-[450px] relative md:-top-5 lg:top-5 shadow-middle"
            alt="Image description for accessibility"
            loading="lazy" />
        </div>
      </div>

      <!-- Text Content -->
      <div class="flex flex-col lg:flex-1">
        <Heading
          title="About Us"
          subTitle="Where Beauty Meets Precision">
          <p
            class="text-neutral-darkGray leading-relaxed text-sm sm:text-base lg:text-lg max-lg:text-center">
            Step into a world of elegance and style. At
            <strong>My Nail Salon</strong>, we blend artistry with precision to
            bring your nail dreams to life. From timeless classics to bold
            modern designs, every detail is crafted with care. Relax, unwind,
            and let us pamper you with luxury.
          </p>
        </Heading>
      </div>
    </div>
  </Section>
</template>

<script setup></script>
