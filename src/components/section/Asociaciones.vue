<template>
  <div style="padding: 8rem 0rem;">
    <div>
      <img class="asoc__img" src="../../assets/img/asoci.jpg" alt="">
    </div>

    <div class="asoc__back">
      <div style="display: flex; justify-content: center">
        <p class="asoc__p">
          Como organización sin fines de lucro, nos asociamos con marcas
          comprometidas con el impacto social y el pensamiento a largo plazo en
          lugar de objetivos a corto plazo.

          <br />
          <br />

          Usamos nuestra experiencia vivida para ayudarnos a elegir las
          asociaciones correctas. La verdad es que venimos del mismo entorno que
          muchos de los niños con los que trabajamos, por lo que tenemos un
          instinto natural para saber cuándo una marca tiene una intención
          genuina de ayudar.

          <br />
          <br />

          La sociedad se puede definir como una asociación, pero para nosotros
          significa compromiso. Nuestros socios se alinean con nuestras
          creencias y nos ayudan a extender nuestro impacto. Ya sea una donación
          que se nos hizo o una oportunidad que difundimos, la importancia
          detrás de la colaboración es evidente. Con nuestros socios, nos damos
          el espacio para centrarnos en lo que todos hacemos muy bien: el
          impacto se manifiesta de muchas formas, y parte del trabajo en el
          espacio de la comunidad es establecer conexiones inteligentes para
          facilitar resultados más significativos. De una forma u otra, aunque
          nuestras definiciones puedan parecer diferentes, todos estamos aquí
          para redefinir la comunidad.
        </p>
      </div>

      <div class="asoc__grid">
        <div class="asoc__divImg">
          <img style="filter: invert(1); width: 68%" src="../../assets/img/jd.png" alt=""
          />
        </div>
        <div class="asoc__divImg">
          <img
            style="width: 200px; filter: invert(1)"
            src="../../assets/img/arcterix.png"
            alt=""
          />
        </div>
        <div class="asoc__divImg">
          <img
            style="
              filter: invert(1);
              width: 120px;
              "
            src="../../assets/img/asics.png"
            alt=""
          />
        </div>
        <div class="asoc__divImg">
          <img
            style="width: 135px; filter: invert(1)"
            src="../../assets/img/cops.png"
            alt=""
          />
        </div>
        <div class="asoc__divImg">
          <img
            style="width: 140px; filter: invert(1)"
            src="../../assets/img/finance.png"
            alt=""
          />
        </div>
        <div class="asoc__divImg">
          <img
            style="width: 100px; filter: invert(1)"
            src="../../assets/img/lulu.png"
            alt=""
          />
        </div>
        <div class="asoc__divImg">
          <img
            style="width: 100px; filter: invert(1)"
            src="../../assets/img/reebok.png"
            alt=""
          />
        </div>
        <div class="asoc__divImg">
          <img
            style="
              width: 100px; filter: invert(1);"
            src="../../assets/img/puma.png"
            alt=""
          />
        </div>
        <div class="asoc__divImg">
          <img
            style="width: 100px; filter: invert(1)"
            src="../../assets/img/nike.png"
            alt=""
          />
        </div>
      </div>

      <div style="display: flex; justify-content: center">
        <p class="asoc__p2">
          Nuestros programas enseñan a los niños por primera vez en sus vidas
          que valen más de lo que creen. Reemplazamos las reglas y la violencia
          con respeto y amor, enseñándoles a utilizar mejor sus mentes y
          cuerpos.

          <br />
          <br />

          Se habla de un programa que dura un fin de semana meses o incluso años
          después de que nos hayamos ido.
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AsociacionesComponent",
};
</script>

<!-- <template>
    <div style="border: 2px solid green;">
        <h1>asociaciones</h1>
      <h1>{{ titulo }}</h1>
      <Hijo :mensaje="mensaje"></Hijo>
    </div>
  </template>
  
  <script>
  import Hijo from './Conectar.vue';
  
  export default {
    name: 'AsociacionesComponent',
    data() {
      return {
        titulo: 'Comunicación entre componentes',
        mensaje: 'Hola desde el componente padre',
      };
    },
    components: {
      Hijo,
    },
  };
  </script> -->
