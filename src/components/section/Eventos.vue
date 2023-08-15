<!-- <template>
    <div style="border: 2px solid violet;">
        <h1>eventos</h1>
    </div>
</template>

<script>
export default {
    name: 'EventosComponent',
}
</script> -->

<template>
  <div>
    <div>
      <div class="eventos">
        <p class="eventos__p">
          Desde 2016, hemos tenido la misión de alentar a los niños a pensar más
          allá de su experiencia vivida. Las zapatillas que recolectamos y
          distribuimos han facilitado cientos de activaciones en nuestros más de
          6 años de impacto. Nuestros primeros años sirven como base para
          nuestros programas y eventos actuales. Para entender verdaderamente
          cómo estamos aquí hoy, es importante que compartamos lo que hemos
          construido a lo largo de los años.

          <br />
          <br />

          Desde el principio, ya medida que avanzamos, la documentación siempre
          será un gran componente de lo que hacemos porque queremos que los
          jóvenes se destaquen por lo que son. Las zapatillas los atraen, la
          comunidad es la razón por la que se quedan.
        </p>
      </div>
    </div>

    <div class="eventos__grid">

      <div class="eventos__grid--block">
        <div>
          <img class="eventos__img"
            src="../../assets/img/evento__img.jpg"
            alt=""
          />
        </div>

        <h5 class="eventos__h5">
          12.07.2023
        </h5>

        <h2 class="eventos__h2">
          jamaica
        </h2>

        <p class="eventos__p">
          Para cerrar el año, tuvimos la oportunidad de visitar Jamaica y
          retribuir a un nivel muy personal.
        </p>

        <button class="evento__button">APRENDE MÁS</button>
      </div>

      <div class="eventos__grid--block">
        <div>
          <img
            class="eventos__img"
            src="../../assets/img/evento__img1.jpg"
            alt=""
          />
        </div>

        <h5 class="eventos__h5">
          11.07.2023
        </h5>

        <h2 class="eventos__h2">
          fondo de justicia
        </h2>

        <p class="eventos__p">
          Gracias a Justice Fund por crear el Campamento Tims Hortons. Los niños
          aprendieron mucho sobre el aire libre pero, lo que es más importante,
          sobre sí mismos.
        </p>

        <button class="evento__button">APRENDE MÁS</button>
      </div>

      <div class="eventos__grid--block">
        <div >
          <img
            class="eventos__img"
            src="../../assets/img/evento__img2.jpg"
            alt=""
          />
        </div>

        <h5 class="eventos__h5">
          09.10.2023
        </h5>

        <h2 class="eventos__h2">
          empringham
        </h2>

        <p class="eventos__p">
          Los jóvenes de Empringham ejemplifican la resiliencia, el amor y el
          respeto. Aunque han sufrido pérdidas, esta comunidad genuina se
          mantiene unida. Empringham representa a la familia.
        </p>

        <button class="evento__button">APRENDE MÁS</button>
      </div>
    </div>

    <div class="eventos__grid2">
      <div class="eventos__img1">
        <img
          style="width: 100%"
          src="../../assets/img/evento__img3.jpg"
          alt=""
        />
      </div>

      <div class="eventos__flex">
        <h5 class="eventos__h5">
          10.07.2023
        </h5>

        <h2 class="eventos__h2">
          londres
        </h2>

        <p class="eventos__p">
          Estamos orgullosos de decir que llegamos a Londres. Pudimos
          conectarnos con jóvenes en el transcurso de una semana y construir
          conexiones especiales que continuaremos desarrollando en los próximos
          años.
        </p>

        <button class="evento__button">APRENDE MÁS</button>
      </div>
    </div>

    <div class="eventos__grid">
      <div class="eventos__grid--block">
        <div>
          <img
            class="eventos__img"
            src="../../assets/img/evento__img4.jpg"
            alt=""
          />
        </div>

        <h5 class="eventos__h5">
          08.06.2023
        </h5>

        <h2 class="eventos__h2">
          cancha de contragolpes - moss park
        </h2>

        <p class="eventos__p">
          Trabajando con Puma durante cinco años, lo que comenzó como un torneo
          anual ahora existe como un itinerario centrado en el impacto durante
          todo el verano.
        </p>

        <button class="evento__button">APRENDE MÁS</button>
      </div>

      <div class="eventos__grid--block">
        <div>
          <img
            class="eventos__img"
            src="../../assets/img/evento__img5.jpg"
            alt=""
          />
        </div>

        <h5 class="eventos__h5">
          22.07.2023
        </h5>

        <h2 class="eventos__h2">
          estudiantes
        </h2>

        <p class="eventos__p">
        La graduación de la escuela secundaria es la transición no tan sutil de la niñez a la adultez joven.
        </p>

        <button class="evento__button">APRENDE MÁS</button>
      </div>

      <div class="eventos__grid--block">
        <div>
          <img
            class="eventos__img"
            src="../../assets/img/evento__img6.jpg"
            alt=""
          />
        </div>

        <h5 class="eventos__h5">
          26.03.2023
        </h5>

        <h2 class="eventos__h2">
          día de air max
        </h2>

        <p class="eventos__p">
        Para Air Max Day 2022, Livestock Canada nos dio la oportunidad de destacar a los jóvenes que redefinen el modelo.
      </p>

        <button class="evento__button">APRENDE MÁS</button>
      </div>
    </div>
    <!-- <h1>Eventos</h1>
      <button @click="enviarMensaje">Enviar Mensaje</button> -->
  </div>
</template>

<script>
export default {
  name: "EventosComponent",
  // methods: {
  //   enviarMensaje() {
  //     this.$emit('mensajeEnviado', 'Hola desde el componente hijo');
  //   },
  // },
};
</script>
