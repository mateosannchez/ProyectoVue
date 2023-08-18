<!-- <template>
    <div>
      <h1>Lista de usuarios:</h1>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ApiComponent',
    data() {
      return {
        users: []
      };
    },
    mounted() {
      // Realizar una petición GET a una API (por ejemplo, JSONPlaceholder)
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          // Asignar los datos de la respuesta al arreglo 'users'
          this.users = response.data;
        })
        .catch(error => {
          console.error('Error al obtener la lista de usuarios:', error);
        });
    }
  };
  </script> -->

<!-- <template>
  <div style="border: 2px solid red;">
      <h1>acerca de</h1>
    <p v-if="mostrarMensaje">{{ mensaje }}</p>
    <input v-model="inputValue" />
    <button @click="guardarDatos">Guardar</button>
    <ul>
      <li v-for="item in lista" :key="item.id">{{ item.nombre }}</li>
    </ul>
  </div>
</template> -->

<!-- <template>

  <div class="button-container">
    <button id="toggleButton"><i style="font-size: 22px;" class="ri-menu-line"></i></button>
    <div class="items-container" id="itemsContainer">
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
</template> -->

<script>
export default {

  name: 'Acerca-deComponent',
  data() {
    return {
      mostrarMensaje: true,
      mensaje: 'Hola, soy un mensaje condicional',
      inputValue: '',
      lista: [
        { id: 1, nombre: 'Elemento 1' },
        { id: 2, nombre: 'Elemento 2' },
        { id: 3, nombre: 'Elemento 3' },
      ],
    };
  },
  methods: {
    guardarDatos() {
      // Lógica para guardar los datos ingresados por el usuario
      if (this.inputValue.trim() !== '') {
        console.log('Valor ingresado:', this.inputValue);
        // Aquí puedes realizar una llamada a una API para guardar los datos en el servidor
        // O actualizar el estado de la aplicación, etc.
      } else {
        console.log('No se ingresó ningún valor.');
      }
    },
  },

};


</script>