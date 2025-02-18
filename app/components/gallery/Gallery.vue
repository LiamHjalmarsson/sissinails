<template>
  <Section>
    <Heading
      :title="gallery.title"
      :subTitle="gallery.subtitle"
      class="max-w-3xl mb-5" />

    <div class="w-full">
      <div
        class="grid grid-cols-2 md:grid-cols-4 w-full max-w-7xl mx-auto gap-5">
        <NuxtImg
          v-for="(image, index) in gallery.images"
          :key="index"
          :src="$urlFor(image.asset).url()"
          :alt="image.alt"
          class="object-cover h-48 sm:h-52 md:h-64 lg:h-72 w-full" />
      </div>
    </div>

    <div class="mt-10 w-full sm:w-1/2 lg:w-fit mx-auto">
      <ButtonV2 :to="gallery.button.url"> {{ gallery.button.label }} </ButtonV2>
    </div>
  </Section>
</template>

<script setup>
import Section from '@/components/layout/Section.vue';

const { gallery } = defineProps({
  gallery: Object,
});
</script>
