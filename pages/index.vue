
<template>
  <div>
    Home Page

    <NuxtLink href="/app/property">Go to Property</NuxtLink>
  </div>
</template>

<script setup lang="ts">
  import { type IUserStore } from "~/stores/user";

  const route = useRoute()

  const { $userStore } = useNuxtApp()
  const userStore = $userStore as IUserStore;

  onMounted(() => {
    userStore.fetchUser()
  })

</script>

<style lang="scss">
  div {
    background: #333

    h2 {
      color: #fff;
    }
  }
</style>
