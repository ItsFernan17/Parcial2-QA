# 🌟 IV SERIE – Entorno de Desarrollo (Integración de Funcionalidades)

**Universidad Mariano Gálvez de Guatemala – Campus Huehuetenango**  
**Curso:** Aseguramiento de la Calidad de Software 2025  

Este repositorio en su rama **dev** contiene la **unión de todas las funcionalidades** del proyecto IV SERIE.  
Aquí se integran las aportaciones de cada integrante, sus **interfaces**, **implementaciones**, **pruebas unitarias** y la **prueba de integración** final, verificando la compatibilidad y calidad de todos los componentes.

---

## 🎯 Objetivo del entorno de desarrollo

- Reunir en un solo lugar todas las funcionalidades individuales desarrolladas por el equipo.
- Garantizar que las **interfaces** y **servicios** de cada módulo funcionen correctamente entre sí.
- Ejecutar las **pruebas unitarias** de cada componente y la **prueba de integración** general.
- Servir de base para futuras mejoras y despliegues.

---

## 🧩 Contenido

- **Entidades**: modelos de dominio comunes a todo el proyecto (p. ej., `Libro`, `Autor`).
- **Interfaces**: contratos estandarizados para repositorios y servicios.
- **Servicios**: implementaciones reales y en memoria de cada módulo.
- **Pruebas**: suite completa de pruebas unitarias e integración.

---

## 🧪 Estructura de Pruebas

### 📋 Pruebas Unitarias

#### **Gestión de Libros** (Fernando Rivas <frivasm@miumg.edu.gt>)
- `GestorLibros.agregarYObtener.Test.ts`: Verifica agregar y obtener libros individuales
- `GestorLibros.listar.Test.ts`: Verifica listar todos los libros

#### **Gestión de Autores** (Erick Alcon <ealconv@miumg.edu.gt>)
- `GestorAutores.agregarYObtener.Test.ts`: Verifica agregar y obtener autores individuales
- `GestorAutores.listar.Test.ts`: Verifica listar todos los autores

#### **Servicio Combinado** (Fernando Rivas y Erick Alcon <Grupo 404>)
- `GestorBiblioteca.agregarLibroConAutor.Test.ts`: Pruebas unitarias del método `crearLibroConAutor`
- `GestorBiblioteca.obtenerLibrosConAutores.Test.ts`: Pruebas unitarias del método `obtenerLibrosConAutores`

### 🔗 Pruebas de Integración

#### **Integración Básica** (Fernando Rivas y Erick Alcon <Grupo 404>)
- `Integracion.LibrosYAutores.Test.ts`: Verifica la relación directa entre libros y autores usando servicios individuales

#### **Integración Completa** (Fernando Rivas y Erick Alcon <Grupo 404>)
- `Integracion.Biblioteca.Test.ts`: Verifica flujos completos usando el servicio combinado `GestorBibliotecaServicio`

---

## 🎯 Propósito de las Pruebas

### **Pruebas Unitarias**
- **Aislamiento**: Cada prueba verifica una funcionalidad específica sin dependencias externas
- **Cobertura**: Garantizan que cada método funciona correctamente en aislamiento
- **Rapidez**: Se ejecutan rápidamente para feedback inmediato durante desarrollo

### **Pruebas de Integración**
- **Interacción**: Verifican que los diferentes módulos trabajen juntos correctamente
- **Flujos completos**: Simulan escenarios reales de uso del sistema
- **Integridad referencial**: Aseguran que las relaciones entre entidades se mantengan
- **Consistencia**: Validan que los datos sean consistentes a través de diferentes operaciones

### **Estrategia de Testing**
- **TDD Approach**: Las pruebas se escribieron siguiendo el enfoque de desarrollo guiado por pruebas
- **Cobertura completa**: Se prueban casos positivos, negativos y casos límite
- **Mocks/Stubs**: No se utilizan ya que trabajamos con implementaciones en memoria
- **Jest Framework**: Utilizamos Jest por su integración nativa con TypeScript y features avanzadas

---

## 📊 Resultados de Pruebas

```bash
Test Suites: 8 passed, 8 total
Tests:       18 passed, 18 total
Snapshots:   0 total
Time:        3.5s
```

**Interpretación:**
- ✅ **8 suites de prueba**: Cubren todos los módulos del sistema
- ✅ **18 tests individuales**: Verifican funcionalidades específicas y casos de integración
- ✅ **100% de éxito**: Todos los tests pasan consistentemente
- ✅ **Tiempo óptimo**: ~3.5 segundos para ejecución completa

---

## 📦 Requisitos

- Node.js 18+  
- npm  
- (Incluye dependencias para TypeScript y Jest en `package.json`)

---

## ▶️ Cómo usar este entorno

1. Clonar el repositorio (rama `dev`):
   ```bash
   git clone -b dev <URL-DE-TU-REPO>
   cd biblioteca-ts
