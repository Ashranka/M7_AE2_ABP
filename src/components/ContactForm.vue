<template>
  <form @submit.prevent="handleSubmit" class="contact-form">
    <div class="form-group">
      <label for="name" class="form-label">Nombre</label>
      <input
        id="name"
        v-model="formData.name"
        type="text"
        class="form-input"
        placeholder="Tu nombre"
        required
      />
      <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
    </div>

    <div class="form-group">
      <label for="email" class="form-label">Email</label>
      <input
        id="email"
        v-model="formData.email"
        type="email"
        class="form-input"
        placeholder="tu@email.com"
        required
      />
      <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
    </div>

    <div class="form-group">
      <label for="message" class="form-label">Mensaje</label>
      <textarea
        id="message"
        v-model="formData.message"
        class="form-textarea"
        rows="5"
        placeholder="Escribe tu mensaje aquí..."
        required
      ></textarea>
      <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
    </div>

    <button type="submit" class="btn btn-submit">
      Enviar Mensaje
    </button>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'

const emit = defineEmits(['submit'])

// Estado del formulario
const formData = reactive({
  name: '',
  email: '',
  message: ''
})

// Errores de validación
const errors = reactive({
  name: '',
  email: '',
  message: ''
})

// Función de validación
const validateForm = () => {
  let isValid = true
  
  // Reset errores
  errors.name = ''
  errors.email = ''
  errors.message = ''

  // Validar nombre
  if (formData.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres'
    isValid = false
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.email)) {
    errors.email = 'Ingresa un email válido'
    isValid = false
  }

  // Validar mensaje
  if (formData.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres'
    isValid = false
  }

  return isValid
}

// Manejo del envío del formulario
const handleSubmit = () => {
  if (validateForm()) {
    emit('submit', { ...formData })
    
    // Resetear formulario
    formData.name = ''
    formData.email = ''
    formData.message = ''
  }
}
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto 3rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #667eea;
}

.form-textarea {
  resize: vertical;
  font-family: inherit;
}

.error-message {
  display: block;
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.btn-submit {
  width: 100%;
  padding: 1rem;
  background-color: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #5568d3;
}
</style>
