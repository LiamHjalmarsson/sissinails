<template>
  <Section>
    <Heading
      :title="title"
      :subTitle="subtitle" />

    <div class="relative max-lg:overflow-hidden">
      <div
        class="flex items-center gap-10 max-lg:p-5 transition duration-300"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
        <Testimonial
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :description="testimonial.description"
          :image="testimonial.image"
          :rating="testimonial.rating" />
      </div>
    </div>

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

const { title, subtitle, testimonials } = defineProps({
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

const reviews = ref([
  {
    description:
      'Exceptional service and attention to detail! The team went above and beyond to ensure our needs were met. Highly recommended!',
    image: 's.png',
    rating: 4,
  },
  {
    description:
      'A fantastic experience from start to finish. The quality of work exceeded our expectations, and the customer support was outstanding.',
    image: 's.png',
    rating: 5,
  },
  {
    description:
      'Truly a game-changer! Professional, efficient, and committed to excellence. I wouldn’t hesitate to use their services again.',
    image: 's.png',
    rating: 4,
  },
]);

const setActiveIndex = (index) => {
  activeIndex.value = index;
};
</script>
