<template>
  <section
    class="relative flex flex-col justify-center items-center py-12 px-5 lg:px-10 bg-primary/10">
    <div
      class="max-w-7xl w-full flex max-lg:flex-col mx-auto justify-center gap-10 lg:gap-20 mt-10">
      <div class="w-full lg:w-1/2 flex flex-col justify-between max-lg:mx-auto">
        <div class="h-full flex flex-col w-full justify-center">
          <Heading
            title="For you"
            subTitle="Open hours" />

          <ul
            class="flex flex-col w-full justify-center gap-5 lg:gap-10 py-8 lg:mb-10">
            <li
              class="flex justify-between gap-5 md:gap-10 lg:gap-20 items-center border-primary border-b-2 pb-2.5">
              <p class="lg:text-lg font-semibold">Monday - Friday</p>
              <span class="max-md:text-sm text-neutral-darkGray"
                >9 AM - 9 PM</span
              >
            </li>
            <li
              class="flex justify-between items-center border-primary border-b-2 pb-2.5">
              <p class="lg:text-lg font-semibold">Saturday</p>
              <span class="max-md:text-sm text-neutral-darkGray"
                >9 AM - 9 PM</span
              >
            </li>
            <li
              class="flex justify-between items-center border-primary border-b-2 pb-2.5">
              <p class="lg:text-lg font-semibold">Sunday</p>
              <span class="max-md:text-sm text-neutral-darkGray">Closed</span>
            </li>
          </ul>

          <div class="flex max-lg:flex-col gap-10 lg:gap-20">
            <div class="flex justify-end items-center gap-10 flex-1">
              <ButtonV2 class="flex-1">
                Call and book
                <Icon
                  name="material-symbols:call-sharp"
                  class="text-2xl" />
              </ButtonV2>
            </div>

            <div class="flex justify-end items-center gap-10 flex-1">
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
          class="w-full h-full object-cover shadow-middle max-lg:h-96" />
      </div>
    </div>
  </section>
</template>
