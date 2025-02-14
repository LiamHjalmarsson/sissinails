<template>
  <section
    class="w-full flex justify-center items-center relative max-lg:px-5 max-2xl:px-10 py-10 md:py-20 lg:py-40 bg-neutral-white mt-10 md:mt-20 lg:mt-40">
    <div
      class="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 h-full z-10 max-lg:lg:px-10 items-center section max-w-7xl"
      ref="welcomeRef">
      <div
        class="relative max-sm:flex-col flex flex-1 max-lg:w-full lg:justify-center lg:items-center max-md:gap-10 gap-5 lg:py-10 h-fit">
        <div class="w-full md:w-2/3">
          <NuxtImg
            src="/images/s.png"
            class="w-full object-cover h-64 sm:h-72 md:h-96 lg:h-[450px] relative lg:bottom-5 rounded-xl lg:rounded-xl shadow"
            alt="Image description for accessibility" />
        </div>
        <div class="w-full md:w-1/3">
          <NuxtImg
            src="/images/me.png"
            class="w-full object-cover h-64 sm:h-72 md:h-96 lg:h-[450px] shadow-lg relative md:-top-5 lg:top-5 rounded-xl lg:rounded-xl"
            alt="Image description for accessibility" />
        </div>
      </div>

      <!-- Text Content -->
      <div class="flex flex-col lg:flex-1 text-left max-lg:mb-5">
        <Heading
          title="About Us"
          subTitle="Where Beauty Meets Precision">
          <p
            class="text-neutral-darkGray leading-relaxed lg:text-lg max-lg:text-center">
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

<script setup>
import { ref } from 'vue';
import { observeSection } from '@/utils/sectionObserver';

const welcomeRef = ref(null);

observeSection(welcomeRef);
</script>
