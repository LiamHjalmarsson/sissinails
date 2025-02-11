<template>
  <section
    class="mx-auto max-w-7xl py-20 lg:py-40 mb-10 md:mb-20 lg:mb-40 section"
    ref="testimonialsRef">
    <Heading
      title="What Our Clients Say"
      subTitle="Reviews"
      class="max-w-3xl px-5 lg:px-10" />

    <div
      class="flex items-center max-lg:justify-between max-lg:overflow-hidden gap-10 py-5 max-lg:px-5 px-10">
      <ReviewCard
        v-for="(review, index) in reviews"
        :key="index"
        :description="review.description"
        :image="review.image"
        :rating="review.rating" />
    </div>

    <div class="flex justify-center items-center gap-5 mt-5 lg:hidden">
      <span
        v-for="(review, index) in reviews"
        :key="index"
        :class="[
          'h-3 w-3 rounded-full border shadow-middle cursor-pointer border-primary',
          index === activeIndex ? 'bg-primary' : '',
        ]"
        @click="setActiveIndex(index)"></span>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { observeSection } from '@/utils/sectionObserver';

const testimonialsRef = ref(null);
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
      'Truly a game-changer! Professional, efficient, and committed to excellence. I wouldnt hesitate to use their services again. dsadsad',
    image: 's.png',
    rating: 4,
  },
]);

observeSection(testimonialsRef);
</script>
