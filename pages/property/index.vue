<template>
    <div
        class="relative min-h-screen bg-gray-900 bg-center "
    >
        <HeaderMenu :user="user" :profile="profile" :about="about" />
  
        <div class="max-w-7xl mx-auto pt-28">
            <div class="flex flex-col max-w-7xl px-20">
              <Search :info-tooltip="false" />
  
              <section class="mt-8">
                  <div class="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <template v-for="(property, index) in formatedProperties" :key="property.id + index">
                      <PropertyCard :property="property" />
                    </template>
                  </div>
              </section>
            </div>
  
            <section ref="about" id="about" class="max-w-7xl flex flex-col items-center justify-center pt-20 pb-20">
                <Steps />
            </section>
        </div>
    </div>
  </template>
  
  <script setup>
  // import { propertiesList } from '@/utils'
  import { computed, onMounted, ref } from 'vue';
  // import HeaderMenu from '@/Components/Menus/HeaderMenu.vue';
  // import Steps from '@/Components/Steps.vue';
  // import Search from '@/Components/Search.vue';
  // import PropertyCard from '@/Components/Property/PropertyCard.vue';
  // import { formatedProperties } from '@/utils';
  
  const props = defineProps({
    user: {
        type: Object
    },
    profile: {
        type: Object
    }
  });
  
  const about = ref(null)
  
  </script>
  
  