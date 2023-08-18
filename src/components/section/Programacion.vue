<template>
  <div>
    <div>
      <div class="programm__flex">
        <h1 class="programm__h1">
          {{ textoMayusculas }}
        </h1>

        <p class="programm__p">
          Desde organizar torneos de baloncesto en comunidades que nunca han
          visto uno antes hasta inspirar a los niños a unirse a clubes de
          corredores cuando nunca se han puesto los cordones de las zapatillas
          para correr: organizamos experiencias educativas no tradicionales.
        </p>
      </div>

      <div class="two-column-layout">
        <div class="category-column">
          <ul>
            <li class="programm__li" @click="selectCategory('educacion')">
              Educación
            </li>
            <li class="programm__li" @click="selectCategory('deportes')">
              Deportes
            </li>
            <li class="programm__li" @click="selectCategory('arte')">Arte</li>
          </ul>
        </div>


        <div class="courses-column">
          <ul class="courses-ul">
            <li v-for="course in courses" :key="course.id" :class="{
              'highlighted-course': isSelectedCourse(course),
              course: true,
            }">
              <span>{{ course.name }}</span>
              <button class="programm__button">
                {{ course.category }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramacionComponent",
  data() {
    return {
      selectedCategory: "Educación",
      courses: [
        { id: 1, name: "atletas", category: "educacion" },
        { id: 2, name: "escuela de helados", category: "educacion" },
        { id: 3, name: "jóvenes embajadores", category: "educacion" },
        { id: 4, name: "tenis", category: "deportes" },
        { id: 5, name: "club de carreras", category: "deportes" },
        { id: 6, name: "fútbol", category: "deportes" },
        { id: 7, name: "atletismo", category: "deportes" },
        { id: 8, name: "baloncesto", category: "deportes" },
        { id: 9, name: "excursiones artísticas", category: "arte" },
        { id: 10, name: "campamento de diseño", category: "arte" },
        { id: 11, name: "cerámica", category: "arte" },
      ],
      texto: "ENSEÑANDO NIÑOS CÓMO A REFORMULAR EL NARRATIVO.",
    };
  },
  computed: {
    filteredCourses() {
      return this.courses.filter(
        (course) => course.category === this.selectedCategory
      );
    },
    textoMayusculas() {
      return this.texto.toUpperCase();
    },
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
    isSelectedCourse(course) {
      return course.category === this.selectedCategory;
    },
  },
};
</script>
