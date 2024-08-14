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
                      <div class="relative cursor-pointer">
                        <div class="absolute top-2 right-2 bg-slate-800 text-white text-sm px-2 rounded-2xl">
                          {{ property?.city }}
                        </div>
              
                        <div class="pointer-events-none">
                          <img
                            v-if="property?.photos?.length > 0"
                            :src="property?.photos[0]?.photo_url"
                            :alt="property?.title"
                            class="w-full h-64 object-cover rounded-2xl"
                          />
                        </div>
              
                        <div class="min-h-20 pointer-events-none">
                          <h3 class="text-white text-lg font-semibold mt-2">{{ property?.title }} </h3>
                          <p class="text-white text-sm mt-1">{{ property?.description }}</p>
                        </div>
              
                        <div class="mt-2 grid grid-cols-2 justify-between min-h-10 pointer-events-none">
                          <div class="flex gap-2 items-center" v-if="property?.area">
                            <span class="text-white font-light text-sm">Area:</span>
                            <span class="text-white font-light text-sm">{{ property?.area }} m²</span>
                          </div>
              
                          <div class="flex gap-2 items-center" v-if="property?.bathrooms">
                            <span class="text-white font-light text-sm">Bathrooms:</span>
                            <span class="text-white font-light text-sm">{{ property?.bathrooms }}</span>
                          </div>
              
              
                          <div class="flex gap-2 items-center" v-if="property?.bedrooms">
                            <span class="text-white font-light text-sm">Bedrooms:</span>
              
                            <span class="text-white font-light text-sm">{{ property?.bedrooms }}</span>
                          </div>
              
                          <div class="flex gap-2 items-center" v-if="property?.parking">
                            <span class="text-white font-light text-sm">Parking:</span>
                            <span class="text-white font-light text-sm">{{ property?.parking }}</span>
                          </div>
                        </div>
                      </div>
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
  
  import { propertiesList } from '@/utils'
  import { computed, onMounted, ref } from 'vue';
  import HeaderMenu from '@/Components/Menus/HeaderMenu.vue';
  import Steps from '@/Components/Steps.vue';
  import Search from '@/Components/Search.vue';
  import { formatedProperties } from '@/utils';
  
    const props = defineProps({
      user: {
        type: Object
      },
      profile: {
          type: Object
      },
      property: {
        type: Object
      }
    });
  
    console.log(props.property)
  
  </script>
  