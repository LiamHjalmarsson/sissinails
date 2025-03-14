<template>
  <header class="relative w-full h-screen overflow-hidden">
    <!-- Image -->
    <div class="absolute top-0 max-lg:left-0 lg:right-0 w-full lg:w-1/2 h-full">
      <NuxtImg
        :src="$urlFor(image.asset).url()"
        class="h-full w-full object-cover"
        format="webp"
        :alt="image.alt"
        loading="lazy" />

      <div
        class="w-1/2 h-full absolute z-10 bg-gradient-to-r from-white to-white/0 top-0 left-0"></div>
      <div
        class="w-full h-full absolute z-10 bg-gradient-to-t from-white to-white/0 top-0 left-0"></div>
    </div>

    <!-- Content -->
    <div
      class="flex items-center justify-center lg:justify-start h-full relative z-30 p-4">
      <div
        class="flex flex-col md:w-2/3 lg:w-1/2 lg:justify-center items-center lg:items-start gap-8 lg:gap-10 lg:pl-10 2xl:pl-20 max-lg:text-center">
        <h1
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide uppercase leading-8 max-lg:text-center">
          {{ title }}
        </h1>

        <h2
          class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-8 text-neutral-darkGray">
          {{ subtitle }}
        </h2>

        <p
          class="text-neutral-darkGray leading-relaxed text-base lg:text-lg"
          v-if="hasDescription">
          {{ description }}
        </p>

        <Button
          :to="cta.link || '#'"
          v-if="hasCta">
          {{ cta.label }}
        </Button>
      </div>
    </div>

    <!-- header footer -->
    <div
      class="absolute bottom-0 w-full py-10 px-5 lg:px-10 2xl:px-20 flex justify-between items-center z-30">
      <!-- Social Media -->
      <div
        class="flex gap-5 max-sm:w-full max-sm:justify-between max-sm:items-center">
        <IconButton
          v-for="(socialMedia, index) in config.socialMedias"
          :key="index"
          :to="socialMedia.url"
          :label="'Follow us on' + socialMedia.platform"
          :name="`fa-brands:${socialMedia.platform}`" />
      </div>

      <!-- Contact -->
      <button
        class="border-b border-neutral text-neutral font-semibold md:text-lg lg:text-xl max-sm:hidden"
        aria-label="Contact Sissi Nails">
        Contact Us
      </button>
    </div>
  </header>
</template>

<script setup>
const config = inject('config');

const { title, subtitle, description, image, cta } = defineProps({
  title: {
    type: String,
    required: true,
  },

  subtitle: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: false,
  },

  image: {
    type: Object,
    required: true,
  },

  cta: {
    type: Object,
    required: false,
  },
});

const hasDescription = computed(() => description && description.trim() !== '');

const hasCta = computed(() => cta && cta.label);
</script>
