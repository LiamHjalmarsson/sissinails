<template>
  <Section>
    <Heading
      :title="services.title"
      :subTitle="services.subtitle">
    </Heading>

    <div class="flex flex-wrap gap-10">
      <ServiceCard
        v-for="service in services.services"
        :key="service._key"
        :service="service" />
    </div>
  </Section>
</template>

<script setup>
const { services } = defineProps({
  services: Object,
});
</script>
