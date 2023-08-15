import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Acercade from './components/section/Acercade.vue'
import Asociaciones from './components/section/Asociaciones.vue'
import Conectar from './components/section/Conectar.vue'
import Donar from './components/section/Donar.vue'
import Eventos from './components/section/Eventos.vue'
import Impacto from './components/section/Impacto.vue'
import Programacion from './components/section/Programacion.vue'
import Section from './components/section/SectionComponent.vue'
import 'jquery';
import 'popper.js';
import 'bootstrap';
import './assets/app.css';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Section },
        { path: '/home', component: Section },
        { path: '/acerca-de', component: Acercade },
        { path: '/asociaciones', component: Asociaciones },
        { path: '/conectar', component: Conectar },
        { path: '/donar', component: Donar },
        { path: '/eventos', component: Eventos },
        { path: '/impacto', component: Impacto },
        { path: '/programacion', component: Programacion },
    ],
  });

const app = createApp(App);
app.use(router);
app.mount('#app');


