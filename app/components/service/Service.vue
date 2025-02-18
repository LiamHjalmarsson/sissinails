<template>
  <Section>
    <Heading
      :title="services.title"
      :subTitle="services.subtitle"
      class="max-w-3xl">
    </Heading>

    <div class="flex flex-wrap gap-10 mt-5">
      <ServiceCard
        v-for="service in services.services"
        :key="service._key"
        :service="service" />
    </div>
  </Section>
</template>

<script setup>
import Section from '@/components/layout/Section.vue';

const { services } = defineProps({
  services: Object,
});
</script>
