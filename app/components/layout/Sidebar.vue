<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-500 ease-in-out"
      leave-active-class="transition duration-500 ease-in-out"
      enter-from-class="-translate-y-full"
      enter-to-class="translate-y-0"
      leave-from-class="translate-y-0"
      leave-to-class="-translate-y-full">
      <div
        v-show="modelValue"
        class="fixed inset-0 z-[40] w-full bg-neutral-white flex justify-center max-md:pt-32 items-start md:items-center h-screen">
        <div
          class="flex max-lg:flex-col lg:items-end items-center max-lg:w-52 lg:justify-between lg:h-fit">
          <ul
            class="gap-10 w-fit lg:pr-24 flex flex-col justify-between h-full max-lg:mb-8">
            <NavLink
              to="/"
              label="Home"
              @close="closed" />
            <NavLink
              to="/about"
              label="About"
              @close="closed" />
            <NavLink
              to="/about"
              label="Services"
              @close="closed" />
            <NavLink
              to="/about"
              label="Gallery"
              url="/about"
              @close="closed" />
            <NavLink
              to="/about"
              label="Booking"
              url="/contact"
              @close="closed" />
            <NavLink
              to="/about"
              label="Reviews"
              @close="closed" />
          </ul>

          <!-- Contact Section -->
          <div
            class="flex flex-col gap-5 max-lg:absolute bottom-0 py-10 items-start">
            <div class="flex flex-col gap-5">
              <p
                class="flex items-center gap-2 text-primary pb-2 border-b border-primary w-fit text-sm sm:text-base md:text-lg lg:text-xl">
                <Icon name="mdi:email-outline" />
                mail@mail.com
              </p>
              <p
                class="flex items-center gap-2 text-primary pb-2 border-b border-primary w-fit text-sm sm:text-base md:text-lg lg:text-xl">
                <Icon name="mdi:phone-outline" />
                +4666666666
              </p>
            </div>

            <!-- Social Icons -->
            <div class="flex gap-5 max-md:justify-between w-full">
              <IconButton
                name="ion:logo-instagram"
                class="hover:scale-110 transition-transform duration-200 sm:text-lg md:text-xl lg:text-2xl" />
              <IconButton
                name="ion:logo-tiktok"
                class="hover:scale-110 transition-transform duration-200 sm:text-lg md:text-xl lg:text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import NavLink from '@/components/ui/NavLink.vue';

defineProps({
  modelValue: Boolean,
});
const emit = defineEmits(['closed']);

const closed = () => {
  emit('closed');
};
</script>
