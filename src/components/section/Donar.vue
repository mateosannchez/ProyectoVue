<!-- <template>
    <div style="border: 2px solid yellow;">
        <h1>donar</h1>
    </div>
</template>

<script>
export default {
    name: 'DonarComponent',
}
</script> -->

<template>
  <div>
    <!-- <h1>donar</h1>
      <h1>{{ titulo }}</h1>
      <Hijo @mensajeEnviado="manejarMensaje"></Hijo> -->

    <div class="donar__grid">
      <div class="donarText__div">
        <h3 class="donarText__h3">
          POCAS DONACIONES SON TAN PERSONALES COMO DARLE A ALGUIEN UN PAR DE
          ZAPATILLAS PARA CUBRIR LAS PLANTAS DE SUS PIES.
        </h3>
        <p class="donarText__p">
          Si las zapatillas que nunca usa le darían a un niño más emoción y
          alegría que a usted, considere donarlas. Nos aseguraremos de que tus
          tenis terminen yendo al niño correcto por las razones correctas.
        </p>
        <button class="donar__button">donar</button>
      </div>

      <div>
        <img class="donar__img" src="../../assets/img/donar.jpg" alt="" />
      </div>
    </div>

    <div style="background-color: black">
      <div class="donar__flex">
        <div class="donar__grid1">
          <span>EL 99% DE NUESTRO IMPACTO</span>
          <span style="color: rgb(51, 51, 51)">ES INVISIBLE A SIMPLE VISTA.</span>
        </div>

        <p class="donar__p">
          El potencial humano es una métrica difícil de medir. Es difícil
          cuantificar los cambios que importan.

          <br />
          <br />

          Pero si estamos pidiendo a los demás que se preocupen tanto como
          nosotros por lo que sucede en los vecindarios en los que hemos
          invertido, debemos intentar comunicar la cantidad de vidas que hemos
          tocado y la escala de nuestra ambición.
        
        </p>
        <button class="donar__button1">donar</button>
      </div>

      <div class="donar__grid2">
        <div class="donar__grid2--margin">
          <img style="width: 95%" src="../../assets/img/donar__img.jpg" alt="" width="100px" />
          <h1 class="donar__h1">
            MÁS DE 7000 ZAPATILLAS DISTRIBUIDAS A JÓVENES EN TODO EL MUNDO
          </h1>
        </div>

        <div class="donar__grid2--margin">
          <img style="width: 95%" src="../../assets/img/donar__img1.jpg" alt="" width="100px" />
          <h1 class="donar__h1">MÁS DE 100 PROGRAMAS... Y CONTANDO</h1>
        </div>

        <div class="donar__grid2--margin">
          <img style="width: 95%" src="../../assets/img/donar__img2.jpg" alt="" width="100px" />
          <h1 class="donar__h1">40 CIUDADES IMPACTADAS POR LA PROGRAMACIÓN</h1>
        </div>

        <div class="donar__grid2--margin">
          <img style="width: 95%" src="../../assets/img/donar__img3.jpg" alt="" width="100px" />
          <h1 class="donar__h1">MÁS DE 20 000 JÓVENES AFECTADOS HASTA LA FECHA</h1>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
//import Hijo from './Eventos.vue';

export default {
  name: "DonarComponent",
  data() {
    return {
      titulo: "Comunicación entre componentes",
    };
  },
  // components: {
  //   Hijo,
  // },
  methods: {
    manejarMensaje(mensaje) {
      console.log("Mensaje recibido en el componente padre:", mensaje);
    },
  },
};
</script>
