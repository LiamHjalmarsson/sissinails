<template>
  <div class="relative text-neutral bg-neutral-white font-montserrat">
    <Nav />

    <main>
      <Analytics />
      <SpeedInsights />
      <NuxtPage />
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
