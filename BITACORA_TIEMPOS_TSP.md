# Bitácora de Registro de Tiempos TSP (Time Recording Log)
## Proyecto: Catálogo Virtual TechStore · Subgrupo B05
### Tutora: Diana Angélica Cruz Ortega

En la metodología TSP/PSP (Team Software Process / Personal Software Process), cada integrante registra de forma disciplinada el tiempo invertido en cada fase de ingeniería. Este registro permite comparar **tiempo estimado vs. tiempo real**, fundamentar el balance de carga y respaldar la **Entrega 2 (Escenario 5)**.

---

### 📌 Fases Metodológicas TSP:
- **PLAN:** Planificación, estimación, balance de carga y elaboración de calendarios.
- **REQ:** Análisis y especificación técnica de requisitos y criterios de aceptación.
- **DES:** Diseño de interfaz (UI), arquitectura y modelado de datos en JSON.
- **CODE:** Programación y codificación de componentes del catálogo virtual.
- **REV:** Revisiones de código por pares (Peer Code Review) e inspecciones en Pull Requests.
- **TEST:** Pruebas unitarias, de límites y de integración del sistema.
- **POST:** Análisis postmortem, actas de cierre y lecciones aprendidas.

---

## 📊 Consolidado de Horas Reales por Integrante (Semanas 1 a 5)

| Integrante | Rol TSP | PLAN (h) | REQ (h) | DES (h) | CODE (h) | REV (h) | TEST (h) | Total Horas Reales (h) | Horas Disponibles (S1-S5) |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **GLORIA LUCIA OSSA GARCIA** | Líder de Equipo | 16.0 | 4.0 | 2.0 | 6.0 | 2.5 | 5.5 | **36.0 h** | 54.0 h |
| **HAIDER MAURICIO BOTIA GÓMEZ** | Calidad y Proceso | 5.0 | 2.0 | 2.0 | 3.0 | 9.0 | 5.0 | **26.0 h** | 26.0 h |
| **KAROL TATIANA ESPINOSA MANTILLA** | Gerente de Planeación | 12.0 | 3.0 | 2.0 | 8.0 | 2.0 | 3.0 | **30.0 h** | 30.0 h |
| **DIEGO RAMOS PEÑA** | Gerente de Desarrollo | 4.0 | 2.0 | 12.0 | 12.0 | 2.0 | 4.0 | **36.0 h** | 26.0 h |
| **JOAN SEBASTIAN MORALES PÉREZ** | Gerente de Soporte | 8.0 | 2.0 | 3.0 | 10.0 | 2.0 | 3.0 | **28.0 h** | 46.0 h |
| **TOTAL EQUIPO B05** | — | **45.0 h** | **13.0 h** | **21.0 h** | **39.0 h** | **17.5 h** | **20.5 h** | **156.0 h** | **182.0 h** |

> **Nota metodológica:** Con 156.0 horas reales invertidas frente a 182.0 horas disponibles en las semanas 1 a 5, el equipo mantiene un **margen de reserva positivo de 26.0 horas** en esta etapa, demostrando un ritmo sostenible sin sobrecargas y con capacidad de amortiguar las pruebas de integración final.

---

## 📝 Registro Detallado de Tiempos del Equipo (Log de Sesiones)

