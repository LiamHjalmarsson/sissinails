<template>
  <section
    class="w-full flex justify-center items-center relative px-5 lg:px-10 py-20 lg:py-40 min-h-screen bg-neutral-white">
    <div
      class="flex flex-col-reverse md:flex-row gap-10 lg:gap-20 h-full z-10 md:px-10 lg:px-0 items-center section max-w-7xl"
      ref="welcomeRef">
      <div
        class="relative flex flex-1 justify-center items-center max-lg:max-w-xs gap-10 py-10 h-96">
        <div
          class="w-1/2 object-cover max-sm:w-full sm:h-80 md:h-96 lg:h-[450px] absolute left-10 bottom-0 z-10">
          <NuxtImg
            src="/images/s.png"
            class="w-full h-full object-cover border-4 border-neutral-white"
            alt="Image description for accessibility" />
        </div>
        <NuxtImg
          src="/images/me.png"
          class="w-1/2 object-cover max-sm:w-full sm:h-80 md:h-96 lg:h-[450px] shadow-lg absolute top-0 right-0"
          alt="Image description for accessibility" />
      </div>

      <!-- Text Content -->
      <div class="flex flex-col lg:flex-1 text-center lg:text-left">
        <Heading
          title="About Us"
          subTitle="Where Beauty Meets Precision">
          <p class="text-neutral-darkGray leading-relaxed lg:text-lg mt-5">
            Step into a world of elegance and style. At
            <strong>My Nail Salon</strong>, we blend artistry with precision to
            bring your nail dreams to life. From timeless classics to bold
            modern designs, every detail is crafted with care. Relax, unwind,
            and let us pamper you with luxury.
          </p>

          <button
            class="mt-5 text-primary-active font-semibold text-sm lg:mr-auto">
            Read more
          </button>
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
