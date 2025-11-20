<template>
  <article class="project-card">
    <div class="card-content">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>
      
      <div class="technologies">
        <span 
          v-for="tech in project.technologies" 
          :key="tech" 
          class="tech-badge"
        >
          {{ tech }}
        </span>
      </div>

      <div class="card-actions">
        <a 
          :href="project.githubUrl" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn btn-secondary"
        >
          Ver en GitHub.
        </a>
        <a 
          :href="project.demoUrl" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn btn-primary"
        >
          Ver Demo
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.project-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.project-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-badge {
  background-color: #e9ecef;
  color: #495057;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.card-actions {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;
  flex: 1;
}

.btn-primary {
  background-color: #667eea;
  color: white;
}

.btn-primary:hover {
  background-color: #5568d3;
}

.btn-secondary {
  background-color: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-secondary:hover {
  background-color: #667eea;
  color: white;
}
</style>
