# Acta de Reunión N.° 03: Revisión de Avances y Consolidación de la Entrega 2
## Subgrupo B05 · Proyecto: Catálogo Virtual con Metodología TSP
### Tutora: Diana Angélica Cruz Ortega

---

### 1. Datos Generales de la Sesión
- **Fecha:** Miércoles 18 de noviembre de 2026
- **Hora de inicio:** 19:00
- **Hora de finalización:** 20:15 (75 minutos)
- **Modalidad y enlace:** Virtual sincrónica mediante Microsoft Teams / Coordinación activa por WhatsApp
- **Moderó:** GLORIA LUCIA OSSA GARCIA (Líder de Equipo)
- **Secretario / Registro del Acta:** HAIDER MAURICIO BOTIA GÓMEZ (Gerente de Calidad y Proceso)
- **Propósito:** Evaluación del avance de desarrollo para la Entrega 2 (Escenario 5), revisión por pares (Code Review) de los componentes del catálogo virtual interactivo (20 artículos clasificados, búsqueda básica, filtros avanzados y carrito de compras dinámico), auditoría de la Bitácora de Registro de Tiempos TSP y aprobación del documento oficial de entrega `TSP_E2_SG05.pdf`.

---

### 2. Control de Asistencia (100 % de Participación)
| Nombre del Integrante | Estado | Rol Oficial Asignado | Responsabilidad en la Sesión |
| :--- | :---: | :--- | :--- |
| **GLORIA LUCIA OSSA GARCIA** | **Asistió** | **Líder de Equipo (Team Leader)** | Dirección de la sesión, verificación de integración y plan de entrega. |
| **HAIDER MAURICIO BOTIA GÓMEZ** | **Asistió** | **Gerente de Calidad y Proceso** | Presentación del informe de auditoría de calidad y Pull Requests. |
| **KAROL TATIANA ESPINOSA MANTILLA** | **Asistió** | **Gerente de Planeación** | Consolidación de métricas de tiempo y balance de horas reales vs. estimadas. |
| **DIEGO RAMOS PEÑA** | **Asistió** | **Gerente de Desarrollo** | Demostración técnica de búsqueda básica, avanzada y modal de producto. |
| **JOAN SEBASTIAN MORALES PÉREZ** | **Asistió** | **Gerente de Soporte** | Demostración del módulo de carrito de compras, cálculo y repositorio. |

**Ausentes y motivo:** Ninguno. Asistencia del 100 % de los integrantes del Subgrupo B05.

---

### 3. Orden del Día y Temas Tratados
1. **Revisión técnica del catálogo interactivo (TechStore):**
   - Se verificó la carga íntegra de los **20 artículos estructurados en JSON** con imágenes reales en alta resolución, categorías definidas (Audio, Cómputo, Wearables, Accesorios), precios y control de existencias (stock).
   - Se ejecutaron las pruebas funcionales del **módulo de búsqueda básica** por coincidencia de texto en tiempo real.
   - Se comprobó la operatividad de los **filtros de búsqueda avanzada** combinando categoría y control deslizable de precio máximo.
   - Se validó el **modal de características técnicas**, mostrando la imagen ampliada y el selector de compra con bloqueo automático cuando la cantidad solicitada excede el stock en inventario.
   - Se inspeccionó el **carrito de compras**, comprobando el cálculo reactivo de subtotales, totales y gestión dinámica de cantidades.
2. **Auditoría de Calidad y Revisiones por Pares (Code Review):**
   - El Gerente de Calidad (Haider Botia) presentó las evidencias de las inspecciones realizadas en GitHub a través de Pull Requests para las tareas T06, T09, T12 y T16. Se constató el cumplimiento de estándares semánticos HTML5, CSS responsivo y código JavaScript limpio sin librerías externas pesadas.
3. **Consolidación de la Bitácora de Registro de Tiempos TSP:**
   - La Gerente de Planeación (Karol Espinosa) consolidó los reportes individuales de tiempo de las semanas 1 a 5. Se evidenció un apego del 92 % frente a las horas planificadas, manteniendo la reserva de margen para la fase de integración final.
4. **Preparación y aprobación del documento oficial de Entrega 2:**
   - Se aprobó de forma unánime el informe oficial `TSP_E2_SG05.pdf` que reúne el plan ajustado (V2.0), las actas de reunión completas (Acta 01, 02 y 03), las evidencias de desarrollo y el reporte consolidado de tiempos.

---

### 4. Decisiones Tomadas
| Decisión | Justificación Metodológica TSP |
| :--- | :--- |
| **Aprobar el Prototipo Técnico de Entrega 2** | Cumple cabalmente con los requisitos funcionales R01 a R07 solicitados para esta fase en el enunciado del curso. |
| **Aprobar el Documento Oficial TSP_E2_SG05.pdf** | Integra todas las correcciones metodológicas solicitadas por la tutora Diana Angélica Cruz Ortega en la Entrega 1. |
| **Autorizar a la Líder para el cargue en Campus Virtual** | Gloria Ossa como Team Leader realizará la subida del PDF oficial antes del 24 de noviembre a las 23:55 (Escenario 5). |

---

### 5. Dificultades Identificadas y Acciones Acordadas
- **Dificultad:** Manejo de imágenes externas y resolución al abrir el modal en pantallas móviles.
- **Acción acordada:** Se aplicó diseño responsivo con Media Queries y formato CSS `object-fit: cover` para asegurar visualización perfecta en cualquier resolución.

---

### 6. Compromisos Asumidos (Hacia la Entrega 2 y Semana 6)
| Compromiso / Tarea | Responsable | Fecha Límite | Tarea Relacionada (ID) |
| :--- | :--- | :---: | :---: |
| Carga del archivo oficial TSP_E2_SG05.pdf en el Campus Virtual | GLORIA LUCIA OSSA GARCIA | 24/11/2026 a las 23:55 | T18 |
| Sincronización final de la rama main y releases en GitHub | JOAN SEBASTIAN MORALES | 20/11/2026 | T02 / T14 |
| Inicio del módulo de autenticación y persistencia de sesión | JOAN SEBASTIAN MORALES | 22/11/2026 | T19 (Semana 6) |
| Preparación de casos de prueba integrales para la Semana 6 | KAROL TATIANA ESPINOSA | 25/11/2026 | T21 (Semana 6) |
| Lista de chequeo previa para la Entrega 2 | HAIDER BOTIA GÓMEZ | 23/11/2026 | T16 / T17 |

---

### 7. Convocatoria a la Próxima Reunión
- **Fecha y hora:** Miércoles 25 de noviembre de 2026 a las 19:00
- **Duración máxima:** 60 minutos
- **Modalidad:** Virtual sincrónica vía Microsoft Teams
- **Propósito:** Evaluación post-Entrega 2 y planificación detallada de las tareas de integración final y sustentación (Entrega 3).
