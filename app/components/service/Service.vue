<template>
  <section
    class="mx-auto max-w-7xl py-20 lg:py-40 section max-lg:px-5 max-2xl:px-10"
    ref="serviceRef">
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
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { observeSection } from '@/utils/sectionObserver';

const { services } = defineProps({
  services: Object,
});

console.log(services);
const serviceRef = ref(null);

observeSection(serviceRef);
</script>
