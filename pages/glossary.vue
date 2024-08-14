<template>
    <div class="relative min-h-screen bg-gray-900 bg-center text-white p-5">
      <Link :href="route('home')" class="min-w-32">
        <img src="/logo-no-background.svg" alt="inRent" class="h-10" />
      </Link>
      
      <div class="mt-10">
  
        
        <h3 class="text-lg text-gray-400">System glossary</h3>
  
        <div class="mt-4" v-for="word in glossary" :key="word.id" :id="word.id">
          <span class="text-orange-300">{{ word.name }}: </span><span class="text-gray-400">{{ word.meaning }}</span>
        </div>
      </div>
  
    </div>
  </template>
  
  <script setup>
    import glossary from '@/glossary.json'
    console.log(glossary)
  </script>
  
  <style >
  
  </style>