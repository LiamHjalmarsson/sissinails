<template>
  <Section>
    <Heading
      :title="title"
      :subTitle="subtitle">
    </Heading>

    <div class="flex flex-wrap gap-10 mt-10">
      <ServiceCard
        v-for="service in services"
        :key="service._key"
        :service="service" />
    </div>
  </Section>
</template>

<script setup>
const { title, subtitle, services } = defineProps({
  title: {
    type: String,
    required: true,
  },

  subtitle: {
    type: String,
    required: true,
  },

  services: {
    type: Object,
    required: true,
  },
});
</script>
