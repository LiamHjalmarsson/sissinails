<template>
  <div class="relative text-neutral bg-neutral-white font-montserrat">
    <Nav />

    <main>
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup>
const { data } = await useSanityQuery(`*[_type == "configuration"][0] {
  logo,
  email,
  phone,
  socialMedias,
  navigationLinks[] {
      label,
      page->{
        slug
      }
    }
}`);

provide('config', data);

useHead({
  htmlAttrs: {
    lang: 'en',
  },
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
