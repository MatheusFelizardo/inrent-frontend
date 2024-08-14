<template>
  <div
      class="relative min-h-screen bg-gray-900 bg-center max-w-7xl mx-auto"
  >
      <section>
          <Map id="map" />
      </section>
  </div>
</template>

<script setup>
import { propertiesList } from '@/utils'
import { computed } from 'vue';
import Search from '@/Components/Search.vue';
import ShowCaseSlider from '@/Components/ShowCaseSlider.vue';
import Map from '@/Components/Map.vue';

const initialMessage = computed(() => {
  if (propertiesList.length > 20) {
      return `More than ${propertiesList.length} properties waiting for you`;
  }
  return `The place where you can find your <span class="text-orange-500">dream property</span>`
});
</script>


<style>

</style>
