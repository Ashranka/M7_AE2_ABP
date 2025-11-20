# Portafolio Personal - Vue 3 + Vite

## Descripción

Portafolio personal desarrollado con Vue 3 (Composition API) y Vite como parte del proyecto final del curso. Esta aplicación web muestra proyectos personales, información de contacto y está optimizada para ser responsiva en todos los dispositivos.

## Tecnologías Utilizadas

- **Vue 3** - Framework JavaScript progresivo
- **Vite** - Build tool y servidor de desarrollo
- **Composition API** - Sistema de composición de Vue 3
- **JavaScript ES6+** - Lenguaje de programación
- **CSS3** - Estilos y diseño responsivo

## Estructura del Proyecto

```
portafolio-personal/
├── public/              # Archivos públicos estáticos
├── src/
│   ├── assets/          # Archivos de recursos (CSS, imágenes)
│   │   └── styles.css   # Estilos globales
│   ├── components/      # Componentes Vue reutilizables
│   │   ├── HeaderNav.vue      # Componente de navegación
│   │   ├── ProjectCard.vue    # Tarjeta de proyecto
│   │   ├── ContactForm.vue    # Formulario de contacto
│   │   └── ContactInfo.vue    # Información de contacto
│   ├── App.vue          # Componente principal
│   └── main.js          # Punto de entrada de la aplicación
├── index.html           # HTML principal
├── package.json         # Dependencias y scripts
├── vite.config.js       # Configuración de Vite
└── README.md            # Este archivo
```

## Funcionalidades Implementadas

###  Funcionalidades Completadas

1. **Navegación Fluida**
   - Header fijo con navegación suave entre secciones
   - Enlaces que desplazan la vista automáticamente

2. **Sección de Proyectos**
   - Grid responsivo que muestra tarjetas de proyectos
   - Información detallada: título, descripción, tecnologías
   - Enlaces a GitHub y demos en vivo

3. **Formulario de Contacto**
   - Validación de campos en tiempo real
   - Campos requeridos: nombre, email y mensaje
   - Mensajes de error informativos
   - Limpieza automática tras el envío

4. **Información de Contacto**
   - Visualización de email, LinkedIn y GitHub
   - Enlaces externos funcionales
   - Diseño con iconos visuales

5. **Diseño Responsivo**
   - Adaptable a móviles, tablets y escritorio
   - Grid flexible que se reorganiza según el tamaño de pantalla
   - Navegación optimizada para dispositivos móviles

### Áreas de Mejora Identificadas

1. **Funcionalidad Backend**
   - El formulario actualmente solo muestra una alerta
   - Necesita integración con servicio de email real (EmailJS, Formspree)

2. **Animaciones**
   - Podría mejorar con animaciones al hacer scroll
   - Transiciones más elaboradas entre secciones

3. **SEO y Accesibilidad**
   - Agregar meta tags más completos
   - Mejorar atributos ARIA para lectores de pantalla
   - Implementar sitemap.xml

4. **Gestión de Estado**
   - Para proyectos más grandes, implementar Pinia/Vuex
   - Centralizar el manejo de datos de proyectos

## 🛠Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio o descarga los archivos

2. Instala las dependencias:
```bash
npm install
```

### Comandos Disponibles

```bash
# Iniciar servidor de desarrollo (http://localhost:3000)
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```

##  Uso de la Aplicación

1. **Navegación**: Usa el menú superior para moverte entre secciones
2. **Ver Proyectos**: Explora los proyectos en la sección de portafolio
3. **Contactar**: Completa el formulario en la sección de contacto

##  Reflexión Personal

### Experiencia de Desarrollo

Durante el desarrollo de este proyecto, he consolidado conocimientos importantes sobre Vue 3 y la Composition API. Los principales aprendizajes incluyen:

1. **Composition API**: Aprendí a estructurar mejor el código usando `ref`, `reactive` y la función `setup`, lo cual hace el código más mantenible y legible.

2. **Componentización**: La separación en componentes reutilizables facilita enormemente el mantenimiento y la escalabilidad del proyecto.

3. **Validación de Formularios**: Implementar validación reactiva me ayudó a comprender mejor el flujo de datos en Vue.

4. **Diseño Responsivo**: Práctica valiosa en CSS Grid y Flexbox para crear interfaces que funcionan en cualquier dispositivo.

### Desafíos Enfrentados

- **Validación de Formulario**: Tomar decisiones sobre cuándo y cómo mostrar errores de validación de forma que no moleste al usuario.
- **Estructura de Componentes**: Decidir qué nivel de granularidad usar al crear componentes.
- **Estilos Responsivos**: Lograr un diseño que se vea bien en todos los tamaños de pantalla requirió varias iteraciones.

### Próximos Pasos

- Integrar un servicio real de envío de emails
- Agregar más proyectos con datos dinámicos desde un API
- Implementar modo oscuro
- Agregar tests unitarios con Vitest
- Mejorar la accesibilidad general
