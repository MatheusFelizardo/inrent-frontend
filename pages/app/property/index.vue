
<template>
    <div>
        Property Page

        <NuxtLink href="/">Go to Home</NuxtLink>

    </div>
  </template>
  
  <script setup lang="ts">
    import { type IUserStore } from "~/stores/user";

    const route = useRoute()
  
    const { $userStore } = useNuxtApp()
    const userStore = $userStore as IUserStore;

  </script>
  
  <style lang="scss">
    div {
      background: #333
  
      h2 {
        color: #fff;
      }
    }
  </style>
  