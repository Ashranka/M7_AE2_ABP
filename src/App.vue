<template>
  <div id="app">
    <!-- Header con navegación -->
    <HeaderNav :sections="sections" @navigate="scrollToSection" />

    <!-- Hero Section -->
    <section id="inicio" class="hero">
      <div class="container">
        <h1 class="hero-title">Mi Portafolio</h1>
        <p class="hero-subtitle">Desarrollador | Proyectos | Backend + Fullstack | Soluciones de software limpio</p>
      </div>
    </section>

    <!-- Sección de Proyectos -->
    <section id="proyectos" class="projects-section">
      <div class="container">
        <h2 class="section-title">Proyectos</h2>
        <div class="projects-grid">
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
    </section>

    <!-- Sección de Contacto -->
    <section id="contacto" class="contact-section">
      <div class="container">
        <h2 class="section-title">Contacto</h2>
        <ContactForm @submit="handleContactSubmit" />
        <ContactInfo :info="contactInfo" />
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 Mi Portafolio. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeaderNav from './components/HeaderNav.vue'
import ProjectCard from './components/ProjectCard.vue'
import ContactForm from './components/ContactForm.vue'
import ContactInfo from './components/ContactInfo.vue'

// Datos de navegación
const sections = ref(['inicio', 'proyectos', 'contacto'])

// Datos de proyectos
const projects = ref([
  {
    id: 1,
    title: 'Proyecto 1 - App de Gestión de Tareas',
    description: 'Una aplicación sencilla para gestionar tareas diarias con opciones de agregar, completar y eliminar.',
    technologies: ['React', 'TypeScript', 'API REST'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 2,
    title: 'Proyecto 2 - Dashboard de Datos',
    description: 'Dashboard interactivo que muestra gráficos dinámicos obteniendo datos desde APIs.',
    technologies: ['Python', 'FastAPI', 'D3.js'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 3,
    title: 'Proyecto 3 - Landing Page Responsiva',
    description: 'Página promocional diseñada para verse bien en móvil y escritorio, enfocada en captar leads.',
    technologies: ['HTML/CSS', 'Tailwind', 'SEO básico'],
    githubUrl: '#',
    demoUrl: '#'
  }
])

// Información de contacto
const contactInfo = ref({
  email: 'andreshranka@gmail.com',
  linkedin: 'www.linkedin.com/in/ashranka',
  github: 'https://github.com/Ashranka',
  form: 'Formulario de contacto'
})

// Función para navegar a secciones
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Manejo del envío del formulario de contacto
const handleContactSubmit = (formData) => {
  console.log('Datos del formulario:', formData)
  alert(`Gracias ${formData.name}! Tu mensaje ha sido enviado.`)
}
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 120px 20px 80px;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.95;
}

.projects-section,
.contact-section {
  padding: 80px 20px;
}

.projects-section {
  background-color: #f8f9fa;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: auto;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
