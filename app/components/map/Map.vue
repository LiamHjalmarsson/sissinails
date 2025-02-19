<template>
  <div class="relative w-full h-96 lg:h-full">
    <LMap
      :zoom="12"
      :center="[47.21322, -1.559482]"
      :use-global-leaflet="false">
      <LTileLayer
        v-if="currentLayer === 'satellite'"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        name="satellite" />

      <LTileLayer
        v-if="currentLayer === 'street'"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        name="OpenStreetMap" />

      <LFeatureGroup>
        <LMarker :lat-lng="[47.21322, -1.559482]">
          <LTooltip> Direction </LTooltip>
        </LMarker>
      </LFeatureGroup>
    </LMap>

    <div class="z-[9999] absolute bottom-0 right-0 p-5">
      <button
        @click="toggleLayer"
        class="px-4 py-2 bg-blue-500 text-white">
        Switch to {{ currentLayer === 'street' ? 'Satellite' : 'Street' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const zoom = ref(6);

const currentLayer = ref('street');

const toggleLayer = () => {
  currentLayer.value = currentLayer.value === 'street' ? 'satellite' : 'street';
};
</script>
