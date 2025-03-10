<template>
  <div class="relative text-neutral bg-neutral-white font-montserrat">
    <Nav />

    <main>
      <Analytics />
      <SpeedInsights />
      <transition
        name="page"
        mode="out-in">
        <NuxtPage />
      </transition>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
import { Analytics } from '@vercel/analytics/nuxt';

const { data } = await useSanityQuery(`*[_type == "configuration"][0] {
  lang,
  logo {
    asset->{url}  
  },
  favicon {
    asset->{url}  
  }, 
  email,
  phone,
  socialMedias,
  seo {
    metaDescription,
    metaTitle,
    canonicalUrl,
    twitterCard,
    ogImage {
      asset->{url}
    },
    keywords
  },
  navigationLinks[] {
      label,
      page->{
        slug
      }
    }
}`);

provide('config', data);

const faviconUrl = data.value?.favicon?.asset?.url || '/default-favicon.png';

useHead({
  htmlAttrs: {
    lang: data.value?.lang || 'en',
  },

  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: faviconUrl,
    },
  ],

  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      charset: 'utf-8',
    },
    {
      name: 'keywords',
      content: data.value?.seo?.keywords?.join(', '),
    },
    {
      name: 'description',
      content: data.value?.seo?.metaDescription,
    },
  ],
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
