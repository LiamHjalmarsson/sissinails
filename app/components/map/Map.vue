<template>
  <div
    style="height: 100%; width: 100%"
    class="relative z-10">
    <LMap
      :zoom="12"
      :center="[47.21322, -1.559482]"
      :use-global-leaflet="false">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap" />
      <LFeatureGroup>
        <LMarker :lat-lng="[47.21322, -1.559482]">
          <LTooltip> Direction </LTooltip>
        </LMarker>
      </LFeatureGroup>
    </LMap>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const zoom = ref(6);
</script>
