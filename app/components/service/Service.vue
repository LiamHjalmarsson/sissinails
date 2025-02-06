<template>
  <section class="mx-auto max-w-7xl py-20 lg:py-40">
    <Heading
      title="Our Services"
      subTitle="Nail Treatments & Custom Designs"
      class="max-w-3xl mx-auto text-center justify-center items-center px-5">
    </Heading>

    <div
      class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-5 md:px-10 lg:px-0">
      <ServiceCard
        image="/images/nails.png"
        title="Nail Art"
        icon="mdi-sparkles"
        class="flex-row-reverse"
        color="secondary"
        description="Express yourself with custom nail art created by our talented nail artists."
        price="40£ - 70£"
        duration="1 hour" />

      <ServiceCard
        image="/images/s.png"
        title="Nail Acrylic"
        icon="mdi-sparkles"
        class="flex-row-reverse"
        color="secondary"
        description="Express yourself with custom nail art created by our talented nail artists."
        price="40£ - 70£"
        duration="1 hour" />

      <ServiceCard
        image="/images/style.png"
        title="Nail Polish"
        icon="mdi-flower"
        color="accent"
        class="m"
        description="Choose from a wide range of colors and finishes for the perfect polish look."
        price="20£ - 40£"
        duration="30 mins" />
    </div>
  </section>
</template>

<script setup></script>
