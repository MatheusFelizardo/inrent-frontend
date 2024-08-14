export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('page:middleware', (middleware, { layout }) => {
      if (layout === 'auth') {
        middleware.push('auth');
      }
    });
  });