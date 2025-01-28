<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-500 ease-in-out"
      leave-active-class="transition duration-500 ease-in-out "
      enter-from-class="-translate-y-full"
      enter-to-class=" translate-y-0 "
      leave-from-class="translate-y-0 "
      leave-to-class="-translate-y-full ">
      <div
        v-show="modelValue"
        class="fixed inset-0 z-[40] w-full bg-neutral-white flex justify-center items-center h-screen py-6">
        <div
          class="flex max-lg:flex-col lg:items-end w-fit lg:justify-between lg:h-fit">
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

          <div class="flex flex-col gap-2.5 max-lg:absolute bottom-10">
            <p class="text-primary pb-2 border-b border-primary w-fit">
              mail@mail.com
            </p>
            <p class="text-primary pb-2 border-b border-primary w-fit">
              +4666666666
            </p>
            <div class="flex gap-5 mt-4">
              <IconButton
                name="ion:logo-instagram"
                class="" />
              <IconButton
                name="ion:logo-tiktok"
                class="" />
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
