<template>
  <Section>
    <Heading
      :title="title"
      :subTitle="subtitle" />

    <div class="relative overflow-hidden mt-5">
      <div class="p-5">
        <div
          class="flex items-center gap-10 max-lg:px-5 transition duration-300"
          :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
          <Testimonial
            v-for="(testimonial, index) in testimonials"
            :key="index"
            :description="testimonial.description"
            :image="testimonial.image"
            :rating="testimonial.rating" />
        </div>
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

const setActiveIndex = (index) => {
  activeIndex.value = index;
};
</script>
