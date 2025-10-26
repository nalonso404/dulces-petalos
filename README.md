# 🌸 Dulces Pétalos

Aplicación desarrollada con **Next.js 16 (App Router)** y **styled-components**, que muestra un catálogo de productos florales consumiendo una API externa (headless e-commerce).

---

## 🚀 Scripts

| Comando | Descripción |
|----------|--------------|
| `yarn dev` | Inicia el servidor de desarrollo en `http://localhost:3000` |
| `yarn build` | Crea una build optimizada para producción (usa ISR y SSG) |
| `yarn start` | Inicia el servidor con la build generada |
| `yarn lint` | Ejecuta ESLint para comprobar el código |
| `yarn test` | Lanza los tests con Jest y Testing Library |

---

## ⚙️ Variables de entorno

Crea un archivo `.env.local` (puedes basarte en el ejemplo `.env.local.example` incluido):

```bash
# BASE
NEXT_PUBLIC_LOCALE='es'
NEXT_PUBLIC_VERCEL_ENV='development'
NEXT_PUBLIC_PROJECT_HOSTNAME='dulces-petalos.jakala.es'
NEXT_PUBLIC_CLIENT_NAME='Dulces Pétalos'

# API
JAKALA_API_VERSION='v1'
JAKALA_API='https://dulces-petalos.jakala.es/api/v1'


# 🌸 Floristería Dulces Pétalos

Aplicación web desarrollada en **React** para mostrar el catálogo de productos de la floristería **Dulces Pétalos**.  
El proyecto tiene como objetivo practicar el desarrollo de una SPA con consumo de API, navegación entre vistas y filtrado dinámico.

---

## 🪴 Introducción

Esta aplicación muestra el catálogo de flores y plantas de **Dulces Pétalos**, permitiendo al usuario:

- Visualizar el listado de productos disponibles.
- Consultar los detalles de cada producto.
- Filtrar productos en tiempo real mediante un buscador.

El proyecto se desarrollará con **React**, pudiendo utilizar librerías adicionales según sea necesario.  
La entrega se realizará en un **repositorio público de GitHub**.

> 💡 Este ejercicio no es un examen. Lo más importante es el proceso y la conversación técnica posterior.

---

## 🧭 Estructura de vistas

### 1. Listado de productos

- Muestra todos los productos obtenidos del endpoint `GET /api/v1/product`.
- Permite filtrar los resultados por texto (nombre o nombre científico).
- Al seleccionar un producto, se navega a su vista de detalle.
- Disposición responsive:
  - Máximo **3 productos por fila**.
  - Se adapta automáticamente al tamaño de pantalla.

### 2. Detalle de producto

- Muestra la información detallada de un producto obtenido mediante `GET /api/v1/product/:id`.
- Incluye botón o enlace para **volver atrás** a la vista de listado.

---

## 🧩 Componentes principales

### 🏠 Cabecera
- Muestra el **logo de la floristería**, que funciona como enlace al *home*.

### 🔍 Buscador
- Permite introducir una cadena de texto.
- Filtra productos **en tiempo real**, comparando:
  - `nombre`
  - `nombre científico`

### 💐 Tarjeta de producto
- Muestra la información básica de un producto:
  - Imagen
  - Nombre
  - Nombre científico
  - Precio
- Al hacer clic, lleva al detalle del producto.

### 🧭 Breadcrumbs
- Muestra el camino de navegación actual.
- Incluye siempre el enlace **Inicio** para volver al home.

### 🖼️ Imagen del producto
- Muestra la fotografía del producto en la vista de detalle.

### 🪻 Descripción del producto
- Presenta la información completa:
  - Nombre
  - Nombre científico
  - Precio
  - Riegos por semana
  - Fertilizante recomendado

---

## 🌐 API

Base URL:  https://dulces-petalos.jakala.es/


### Endpoints disponibles:

| Descripción | Método | Endpoint |
|--------------|---------|----------|
| Listado de productos | `GET` | `/api/v1/product` |
| Detalle de producto  | `GET` | `/api/v1/product/:id` |

Ejemplo:
```bash
GET https://dulces-petalos.jakala.es/api/v1/product/1

