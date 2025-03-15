<template>
  <Section>
    <Heading
      :title="title"
      :subTitle="subtitle" />

    <!-- Slider -->
    <div class="relative overflow-hidden mt-5">
      <div class="p-2.5 lg:p-5">
        <div
          class="flex items-center gap-10 transition duration-300 w-full"
          :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
          <Testimonial
            v-for="(testimonial, index) in testimonials"
            :key="index"
            :testimonial="testimonial" />
        </div>
      </div>
    </div>

    <!-- Navigation for slider -->
    <div class="flex justify-center items-center gap-5 mt-10 lg:hidden">
      <span
        v-for="(testimonial, index) in testimonials"
        :key="index"
        :class="[
          'h-3 w-3 rounded-full border shadow-middle cursor-pointer border-primary transition duration-300',
          index === activeIndex ? 'bg-primary' : '',
        ]"
        @click="setActiveIndex(index)"></span>
    </div>
  </Section>
</template>

<script setup>
const activeIndex = ref(0);

defineProps({
  title: {
    type: String,
    required: true,
  },

  subtitle: {
    type: String,
    required: true,
  },

  testimonials: {
    type: Array,
    required: true,
  },
});

const setActiveIndex = (index) => {
  activeIndex.value = index;
};
</script>
