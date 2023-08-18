<!-- <template>
    <div>
        <h1>conectar</h1>
    </div>
</template>

<script>
export default {
    name: 'ConectarComponent',
}
</script> -->

<!-- <template>
    <div style="border: 2px solid blue;">
        <h1>Conectar</h1>
      <p>{{ mensaje }}</p>
    </div>
  </template>
  
  <script>
  export default {

    name: 'ConectarComponent',

    props: ['mensaje'],
  };
  </script> -->

<template>
  <div class="conectar">
    <div>
      <span class="conectar__span">
        <h1 class="conectar__h1">conectá <br/> con nosotros.</h1>
      </span>
    </div>

    <div>
      
      <form v-if="showForm" @submit.prevent="submitForm">
        <div class="conectar__grid">

          <label v-for="(option, index) in options" :key="index" class="color-button" >
            <input type="radio" :name="radioGroupName" :value="option.value" v-model="selectedOption" @change="handleRadioChange(option.value)" required>
            {{ option.label }}
          </label>

          <!-- <label class="color-button">
            <input type="radio" name="color" value="color2" required>
            donar
          </label>
          <label class="color-button">
            <input type="radio" name="color" value="color3" required>
            asociaciones
          </label>
          <label class="color-button">
            <input type="radio" name="color" value="color4" required>
            di hola
          </label> -->

        </div>
        <p style="font-size: 15px; font-weight: 700; width: 20%; text-transform: uppercase; margin: 10px" v-if="selectedOption">{{ selectedOptionLabel }}</p>

        <div>
          <textarea class="conectar__coment" name="textarea"
            placeholder="comience a escribir para enviarnos un mensaje"></textarea>
        </div>

        <div class="conectar__info">
          <div>
            <label for="nombre">
              <input class="conectar__nombre" type="text" id="nombre" name="nombre" placeholder="nombre" required /><br />
            </label>
          </div>

          <div>
            <label for="apellido">
              <input class="conectar__nombre" type="text" id="apellido" name="apellido" placeholder="apellido" required /><br />
            </label>
          </div>
        </div>


        <div>
          <label for="email">
          <input class="conectar__email" type="email" id="email" name="email" placeholder="correo electrónico" required /><br />
        </label>
        </div>

        <input class="conectar__enviar" type="submit" value="Enviar" />
      </form>
      <p style="font-size: 20px;padding-top: 10rem; display: flex; justify-content: center; align-items: center;" v-else>¡Gracias por contactarnos! Nos pondremos en contacto con usted en breve.</p>

    </div>
  </div>
</template>

<script>
import { reactive } from "vue"; // "from '@vue/composition-api'" if you are using Vue <2.7
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  name: "ConectarComponent",
  data() {
    return {
      showForm: true,

      selectedOption: null,
      options: [
        { value: "color1", label: "eventos" },
        { value: "color2", label: "donar" },
        { value: "color3", label: "asociaciones" },
        { value: "color4", label: "di hola" }
      ]
    };
  },
  computed: {
    selectedOptionLabel() {
      const selected = this.options.find(option => option.value === this.selectedOption);
      return selected ? selected.label : "";
    },
    radioGroupName() {
      return "colorRadioGroup"; // Cambia esto si es necesario
    }
  },
  methods: {
    submitForm() {
      // Lógica para procesar el envío del formulario (puedes hacer una solicitud a un servidor aquí)
      
      // Después de enviar el formulario, oculta el formulario y muestra el texto
      this.showForm = false;
    },
    handleRadioChange(value) {
      this.selectedOption = value;
    },
  },
  setup() {
    const state = reactive({
      nombre: "",
      apellido: "",
      tipo: "",
      email: "",
      comentario: "",
    });
    const rules = {
      nombre: { required }, // Matches state.firstName
      apellido: { required }, // Matches state.lastName
      email: { required, email }, // Matches state.contact.email
      comentario: { required },
      tipo: { required },
    };

    const v$ = useVuelidate(rules, state);

    return { state, v$ };
  },
};
</script>
