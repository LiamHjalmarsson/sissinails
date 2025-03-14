<template>
  <Heading
    :title="content.title"
    :subTitle="content.subtitle" />

  <p
    class="text-neutral-darkGray leading-relaxed text-sm sm:text-base lg:text-lg max-lg:text-center mt-5 lg:mt-10">
    <span
      v-for="block in content.text"
      :key="block._key">
      <span
        v-for="child in block.children"
        :key="child._key">
        <span v-if="child.marks.length === 0">{{ child.text }}</span>
        <span v-else>
          <strong>{{ child.text }}</strong>
        </span>
      </span>
    </span>
  </p>
</template>

<script setup>
const { content } = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>
