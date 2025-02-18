<template>
  <Section>
    <Heading
      :title="services.title"
      :subTitle="services.subtitle">
    </Heading>

    <div class="flex flex-wrap lg:gap-10 lg:mt-5">
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
