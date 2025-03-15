<template>
  <div class="max-lg:min-w-full lg:flex-1 flex justify-center items-center">
    <div
      class="max-lg:max-w-[80%] p-10 shadow-middle transition duration-300 lg:hover:-translate-y-2 lg:hover:shadow-hover">
      <div class="flex flex-col items-center h-full gap-5">
        <NuxtImg
          :src="$urlFor(testimonial.image.asset).url()"
          class="object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full shadow-middle"
          :alt="testimonial.image.alt" />

        <!-- Rating Stars -->
        <div class="flex gap-1 text-base md:text-lg lg:text-xl w-fit mx-auto">
          <Icon
            v-for="number in 5"
            :key="number"
            :name="
              number <= testimonial.rating
                ? 'material-symbols:star'
                : 'material-symbols:star-outline'
            "
            class="text-secondary" />
        </div>

        <!-- Testimonial Description -->
        <p class="text-center text-sm sm:text-base font-light">
          {{ testimonial.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  testimonial: {
    type: Object,
    required: true,
  },
});
</script>
