<template>
  <section
    class="relative flex flex-col justify-center items-center px-5 lg:px-10 py-20 lg:py-40">
    <div
      class="max-w-7xl w-full flex max-lg:flex-col mx-auto justify-center gap-10 lg:gap-20 2xl:gap-40">
      <div
        class="w-full md:w-2/3 lg:w-1/2 flex flex-col justify-between max-lg:mx-auto">
        <div class="h-full flex flex-col w-full justify-center">
          <Heading
            title="Opening Hours"
            subTitle="We're Here for You" />

          <ul
            class="flex flex-col w-full justify-center gap-5 md:gap-10 pb-10 pt-5">
            <li
              class="flex justify-between gap-5 md:gap-10 lg:gap-20 items-center border-accent border-b-2 pb-2.5">
              <p class="lg:text-lg font-semibold">Monday - Friday</p>
              <span class="max-md:text-sm text-neutral-darkGray"
                >9 AM - 9 PM</span
              >
            </li>
            <li
              class="flex justify-between items-center border-accent border-b-2 pb-2.5">
              <p class="lg:text-lg font-semibold">Saturday</p>
              <span class="max-md:text-sm text-neutral-darkGray"
                >9 AM - 9 PM</span
              >
            </li>
            <li
              class="flex justify-between items-center border-accent border-b-2 pb-2.5">
              <p class="lg:text-lg font-semibold">Sunday</p>
              <span class="max-md:text-sm text-neutral-darkGray">Closed</span>
            </li>
          </ul>

          <div class="flex max-[475px]:flex-col gap-5 lg:gap-10 mt-5">
            <div class="flex justify-center sm:justify-end items-center flex-1">
              <ButtonV2 class="flex-1">
                Call now
                <Icon
                  name="material-symbols:call-sharp"
                  class="text-2xl" />
              </ButtonV2>
            </div>

            <div class="flex justify-center sm:justify-end items-center flex-1">
              <ButtonV2 class="flex-1">
                Book Now
                <Icon
                  name="material-symbols:calendar-month-outline-rounded"
                  class="text-2xl" />
              </ButtonV2>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1 overflow-hidden">
        <NuxtImg
          src="images/open.png"
          alt="Image description"
          class="w-full md:w-2/3 m-auto lg:w-full h-full object-cover max-lg:h-96 rounded-2xl shadow-middle" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { observeSection } from '@/utils/sectionObserver';

const openRef = ref(null);

observeSection(openRef);
</script>
