import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from 'vue';

import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';

import router from './router';

createApp({
    components : {
        //Dashboard,
        
    }
}).use(router).mount('#app')