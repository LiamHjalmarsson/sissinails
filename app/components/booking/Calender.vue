<template>
  <div class="flex w-full items-center justify-center flex-1 h-full">
    <div
      class="flex w-full flex-col shadow-lg overflow-hidden bg-neutral-white">
      <div
        class="flex justify-between p-2 items-center mb-6 bg-neutral text-neutral-white">
        <div
          class="py-1.5 lg:py-3 px-3 lg:px-6 cursor-pointer"
          :class="{ 'opacity-50 cursor-default': isPrevDisabled }"
          @click="!isPrevDisabled && changeMonth('prev')">
          <Icon
            name="mdi:chevron-left"
            class="text-4xl" />
        </div>
        <div class="flex flex-col items-center">
          <span class="text-2xl font-bold">{{ monthNames[currentMonth] }}</span>
          <span>{{ currentYear }}</span>
        </div>
        <div
          class="py-1.5 lg:py-3 px-3 lg:px-6 cursor-pointer"
          :class="{ 'opacity-50 cursor-default': isNextDisabled }"
          @click="!isNextDisabled && changeMonth('next')">
          <Icon
            name="mdi:chevron-right"
            class="text-4xl" />
        </div>
      </div>

      <div class="grid grid-cols-7 text-center font-bold mb-3 px-2">
        <div
          v-for="day in daysOfWeek"
          :key="day"
          class="py-2 text-sm">
          {{ day }}
        </div>
      </div>

      <div class="grid grid-cols-7 gap-3 pb-6 px-2">
        <div
          v-for="n in startDay"
          :key="n"
          class="flex justify-center items-center w-full rounded-full text-neutral-lightGray cursor-default text-sm">
          {{ prevMonthDates[n - 1] }}
        </div>

        <div
          v-for="(date, index) in daysInMonth"
          :key="index"
          class="flex justify-center items-center h-10 w-full rounded-full cursor-pointer group px-2 relative">
          <span
            class="w-8 h-8 flex justify-center items-center rounded-full text-sm absolute"
            :class="[
              isToday(date) && !isSelected
                ? 'bg-secondary text-neutral-white'
                : 'group-hover:text-secondary',
            ]">
            {{ date }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const today = new Date();

const currentYear = ref(today.getFullYear());
const currentMonth = ref(today.getMonth());
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
const maxDate = new Date(today.getFullYear() + 1, today.getMonth(), 1);

// Computed properties
const daysInMonth = computed(() => {
  const year = currentYear.value;
  const month = currentMonth.value;
  return Array.from(
    { length: new Date(year, month + 1, 0).getDate() },
    (_, i) => i + 1
  );
});

const startDay = computed(() => {
  const firstDayOfMonth = new Date(currentYear.value, currentMonth.value, 1);
  const dayOfWeek = firstDayOfMonth.getDay();
  return dayOfWeek === 0 ? 6 : dayOfWeek - 1;
});

const prevMonthDates = computed(() => {
  const prevMonth = currentMonth.value === 0 ? 11 : currentMonth.value - 1;
  const prevYear =
    currentMonth.value === 0 ? currentYear.value - 1 : currentYear.value;
  const prevMonthDays = new Date(prevYear, prevMonth + 1, 0).getDate();

  return Array.from(
    { length: startDay.value },
    (_, i) => prevMonthDays - startDay.value + i + 1
  );
});

const isPrevDisabled = computed(() => {
  return new Date(currentYear.value, currentMonth.value, 1) <= minDate;
});

const isNextDisabled = computed(() => {
  return new Date(currentYear.value, currentMonth.value, 1) >= maxDate;
});

// Methods
const changeMonth = (direction) => {
  if (direction === 'prev' && !isPrevDisabled.value) {
    if (currentMonth.value === 0) {
      currentMonth.value = 11;
      currentYear.value--;
    } else {
      currentMonth.value--;
    }
  } else if (direction === 'next' && !isNextDisabled.value) {
    if (currentMonth.value === 11) {
      currentMonth.value = 0;
      currentYear.value++;
    } else {
      currentMonth.value++;
    }
  }
};

const changeMonthToPrev = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value--;
  } else {
    currentMonth.value--;
  }
};

const isToday = (date) => {
  const today = new Date();
  return (
    date === today.getDate() &&
    currentMonth.value === today.getMonth() &&
    currentYear.value === today.getFullYear()
  );
};
</script>
