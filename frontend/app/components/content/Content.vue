<template>
  <Section>
    <div
      class="flex flex-col lg:flex-row gap-10 lg:gap-20 h-full z-10 items-center">
      <!-- Loop through items and render content dynamically -->
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="[
          'flex w-full justify-between gap-10 lg:gap-20 h-full items-center flex-1',
          item.contentType === 'images' ? 'max-lg:order-2' : '',
        ]">
        <!-- Render Image Section -->
        <div
          v-if="item.contentType === 'images'"
          class="relative flex flex-1 lg:justify-center lg:items-center gap-5 sm:gap-10 lg:py-10 h-fit w-full">
          <Images
            v-for="(image, imageIndex) in item.images"
            :key="imageIndex"
            :index="imageIndex"
            :image="image" />
        </div>

        <!-- Render Text Content Section -->
        <div
          v-if="item.contentType === 'text'"
          class="flex flex-col lg:flex-1">
          <Text :content="item" />
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup>
const { items } = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
