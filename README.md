# Portfolio Personal

Portfolio web profesional construido con React, Vite, Tailwind CSS y Framer Motion.

## Características

- Diseño moderno y responsive
- Animaciones suaves con Framer Motion
- Modo oscuro/claro
- Secciones: Hero, Sobre Mí, Experiencia, Proyectos, Skills, Contacto
- Integración con WhatsApp para contacto directo
- Componentes reutilizables con estilos de shadcn/ui
- Código limpio y organizado

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Construir para producción:
```bash
npm run build
```

4. Previsualizar build de producción:
```bash
npm run preview
```

## Personalización

### 1. Actualizar tu información personal

Edita el archivo `src/constants/data.js` con tu información:

- **personalInfo**: Nombre, título, ubicación, email, teléfono, WhatsApp, biografía
- **socialLinks**: GitHub, LinkedIn, Twitter, etc.
- **about**: Descripción sobre ti y tus destacados
- **experience**: Tu experiencia laboral
- **projects**: Tus proyectos destacados
- **skills**: Tus habilidades técnicas con niveles
- **services**: Servicios que ofreces

### 2. Añadir tu foto de perfil

Coloca tu foto en la carpeta `public/` con el nombre `avatar.jpg` o actualiza la ruta en `src/constants/data.js`.

### 3. Añadir imágenes de proyectos

Coloca las imágenes de tus proyectos en `public/projects/` y actualiza las rutas en `src/constants/data.js`.

### 4. Personalizar colores

Los colores están definidos en `src/styles/globals.css`. Puedes modificar las variables CSS para cambiar la paleta de colores:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  /* ... más colores */
}
```

### 5. Configurar WhatsApp

Actualiza tu número de WhatsApp (con código de país) en `src/constants/data.js`:

```javascript
export const personalInfo = {
  // ...
  whatsapp: "+1234567890", // Ejemplo: +52 1 55 1234 5678
};
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── ui/              # Componentes UI base (Button, Card, Badge)
│   ├── sections/        # Secciones del portafolio
│   └── layout/          # Componentes de layout (Header, Footer)
├── constants/           # Datos y constantes
├── lib/                 # Utilidades
├── styles/              # Estilos globales
└── App.jsx              # Componente principal
```

## Tecnologías

- **React 18** - Biblioteca UI
- **Vite** - Build tool
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos
- **shadcn/ui inspired** - Componentes UI

## Deploy

### Vercel (Recomendado)

1. Crea una cuenta en [Vercel](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente Vite y configurará el build

### Netlify

1. Crea una cuenta en [Netlify](https://netlify.com)
2. Conecta tu repositorio
3. Configuración de build:
   - Build command: `npm run build`
   - Publish directory: `dist`

### GitHub Pages

1. Instala gh-pages:
```bash
npm install -D gh-pages
```

2. Añade scripts en `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Actualiza `vite.config.js`:
```javascript
export default defineConfig({
  base: '/tu-repositorio/',
  // ...
})
```

4. Ejecuta:
```bash
npm run deploy
```

## Mejoras Futuras

- [ ] Añadir formulario de contacto con backend
- [ ] Integrar blog con markdown
- [ ] Añadir analytics
- [ ] Implementar PWA
- [ ] Añadir tests unitarios
- [ ] Implementar i18n (internacionalización)

## Licencia

MIT License - Siéntete libre de usar este template para tu propio portafolio.

---

Hecho con ❤️ usando React y Tailwind CSS
