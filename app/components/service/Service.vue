<template>
  <div class="mx-auto max-w-7xl">
    <Heading
      title="What i offer"
      subTitle="services"
      class="max-w-3xl mx-auto text-center justify-center items-center px-6">
    </Heading>

    <div class="grid lg:grid-cols-3 gap-16 mt-16 max-lg:px-6">
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
        description="Choose from a wide range of colors and finishes for the perfect polish look."
        price="20£ - 40£"
        duration="30 mins" />
    </div>
  </div>
</template>

<script setup></script>
