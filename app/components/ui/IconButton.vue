<template>
  <div
    class="p-2 bg-primary text-white shadow flex justify-center items-center text-2xl w-fit font-bold hover:bg-primary-hover transition duration-300 cursor-pointer">
    <Icon :name="name" />
  </div>
</template>

<script setup>
defineProps({
  name: String,
});
</script>
