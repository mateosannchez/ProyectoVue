<template>
    <div>
        <!-- <h1>section</h1> -->
        <Acercade></Acercade>
        <Asociaciones></Asociaciones>
        <Impacto></Impacto>
        <Donar></Donar>
        <Programacion></Programacion>
        <Eventos></Eventos>
        <Conectar></Conectar>
        <Api></Api>
    </div>
</template>

<script>

import Acercade from './Acercade.vue';
import Asociaciones from './Asociaciones.vue';
import Conectar from './Conectar.vue';
import Donar from './Donar.vue';
import Eventos from './Eventos.vue';
import Impacto from './Impacto.vue';
import Programacion from './Programacion.vue';
import Api from './Api.vue'

export default {
    name: 'SectionComponent',
    components: {
    Acercade,
    Asociaciones,
    Conectar, 
    Donar,  
    Eventos,
    Impacto,
    Programacion,
    Api
  }
}
</script>