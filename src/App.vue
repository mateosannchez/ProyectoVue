<template>
  <div >
    <HeaderComponent></HeaderComponent>
    <router-view></router-view>
    <FooterComponent></FooterComponent>
    <button @click="scrollToTop" class="scroll-button">
      <i class="ri-arrow-up-line"></i>
    </button>
  </div>
</template>

<script>

import HeaderComponent from './components/header/HeaderComponent.vue';
import FooterComponent from './components/footer/FooterComponent'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Hace que el scroll sea suave
      });
    }
  }
}
</script>

<style>
@import './assets/css/style.css';
</style>
