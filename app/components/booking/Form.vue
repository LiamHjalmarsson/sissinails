<template>
  <form
    @submit.prevent="handleSubmit"
    class="p-12 border-2 border-neutral-silver flex flex-col gap-12 rounded-2xl flex-1 mx-auto bg-neutral-white shadow-lg">
    <p class="">Book your appoitment</p>
    <div class="flex max-lg:flex-col gap-8">
      <div class="relative flex-1">
        <label
          for="name"
          class="absolute -top-3 left-4 text-sm px-2 bg-neutral-white text-neutral-darkGray">
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
          class="absolute -top-3 left-4 text-sm px-2 bg-neutral-white text-neutral-darkGray">
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

    <div class="flex gap-8 max-lg:flex-col">
      <div class="relative flex-1">
        <label
          for="date"
          class="absolute -top-3 left-4 text-sm px-2 bg-neutral-white text-neutral-darkGray">
          Booking Date
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
          class="absolute -top-3 left-4 text-sm px-2 bg-neutral-white text-neutral-darkGray">
          Booking Date
        </label>
        <input
          type="date"
          id="date"
          v-model="form.date"
          class="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          required />
      </div>
    </div>

    <button
      type="submit"
      class="bg-primary text-neutral-white py-3 px-6 rounded-lg hover:bg-primary-hover transition-all">
      Book Now
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/components/ui/Button.vue';

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
