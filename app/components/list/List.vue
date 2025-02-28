<template>
  <Section>
    <div class="flex max-lg:flex-col justify-center gap-10 lg:gap-20">
      <!-- List -->
      <div
        class="w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center max-lg:mx-auto">
        <Heading
          :title="title"
          :subTitle="subtitle" />

        <ul class="flex flex-col justify-center gap-10">
          <li
            class="flex justify-between items-center"
            v-for="(detail, index) in items"
            :key="index">
            <span class="lg:text-lg font-semibold">
              {{ detail.leftItem }}
            </span>
            <span class="max-md:text-sm text-neutral-darkGray">
              {{ detail.rightItem }}
            </span>
          </li>
        </ul>

        <div
          class="flex max-[475px]:flex-col justify-start gap-5 lg:gap-10 mt-10"
          v-if="hasCta">
          <Button to="">
            <Icon
              name="material-symbols:calendar-month-outline-rounded"
              class="text-2xl" />
            {{ cta.label }}
          </Button>
        </div>
      </div>

      <!-- Map -->
      <div class="w-full md:w-2/3 lg:w-1/2 mx-auto">
        <Map v-if="showMap" />
      </div>
    </div>
  </Section>
</template>

<script setup>
const { title, subtitle, items, cta, showMap } = defineProps({
  title: {
    type: String,
    required: true,
  },

  subtitle: {
    type: String,
    required: true,
  },

  items: {
    type: Array,
    required: true,
  },

  cta: {
    type: Object,
  },

  showMap: {
    type: Boolean,
    default: true,
  },
});

const hasCta = computed(() => {
  return cta && cta.label;
});
</script>
