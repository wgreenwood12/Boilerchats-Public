import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './global-styles.css'; // Import global styles

const app = createApp(App);

router.afterEach((to, from) => {
  // Ensure gtag is defined
  if (typeof gtag !== 'undefined') {
    gtag('config', 'G-7EDVGM4H0B', {
      page_path: to.fullPath,
    });
  }
});

app.use(router).mount('#app');

// Ensure gtag function is globally available
function gtag() {
  window.dataLayer.push(arguments);
}
window.dataLayer = window.dataLayer || [];
gtag('js', new Date());
gtag('config', 'G-SVZHESV52Z');
