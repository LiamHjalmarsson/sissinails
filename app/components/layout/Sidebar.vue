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
        class="fixed inset-0 z-[40] w-full bg-neutral-white flex justify-center items-center h-screen">
        <div class="flex items-end w-fit justify-between h-96">
          <ul class="gap-8 w-fit pr-24 flex flex-col justify-between h-full">
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

          <div class="space-y-3">
            <p class="text-primary pb-2 border-b border-primary w-fit">
              mail@mail.com
            </p>
            <p class="text-primary pb-2 border-b border-primary w-fit">
              +4666666666
            </p>
            <p>Saint-hilaire-de-riez</p>
            <div class="space-x-6">
              <Icon name="ion:logo-instagram" />
              <Icon name="ion:logo-tiktok" />
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
