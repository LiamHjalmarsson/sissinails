<template>
  <Section>
    <Heading
      :title="title"
      :subTitle="subtitle" />

    <div class="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-5 lg:mt-10">
      <NuxtLink
        v-for="(image, index) in images"
        class="overflow-hidden group bg-neutral relative flex justify-center items-center"
        :key="index"
        to="/">
        <!-- :to="`${image?.link}`"> -->
        <NuxtImg
          :src="$urlFor(image.asset).url()"
          :alt="image?.alt"
          class="object-cover h-48 sm:h-52 md:h-64 lg:h-72 w-full group-hover:scale-110 transition duration-500 group-hover:opacity-60"
          loading="lazy" />

        <div
          class="absolute text-neutral-white text-5xl font-bold opacity-0 group-hover:opacity-100 duration-500 transition">
          <Icon
            label="Follow Sissi Nails on Instagram"
            name="fa-brands:instagram" />
        </div>
      </NuxtLink>
    </div>

    <Button
      v-if="hasCta"
      :button="cta"
      class="mx-auto mt-10">
      {{ cta.label }}
    </Button>
  </Section>
</template>

<script setup>
const { title, subtitle, images, cta } = defineProps({
  title: {
    type: String,
    required: true,
  },

  subtitle: {
    type: String,
    required: true,
  },

  images: {
    type: Array,
    required: true,
  },

  cta: {
    type: Object,
    required: true,
  },
});

const hasCta = computed(() => {
  return cta && cta.label;
});
</script>
