<template>
  <div class="mx-auto max-w-7xl mb-24">
    <Heading
      title="What they say"
      subTitle="Reviews"
      class="max-w-3xl mx-auto text-center justify-center items-center px-6">
    </Heading>

    <div class="grid grid-cols-3 gap-16 mt-16">
      <ReviewCard
        description="Got a essiongot a essiongot a essiongot a essiongot a essiongot a essiongot a essiongot a ession"
        image="s.png"
        rating="4" />
      <ReviewCard
        description="Got a essiongot a essiongot a essiongot a essiongot a essiongot a essiongot a essiongot a ession"
        image="s.png"
        rating="4" />
      <ReviewCard
        description="Got a essiongot a essiongot a essiongot a
      essiongot a essiongot a essiongot a essiongot a ession"
        image="s.png"
        rating="4" />
    </div>
  </div>
</template>

<script setup>
import Heading from '@/components/ui/Heading.vue';
import ReviewCard from '@/components/testimonials/ReviewCard.vue';
</script>