| Fecha | Integrante | Rol TSP | Fase | Inicio | Fin | Tiempo (Min) | Tarea / Descripción de la Actividad | Commit / PR / Evidencia |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- | :--- |
| **28/10/2026** | Gloria Ossa | Líder | PLAN | 19:00 | 20:30 | 90 | Conducción Reunión de Lanzamiento N.° 01, acuerdos de equipo y roles TSP | Acta N.° 01 |
| **28/10/2026** | Haider Botia | Calidad | PLAN | 19:00 | 20:30 | 90 | Registro del Acta N.° 01 y acuerdos de calidad de comunicación | Acta N.° 01 |
| **28/10/2026** | Karol Espinosa | Planeación | PLAN | 19:00 | 20:30 | 90 | Registro de disponibilidades y matriz de restricciones horarias | Acta N.° 01 |
| **28/10/2026** | Diego Ramos | Desarrollo | PLAN | 19:00 | 20:30 | 90 | Acuerdos de arquitectura técnica y roles de desarrollo | Acta N.° 01 |
| **28/10/2026** | Joan Morales | Soporte | PLAN | 19:00 | 20:30 | 90 | Planificación de entorno Git y ramas de trabajo en GitHub | Acta N.° 01 |
| **31/10/2026** | Joan Morales | Soporte | PLAN | 15:00 | 17:30 | 150 | Creación de repositorio en GitHub, protección de rama main y ramas de trabajo | Commit `1b82d71` |
| **02/11/2026** | Gloria Ossa | Líder | REQ | 18:00 | 20:00 | 120 | Especificación de los 7 módulos del catálogo según enunciado oficial | Doc E1 / Requisitos |
| **03/11/2026** | Diego Ramos | Desarrollo | DES | 17:00 | 20:00 | 180 | Modelado de datos JSON (esquema de 20 artículos: código, precio, stock, imagen) | `data/products.json` |
| **04/11/2026** | Haider Botia | Calidad | REV | 18:00 | 19:30 | 90 | Inspección de integridad y tipos de datos del catálogo JSON (T06) | Validación JSON |
| **05/11/2026** | Diego Ramos | Desarrollo | DES | 16:00 | 19:30 | 210 | Maquetación responsiva CSS Grid y Flexbox de tarjetas de productos (T07) | `styles.css` |
| **06/11/2026** | Karol Espinosa | Planeación | PLAN | 17:00 | 20:30 | 210 | Descomposición de tareas WBS y asignación de responsables iniciales (T03) | Plan de Trabajo V1.0 |
| **07/11/2026** | Gloria Ossa | Líder | PLAN | 18:00 | 21:00 | 180 | Consolidación y revisión final del documento oficial TSP_E1_SG05.pdf | Entrega 1 Campus |
| **11/11/2026** | Gloria Ossa | Líder | PLAN | 19:00 | 20:00 | 60 | Conducción Reunión N.° 02: evaluación de retroalimentación de la tutora | Acta N.° 02 |
| **11/11/2026** | Haider Botia | Calidad | PLAN | 19:00 | 20:00 | 60 | Registro del Acta N.° 02 y definición de listas de chequeo de Code Review | Acta N.° 02 |
| **11/11/2026** | Karol Espinosa | Planeación | PLAN | 19:00 | 20:00 | 60 | Presentación de WBS ajustado V2.0 (24 tareas, revisiones y Semana 6) | Acta N.° 02 |
| **11/11/2026** | Diego Ramos | Desarrollo | PLAN | 19:00 | 20:00 | 60 | Compromisos de codificación de búsqueda básica y avanzada | Acta N.° 02 |
| **11/11/2026** | Joan Morales | Soporte | PLAN | 19:00 | 20:00 | 60 | Apertura de ramas `feature/busqueda` y `feature/carrito` | GitHub Branches |
| **12/11/2026** | Diego Ramos | Desarrollo | CODE | 17:00 | 20:30 | 210 | Implementación de la función reactiva de búsqueda básica por texto (T08) | `app.js` (search) |
| **13/11/2026** | Haider Botia | Calidad | REV | 18:00 | 19:45 | 105 | Revisión por pares de la búsqueda básica en Pull Request (T09) | PR #2 en GitHub |
| **14/11/2026** | Diego Ramos | Desarrollo | TEST | 16:00 | 18:30 | 150 | Pruebas de límites del buscador (caracteres especiales, acentos, sin stock) (T10) | Matriz de pruebas |
| **14/11/2026** | Karol Espinosa | Planeación | CODE | 14:00 | 18:00 | 240 | Programación de filtros avanzados por categoría y rango de precio dinámico (T11)| `app.js` (filters) |
| **15/11/2026** | Haider Botia | Calidad | REV | 15:00 | 17:00 | 120 | Inspección de código de filtros avanzados y manejo de eventos DOM (T12) | PR #3 en GitHub |
| **16/11/2026** | Joan Morales | Soporte | CODE | 16:00 | 20:30 | 270 | Programación del panel de carrito de compras, cálculo de subtotales y total (T14) | `app.js` (cart) |
| **16/11/2026** | Diego Ramos | Desarrollo | CODE | 17:00 | 20:00 | 180 | Implementación de ventana modal de ficha técnica y zoom de imagen (T13) | `index.html` / `app.js` |
| **17/11/2026** | Diego Ramos | Desarrollo | CODE | 18:00 | 20:30 | 150 | Implementación del selector de cantidad con bloqueo según existencias (T15) | Modal selector |
| **17/11/2026** | Haider Botia | Calidad | REV | 18:30 | 20:30 | 120 | Revisión por pares del carrito de compras y validaciones numéricas (T16) | PR #4 en GitHub |
| **17/11/2026** | Gloria Ossa | Líder | TEST | 17:00 | 20:00 | 180 | Pruebas integrales de flujo de compra y validación de 20 artículos en vivo (T17)| CP-01 a CP-06 |
| **18/11/2026** | Gloria Ossa | Líder | PLAN | 19:00 | 20:15 | 75 | Conducción Reunión N.° 03: consolidación y aprobación de la Entrega 2 | Acta N.° 03 |
| **18/11/2026** | Haider Botia | Calidad | PLAN | 19:00 | 20:15 | 75 | Registro del Acta N.° 03 y verificación de lista de chequeo de entrega | Acta N.° 03 |
| **18/11/2026** | Karol Espinosa | Planeación | PLAN | 19:00 | 20:15 | 75 | Consolidación de bitácoras de tiempo y verificación de balance de carga | Acta N.° 03 |
| **18/11/2026** | Diego Ramos | Desarrollo | PLAN | 19:00 | 20:15 | 75 | Sustentación técnica del estado de los módulos de la Entrega 2 | Acta N.° 03 |
| **18/11/2026** | Joan Morales | Soporte | PLAN | 19:00 | 20:15 | 75 | Verificación de sincronización de código y documentación en GitHub | Acta N.° 03 |
