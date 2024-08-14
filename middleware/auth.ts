export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useUserStore();
    
    console.log('Authenticated user:', userStore.user);
    if (!userStore.isAuthenticated) {
      return navigateTo('/');
    }
});
  