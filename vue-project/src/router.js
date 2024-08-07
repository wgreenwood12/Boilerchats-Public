import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'; // Assuming your home component is App.vue
import reportBug from '../components/reportBug.vue'
import Home from '../components/Home.vue'
import contactUs from '../components/contactUs.vue'
import submitCourse from '../components/submitCourse.vue'
const routes = [
    { path: '/', component: Home }, // Update this line to import and use the correct component for your home page
    { path: '/reportBug', component: reportBug },
    { path: '/contactUs', component: contactUs },
    { path: '/submitCourse', component: submitCourse }


  ];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
