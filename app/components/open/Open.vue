<template>
  <Section>
    <div class="flex max-lg:flex-col justify-center gap-10 lg:gap-20">
      <!-- List -->
      <div
        class="w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center max-lg:mx-auto">
        <Heading
          title="Opening Hours"
          subTitle="We're Here for You" />

        <ul class="flex flex-col justify-center gap-10">
          <li
            class="flex justify-between items-center"
            v-for="(detail, index) in data"
            :key="index">
            <span class="lg:text-lg font-semibold">
              {{ detail.name }}
            </span>
            <span class="max-md:text-sm text-neutral-darkGray">
              {{ detail.time }}
            </span>
          </li>
        </ul>

        <div
          class="flex max-[475px]:flex-col justify-start gap-5 lg:gap-10 mt-10">
          <!-- <Button class="max-md:flex-1">
            <Icon
              name="material-symbols:call-sharp"
              class="text-2xl" />
            Call Us
          </Button> -->

          <Button class="max-md:flex-1">
            <Icon
              name="material-symbols:calendar-month-outline-rounded"
              class="text-2xl" />
            Book appointment
          </Button>
        </div>
      </div>

      <!-- Map -->
      <div class="w-full md:w-2/3 lg:w-1/2 mx-auto">
        <Map />
      </div>
    </div>
  </Section>
</template>

<script setup>
const data = [
  {
    name: 'Monday - Friday',
    time: '9 AM - 9 PM',
    icon: 'material-symbols:work-outline',
  },
  {
    name: 'Saturday',
    time: '9 AM - 9 PM',
    icon: 'material-symbols:weekend',
  },
  {
    name: 'Sunday',
    time: 'Closed',
    icon: 'material-symbols:cancel',
  },
  {
    name: 'Address',
    time: 'The address',
    icon: 'material-symbols:location-on',
  },
  {
    name: 'Phone',
    time: 'The number',
    icon: 'material-symbols:location-on',
  },
];
</script>
