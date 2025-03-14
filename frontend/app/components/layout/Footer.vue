<template>
  <footer class="bg-neutral text-neutral-white py-16">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="flex flex-col lg:items-start gap-10 lg:gap-20">
        <!-- Navigation -->
        <div
          class="flex lg:justify-between lg:items-center w-full relative max-lg:flex-col">
          <!-- Logo -->
          <NuxtLink
            to="/"
            class="flex py-4 items-center justify-center relative"
            v-if="config">
            <NuxtImg
              v-if="config.logo?.useImage"
              :src="$urlFor(config.logo.asset.url).url()"
              width="50"
              :alt="config.logo?.alt"
              loading="lazy" />
            <span
              v-else
              class="text-2xl md:text-3xl font-bold">
              {{ config.logo.name }}
            </span>
          </NuxtLink>

          <!-- Links -->
          <ul
            class="gap-10 flex max-lg:flex-col max-lg:mt-10"
            v-if="config?.navigationLinks?.length">
            <NavLink
              class="text-lg"
              v-for="(link, index) in config.navigationLinks"
              :key="index"
              variant="secondary"
              :to="link.page.slug.current"
              :label="link.label" />
          </ul>
        </div>

        <hr class="w-full h-0.5 bg-neutral-white" />

        <!-- Social Media Icons -->
        <div
          class="flex lg:justify-center lg:items-center w-full"
          v-if="config?.socialMedias?.length">
          <IconButton
            v-for="(socialMedia, index) in config.socialMedias"
            :key="index"
            :to="socialMedia?.url"
            :label="'Follow us on' + socialMedia.platform"
            :name="`fa-brands:${socialMedia.platform}`" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const config = inject('config');
</script>
