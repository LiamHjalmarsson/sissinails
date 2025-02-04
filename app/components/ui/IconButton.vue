<template>
  <div
    class="p-2 flex justify-center items-center text-2xl w-fit font-bold cursor-pointer hover:-translate-y-2 duration-300 transition">
    <Icon :name="name" />
  </div>
</template>

<script setup>
defineProps({
  name: String,
});
</script>
