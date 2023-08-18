<template>
    <div>
        <div>
            <div class="header">
                <div class="header__a">
                    <router-link class="header__a1" to="/home">kickback</router-link>
                </div>

                <div class="header__right">
                    <nav>
                        <router-link to="/acerca-de" class="enlace-con-linea">acerca de</router-link>
                        <router-link to="/asociaciones" class="enlace-con-linea">asociaciones</router-link>
                        <router-link to="/impacto" class="enlace-con-linea">nuestro impacto</router-link>
                        <router-link to="/donar" class="enlace-con-linea">donar</router-link>
                        <router-link to="/programacion" class="enlace-con-linea">programación</router-link>
                        <router-link to="/eventos" class="enlace-con-linea">eventos</router-link>
                        <router-link to="/conectar" class="enlace-con-linea">conectar</router-link>
                    </nav>
                </div>

                <div class="button-container">
                    <button @click="toggleLinks" id="toggleButton"><i style="font-size: 22px;" class="ri-menu-line"></i></button>
                    <div class="items-container" v-show="showLinks" id="itemsContainer">
                        <div style="color: black;" class="item">Menú</div>
                        <router-link to="/acerca-de" class="enlace-con-linea">acerca de</router-link>
                        <router-link to="/asociaciones" class="enlace-con-linea">asociaciones</router-link>
                        <router-link to="/impacto" class="enlace-con-linea">nuestro impacto</router-link>
                        <router-link to="/donar" class="enlace-con-linea">donar</router-link>
                        <router-link to="/programacion" class="enlace-con-linea">programación</router-link>
                        <router-link to="/eventos" class="enlace-con-linea">eventos</router-link>
                        <router-link to="/conectar" class="enlace-con-linea">conectar</router-link>
                    </div>
                </div>

            </div>

            <div class="header__p">
                <p class="header__p1">
                    Kickback es una organización sin fines de lucro que proporciona
                    zapatillas para facilitar experiencias y oportunidades en los
                    deportes, el arte y la educación.
                </p>
                <!-- <h1 style="color: white;">contragolpe</h1> -->
            </div>

            <div class="image-container">
                <img style="width: 100%; filter: grayscale(100%)" :src="imageSrc" alt="Mi Imagen" />
                <h1 class="overlay-text">contragolpe</h1>
            </div>
        </div>
    </div>
</template>

<script>
import miImagen from "@/assets/img/header.jpg";

export default {
    name: "HeaderComponent",
    data() {
        return {
            imageSrc: miImagen,
            showLinks: false
        };
    },
    methods: {
    toggleLinks() {
      this.showLinks = !this.showLinks;
    }
  }
};
</script>

