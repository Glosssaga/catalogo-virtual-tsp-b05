# Catálogo Virtual TSP - Subgrupo B05
## Desarrollo de Software en Equipos · Politécnico Grancolombiano

Bienvenido al repositorio oficial del proyecto colaborativo para el módulo de **Desarrollo de Software en Equipos** (Segundo Bloque - Grupo B05). 

Este proyecto se desarrolla implementando el proceso **TSP (Team Software Process)** y el estándar **TSPi** del Software Engineering Institute (SEI), coordinado bajo un liderazgo formal, medición rigurosa de tiempos, control de versiones y revisión de pares.

---

## 🎯 Misión del Proyecto: Catálogo Virtual

Desarrollar una aplicación web interactiva que funcione como catálogo virtual donde los clientes puedan explorar productos, filtrar artículos, ver especificaciones en detalle y gestionar compras en un carrito.

### Módulos Requeridos (Entrega Oficial):
1. **Registro e Inicio de Sesión:** Autenticación de usuarios para habilitar la compra y gestión de pedidos.
2. **Búsqueda Básica:** Búsqueda rápida por nombre y coincidencias de texto.
3. **Búsqueda Avanzada:** Filtros específicos por categoría, rango de precio, características y disponibilidad.
4. **Artículos y Características:** Vista de productos con ficha técnica, control de stock disponible e imagen interactiva con ampliación (modal/zoom).
5. **Compra por Artículo:** Selector dinámico de cantidad con validación de inventario.
6. **Carrito de Compras:** Cálculo en tiempo real de subtotal, impuestos, total a pagar y gestión de cantidades.
7. **Catálogo Base:** Base de datos con un mínimo de **20 artículos** categorizados y con imágenes reales.

---

## 👥 Equipo y Roles TSP

| Rol TSP | Responsable | Usuario GitHub | Función Principal |
| :--- | :--- | :--- | :--- |
| **Líder de Equipo (Team Leader)** | *Líder del Proyecto* | `@glossaga` | Dirección general, actas, seguimiento de compromisos y aprobación de Pull Requests. |
| **Gerente de Desarrollo** | *Por confirmar* | `@` | Arquitectura, diseño técnico, especificación de componentes y asignación de código. |
| **Gerente de Planeación** | *Por confirmar* | `@` | Matriz de estimación, balance de carga semanal, cronograma e hitos del proyecto. |
| **Gerente de Calidad y Proceso** | *Por confirmar* | `@` | Estándares de codificación, revisiones por pares (Code Review) y cumplimiento TSP. |
| **Gerente de Soporte** | *Por confirmar* | `@` | Configuración del repositorio, ramas de Git, herramientas y gestión de configuración. |

> 📌 **Para elegir tu rol y reportar tu disponibilidad semanal:** consulta y edita el archivo [`ROLES_Y_EQUIPO.md`](./ROLES_Y_EQUIPO.md).

---

## ⏱️ Registro y Control de Tiempos (Time Log TSP)

Siguiendo la metodología TSP, cada miembro del equipo debe registrar el tiempo invertido (en minutos y horas) en cada sesión de trabajo:
- Consulta y diligencia el archivo [`BITACORA_TIEMPOS_TSP.md`](./BITACORA_TIEMPOS_TSP.md).
- Fases estándar a reportar: `PLAN` (Planeación), `REQ` (Requisitos), `DES` (Diseño), `CODE` (Codificación), `REV` (Revisión de Código), `TEST` (Pruebas) y `POST` (Postmortem).

---

## 🔄 Flujo de Trabajo en Git (Git Flow del Equipo)

Para garantizar la calidad y que la Líder de Proyecto y el Gerente de Calidad puedan auditar todos los cambios:

1. **Nunca subir cambios directamente a la rama `main`**.
2. Crear una rama por cada funcionalidad o tarea:
   ```bash
   git checkout -b feature/modulo-busqueda
   # o para documentación:
   git checkout -b docs/plan-entrega-1
   ```
3. Hacer commits descriptivos con registro de avance:
   ```bash
   git commit -m "feat(busqueda): implementar filtro reactivo por precio y categoría"
   ```
4. Subir la rama a GitHub:
   ```bash
   git push origin feature/modulo-busqueda
   ```
5. Abrir un **Pull Request (PR)** hacia `main`.
6. La **Líder del Proyecto** (`@glossaga`) y el **Gerente de Calidad** revisarán el código, verificarán que cumpla los criterios de aceptación y aprobaran el merge.
