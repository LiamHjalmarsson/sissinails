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

    <!-- text -->
    <div
      class="flex items-center justify-center lg:justify-start h-full relative z-30">
      <div
        class="flex flex-col md:w-2/3 lg:w-1/2 lg:justify-center items-center lg:items-start gap-5 lg:gap-10 px-10 2xl:px-20">
        <h1
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide uppercase leading-tight max-lg:text-center">
          {{ title }}
        </h1>

        <h2
          class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-darkGray">
          {{ subtitle }}
        </h2>

        <p
          class="text-neutral-darkGray leading-relaxed text-base lg:text-lg"
          v-if="hasDescription">
          {{ description }}
        </p>

        <Button
          to=""
          v-if="hasCta">
          {{ cta.label }}
        </Button>
      </div>
    </div>

    <!-- header footer -->
    <div
      class="absolute bottom-0 w-full py-10 px-5 lg:px-10 2xl:px-20 flex justify-between items-center z-30">
      <div class="flex gap-5">
        <IconButton
          v-for="(socialMedia, index) in config.socialMedias"
          :key="index"
          :to="socialMedia.url"
          label="Follow Sissi Nails on Facebook"
          :name="`fa-brands:${socialMedia.platform}`" />
      </div>

      <button
        class="border-b border-neutral text-neutral font-semibold md:text-lg lg:text-xl"
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
    default: '',
  },

  image: {
    type: Object,
    default: null,
  },

  cta: {
    type: Object,
    default: null,
  },
});

const hasDescription = computed(() => {
  return description && description.trim() !== '';
});

const hasCta = computed(() => {
  return cta && cta.label;
});
</script>
