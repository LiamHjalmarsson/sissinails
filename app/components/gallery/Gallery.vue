<template>
  <Section>
    <Heading
      :title="gallery.title"
      :subTitle="gallery.subtitle" />

    <div class="grid grid-cols-2 md:grid-cols-4 gap-2.5">
      <NuxtLink
        v-for="(image, index) in gallery.images"
        class="overflow-hidden group bg-neutral relative flex justify-center items-center"
        :key="index"
        :to="`${image.link}`">
        <NuxtImg
          :src="$urlFor(image.asset).url()"
          :alt="image.alt"
          class="object-cover h-48 sm:h-52 md:h-64 lg:h-72 w-full group-hover:scale-110 transition duration-500 group-hover:opacity-60"
          loading="lazy" />

        <div
          class="absolute text-neutral-white text-2xl font-semibold opacity-0 group-hover:opacity-100 duration-500 transition">
          x
        </div>
      </NuxtLink>
    </div>

    <Button
      :button="gallery.button"
      class="mx-auto mt-10">
      {{ gallery.button.label }}
    </Button>
  </Section>
</template>

<script setup>
const { gallery } = defineProps({
  gallery: Object,
});
</script>
