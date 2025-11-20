<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="logo">Portafolio</div>
        <ul class="nav-list">
          <li v-for="section in sections" :key="section" class="nav-item">
            <a 
              href="#" 
              @click.prevent="$emit('navigate', section)"
              class="nav-link"
            >
              {{ formatSectionName(section) }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
defineProps({
  sections: {
    type: Array,
    required: true
  }
})

defineEmits(['navigate'])

// Función para formatear el nombre de la sección
const formatSectionName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1)
}
</script>

<style scoped>
.header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
}

.nav-list {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #667eea;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-list {
    gap: 1rem;
  }
}
</style>
