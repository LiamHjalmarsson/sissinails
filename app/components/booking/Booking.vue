<template>
  <div class="relative">
    <div
      class="max-w-7xl w-full flex max-lg:flex-col mx-auto justify-between items-center gap-32 relative z-10 py-6 lg:yp-12">
      <div class="flex-1 py-3 max-w-xl">
        <Heading
          title="Book Appointment"
          subTitle=" Nails * Style * HandCare">
          <ul class="flex flex-col gap-12 mt-12">
            <li
              class="flex justify-between items-center border-primary border-b-2 pb-3">
              <p class="text-lg font-semibold">Monday - Friday</p>
              <span class="text-neutral-darkGray">9 AM - 9 PM</span>
            </li>
            <li
              class="flex justify-between items-center border-primary border-b-2 pb-3">
              <p class="text-lg font-semibold">Saturday</p>
              <span class="text-neutral-darkGray">9 AM - 9 PM</span>
            </li>
            <li
              class="flex justify-between items-center border-primary border-b-2 pb-3">
              <p class="text-lg font-semibold">Sunday & red days</p>
              <span class="text-neutral-darkGray">Closed</span>
            </li>
            <li
              class="flex justify-between items-center border-primary border-b-2 pb-3">
              <p class="text-lg font-semibold">Location</p>
              <span class="text-neutral-darkGray">Saint-hilaire-de-riez</span>
            </li>
          </ul>
        </Heading>
      </div>

      <Form />
    </div>
  </div>
</template>

<script setup>
import Heading from '@/components/ui/Heading';
import Calender from '@/components/booking/Calender.vue';
import Form from '@/components/booking/Form.vue';
</script>
