<template>
  <div class="contact-info">
    <h3 class="info-title">Información de Contacto</h3>
    <div class="info-grid">
      <div class="info-item">
        <span class="info-icon">✉️</span>
        <div class="info-content">
          <strong>Email:</strong>
          <a :href="`mailto:${info.email}`">{{ info.email }}</a>
        </div>
      </div>

      <div class="info-item">
        <span class="info-icon">💼</span>
        <div class="info-content">
          <strong>LinkedIn:</strong>
          <a :href="`https://${info.linkedin}`" target="_blank" rel="noopener noreferrer">
            {{ info.linkedin }}
          </a>
        </div>
      </div>

      <div class="info-item">
        <span class="info-icon">🐙</span>
        <div class="info-content">
          <strong>GitHub:</strong>
          <a :href="`https://${info.github}`" target="_blank" rel="noopener noreferrer">
            {{ info.github }}
          </a>
        </div>
      </div>

      <div class="info-item">
        <span class="info-icon">📝</span>
        <div class="info-content">
          <strong>Formulario:</strong>
          <span>{{ info.form }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  info: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.contact-info {
  max-width: 800px;
  margin: 0 auto;
}

.info-title {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info-icon {
  font-size: 2rem;
}

.info-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-content strong {
  color: #333;
  font-weight: 600;
}

.info-content a {
  color: #667eea;
  text-decoration: none;
  word-break: break-all;
}

.info-content a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
