<template>
  <div class="relative flex flex-col justify-center items-center py-12 px-6">
    <Heading
      class="text-center"
      title="Appoitment today"
      subTitle="Book">
    </Heading>

    <div
      class="max-w-7xl w-full flex max-lg:flex-col mx-auto justify-center gap-32 mt-16">
      <div class="w-1/2 flex flex-col justify-between">
        <div class="h-full flex justify-center items-center">
          <Form />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showForm = ref(false);
</script>
