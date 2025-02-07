<template>
  <section class="mx-auto max-w-7xl py-20 mb-20 lg:py-40 lg:mb-40">
    <div
      class="section"
      ref="testimonialsRef">
      <Heading
        title="What Our Clients Say"
        subTitle="Reviews"
        class="max-w-3xl mx-auto text-center justify-center items-center px-6" />

      <div class="relative">
        <div
          class="flex gap-8 lg:gap-10 max-lg:justify-center p-5 lg:p-10 overflow-hidden mt-5">
          <ReviewCard
            v-for="(review, index) in reviews"
            :key="index"
            :class="[index !== activeIndex ? 'lg:scale-90 ' : 'lg:scale-110  ']"
            :description="review.description"
            :image="review.image"
            :rating="review.rating" />
        </div>
      </div>

      <div class="flex justify-center items-center gap-5 mt-5 lg:mt-10">
        <span
          v-for="(review, index) in reviews"
          :key="index"
          :class="[
            index === activeIndex ? 'bg-primary ' : '',
            'h-3 w-3 rounded-full border shadow-middle cursor-pointer border-primary',
          ]"
          class="h-3 w-3 rounded-full border shadow-middle cursor-pointer border-primary"
          @click="setActiveIndex(index)"></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { observeSection } from '@/utils/sectionObserver';

const testimonialsRef = ref(null);

const activeIndex = ref(1);

const reviews = ref([
  { description: 'Review 1', image: 's.png', rating: 4 },
  { description: 'Review 2', image: 's.png', rating: 5 },
  { description: 'Review 3', image: 's.png', rating: 4 },
]);

const setActiveIndex = (index) => {
  activeIndex.value = index;
};

observeSection(testimonialsRef);
</script>
