<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex flex-col gap-10 flex-1 mx-auto">
    <div class="flex max-lg:flex-col gap-10">
      <div class="relative flex-1">
        <label
          for="name"
          class="absolute -top-3 left-4 text-sm px-2 bg-neutral-white text-neutral">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          placeholder="Enter your full name"
          class="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          required />
      </div>

      <div class="relative flex-1">
        <label
          for="phone"
          class="absolute -top-3 left-4 text-sm px-2 bg-neutral-white text-neutral">
          Phone
        </label>
        <input
          type="number"
          id="phone"
          v-model="form.phone"
          placeholder="Enter your phone"
          class="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          required />
      </div>
    </div>

    <div class="flex gap-10 max-lg:flex-col">
      <div class="relative flex-1">
        <label
          for="date"
          class="absolute -top-3 left-4 text-sm px-2 bg-neutral-white text-neutral">
          Date
        </label>
        <input
          type="date"
          id="date"
          v-model="form.date"
          class="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          required />
      </div>
      <div class="relative flex-1">
        <label
          for="date"
          class="absolute -top-3 left-4 text-sm px-2 bg-neutral-white text-neutral">
          Time
        </label>
        <input
          type="date"
          id="date"
          v-model="form.date"
          class="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          required />
      </div>
    </div>

    <div class="flex justify-end items-center gap-10">
      <button
        type="submit"
        class="bg-primary border-2 text-lg flex justify-center items-center gap-10 flex-1 border-primary shadow text-neutral-white py-3 px-8 font-semibold hover:bg-primary-hover transition-all duration-300">
        <span> Book Now </span>
        <Icon
          name="material-symbols:calendar-month-outline-rounded"
          class="text-2xl" />
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';

// Form state
const form = ref({
  name: '',
  email: '',
  phone: '',
  date: '',
});

// Handle form submission
const handleSubmit = () => {
  console.log('Booking Submitted:', form.value);
  alert(
    `Booking Details:\nName: ${form.value.name}\nEmail: ${form.value.email}\nPhone: ${form.value.phone}\nDate: ${form.value.date}`
  );
};
</script>
