<template>
  <div>
    
    <div class="impacto__div">
      <div class="image-container__impacto">
        <img src="../../assets/img/impacto__img3.jpg" alt="Imagen con difuminado" />
      </div>
      <h2 class="image-title__impacto">{{ nombreCompleto }}</h2>

    </div>


    <div style="background-color: black; transform: translateY(-10rem);">
      <div style="display: flex; justify-content: center">
        <p
          style="
            color: white;
            
            width: 63%;
            text-align: justify;
            font-size: 21px;
            margin: 10px;
            padding: 9rem;
          "
        >
          Un nuevo par de zapatos tiene el poder de iniciar conversaciones que
          de otro modo nunca sucederían. Regalar el par adecuado a la persona
          adecuada en el momento adecuado de sus vidas puede ayudar a romper el
          ciclo y evitar que los niños tomen el camino equivocado.

          <br />
          <br />

          En este momento, estos niños están siendo descartados a una edad
          temprana antes de que hayan tenido la oportunidad. Por el precio de un
          par de zapatillas, podemos aumentar la probabilidad de que tengan
          éxito en descubrirse a sí mismos y a las personas que creen en ellos.
        </p>
      </div>
    </div>

    <div style="background-color: white;  transform: translateY(-7rem);">
      <div style="display: flex; justify-content: center">
        <p
          style="
            color: black;
            
            width: 63%;
            text-align: justify;
            font-size: 21px;
            margin: 10px;
            padding: 9rem;
          "
        >
          Una talla de zapato más grande a menudo coincide con salir más tarde,
          encontrar su independencia y, a veces, encontrar problemas. Sin
          excepción, todos los niños desfavorecidos tienen que tomar una
          decisión cuando llegan a la cúspide de la edad adulta.
          <br />
          <br />

          Ya no se hacen ilusiones sobre las opciones limitadas disponibles para
          ellos o la desigualdad sistémica en la sociedad. Incapaces de
          permitirse algo que se siente como esencial para su identidad, algunos
          eligen prescindir de él, y algunos eligen encontrarse donde no hay
          muchas opciones positivas para elegir. Siempre hay un grupo de niños
          lo suficientemente inteligentes como para encontrar la fruta al
          alcance de la mano y tomar lo que el mundo les dice que no pueden
          tener.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImpactoComponent",
  data() {
    return {
      title: "LA ZAPATILLA ES EL MEDIO",
    };
  },
  computed: {
    nombreCompleto() {
      return this.title;
    },
  },
};
</script>
