<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-transform duration-500"
      leave-active-class="transition-transform duration-500"
      enter-from-class="-translate-y-full"
      enter-to-class="translate-y-0"
      leave-from-class="translate-y-0"
      leave-to-class="-translate-y-full">
      <div
        v-show="modelValue"
        class="fixed inset-0 z-[40] w-full bg-neutral-white flex justify-center max-md:pt-32 items-start md:items-center h-screen">
        <div
          class="flex max-lg:flex-col lg:items-end items-center max-lg:w-52 lg:justify-between lg:h-fit">
          <!-- Links -->
          <ul
            class="gap-10 w-fit lg:pr-24 flex flex-col justify-between h-full max-lg:mb-8"
            v-show="config.navigationLinks.length">
            <NavLink
              v-for="(link, index) in config?.navigationLinks"
              :key="index"
              :to="link?.page?.slug?.current"
              :label="link?.label"
              @close="$emit('closed')" />
          </ul>

          <!-- Contact Info -->
          <div
            class="flex flex-col gap-5 max-lg:absolute bottom-0 max-lg:py-10 items-start">
            <div class="flex flex-col gap-5">
              <p
                class="flex items-center gap-2 text-primary-active pb-2 border-b border-primary-active w-fit text-sm sm:text-base md:text-lg lg:text-xl">
                <span> {{ config?.email }} </span>
              </p>
              <p
                class="flex items-center gap-2 text-primary-active pb-2 border-b border-primary-active w-fit text-sm sm:text-base md:text-lg lg:text-xl">
                <span> {{ config?.phone }} </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import NavLink from '@/components/ui/NavLink.vue';

const config = inject('config');

defineProps({
  modelValue: Boolean,
});

defineEmits(['closed']);
</script>
