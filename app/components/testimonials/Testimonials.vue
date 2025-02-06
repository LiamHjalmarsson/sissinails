<template>
  <section class="mx-auto max-w-7xl py-20 lg:py-40 mb-40">
    <div
      class="section"
      ref="testimonialsRef">
      <Heading
        title="What Our Clients Say"
        subTitle="Reviews"
        class="max-w-3xl mx-auto text-center justify-center items-center px-6">
      </Heading>

      <div>
        <div
          class="md:justify-center md:items-center flex gap-8 lg:gap-10 lg:p-10 overflow-x-auto scrollbar mt-5">
          <ReviewCard
            description="Got a session got a session got a session got a session got a session got a session got a session got a session"
            image="s.png"
            :rating="4" />
          <ReviewCard
            description="Got a session got a session got a session got a session got a session got a session got a session got a session"
            image="s.png"
            :rating="4" />
          <ReviewCard
            description="Got a session got a session got a session got a session got a session got a session got a session got a session"
            image="s.png"
            :rating="4" />
        </div>

        <div class="flex justify-center items-center gap-5 mt-5">
          <span
            class="h-3 w-3 rounded-full border border-primary bg-primary shadow-middle">
          </span>
          <span
            class="h-3 w-3 rounded-full border border-primary shadow-middle" />
          <span
            class="h-3 w-3 rounded-full border border-primary shadow-middle" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { observeSection } from '@/utils/sectionObserver';

const testimonialsRef = ref(null);

observeSection(testimonialsRef);
</script>
