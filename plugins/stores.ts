import { useUserStore } from "~/stores/user.js";

export default defineNuxtPlugin((NuxtApp) => {
  return {
    provide: {
      userStore: useUserStore(),
    },
  };
});