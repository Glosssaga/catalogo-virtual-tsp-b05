# 📘 Guía Paso a Paso: Cómo Trabajar en GitHub (Tipo Coquito)
## Proyecto: Catálogo Virtual · Metodología TSP · Subgrupo B05
### Politécnico Grancolombiano · Tutora: Diana Angélica Cruz Ortega

¡Hola compañero/a de equipo! Esta guía está diseñada para que cualquier integrante, sin importar su nivel de experiencia con Git o GitHub, pueda clonar el proyecto, hacer cambios y subirlos correctamente sin dañar el trabajo del grupo.

---

## ⚠️ REGLA DE ORO DEL EQUIPO TSP
> **NUNCA subas cambios directamente a la rama `main`**.  
> Siempre creamos una **rama propia** (por ejemplo `feature/mi-tarea`) y abrimos un **Pull Request (PR)**. La Líder (**Gloria Ossa**) y el Gerente de Calidad (**Haider Botia**) revisan y aprueban el código antes de mezclarlo. Esto nos garantiza la máxima nota en las revisiones de la tutora.

---

## 🚀 OPCIÓN 1: Trabajar en tu Computador con Terminal / Git (Recomendado)

### Paso 1: Clonar el proyecto por primera vez
1. Abre tu terminal (Git Bash, PowerShell o Símbolo del Sistema) en la carpeta donde guardas tus trabajos de la universidad.
2. Escribe este comando y presiona **Enter**:
   ```bash
   git clone https://github.com/Glosssaga/catalogo-virtual-tsp-b05.git
   ```
3. Entra a la carpeta del proyecto recién descargada:
   ```bash
   cd catalogo-virtual-tsp-b05
   ```

---

### Paso 2: Crear tu propia rama antes de modificar nada
Nunca trabajes sobre `main`. Crea tu propia rama con un nombre descriptivo:
```bash
git checkout -b feature/nombre-de-tu-tarea
```
*Ejemplos:*
- Si vas a ajustar estilos: `git checkout -b feature/ajuste-estilos`
- Si vas a documentar algo: `git checkout -b docs/bitacora-tiempos`
- Si vas a editar un módulo: `git checkout -b feature/filtro-busqueda`

---

### Paso 3: Modificar los archivos
1. Abre la carpeta del proyecto en tu editor de código favorito (por ejemplo, **Visual Studio Code**).
2. Haz los cambios necesarios en el código (HTML, CSS, JS o la documentación).
3. Prueba tus cambios en el navegador abriendo el archivo `index.html`.
4. Guarda todos los archivos editados (`Ctrl + S`).

---

### Paso 4: Registrar tus horas en la bitácora TSP
Abre el archivo `BITACORA_TIEMPOS_TSP.md` y anota tu sesión de trabajo:
- Fecha, tus iniciales, rol, fase (`CODE`, `DES`, `REV`, etc.), hora inicio, hora fin y descripción de lo que hiciste.

---

### Paso 5: Guardar y subir tus cambios a GitHub
En tu terminal escribe estos 3 comandos en orden:

1. **Seleccionar los archivos modificados:**
   ```bash
   git add .
   ```
2. **Crear el mensaje del cambio:**
   ```bash
   git commit -m "feat: descripción breve de lo que modificaste"
   ```
3. **Subir tu rama a GitHub:**
   ```bash
   git push origin feature/nombre-de-tu-tarea
   ```

---

### Paso 6: Abrir el Pull Request (PR) en GitHub
1. Entra al enlace del repositorio: [https://github.com/Glosssaga/catalogo-virtual-tsp-b05](https://github.com/Glosssaga/catalogo-virtual-tsp-b05)
2. Verás una barra amarilla arriba con un botón verde que dice: **"Compare & pull request"**. Hazle clic.
3. Escribe un título y una breve descripción de lo que cambiaste.
4. Haz clic en el botón verde **Create pull request**.
5. ¡Listo! La Líder y el Gerente de Calidad recibirán la notificación, revisarán tus cambios y los mezclarán al proyecto principal.

---

---

## 🌐 OPCIÓN 2: Para cambios rápidos directamente desde el Navegador (Sin instalar Git)

Si solo necesitas editar un texto, corregir un dato o registrar tu rol y no tienes Git en tu computador:

1. Entra a: [https://github.com/Glosssaga/catalogo-virtual-tsp-b05](https://github.com/Glosssaga/catalogo-virtual-tsp-b05)
2. Haz clic sobre el archivo que quieres modificar (por ejemplo, `ROLES_Y_EQUIPO.md` o `BITACORA_TIEMPOS_TSP.md`).
3. Arriba a la derecha del archivo, haz clic en el icono del lápiz (**Edit this file**).
4. Realiza tus modificaciones en el texto.
5. Al final de la página verás un recuadro llamado **Commit changes**:
   - Selecciona la segunda opción con círculo: 🔘 **"Create a new branch for this commit and start a pull request"**.
   - Haz clic en el botón verde **Propose changes**.
6. En la siguiente pantalla, haz clic en **Create pull request**.
7. ¡Listo! Tus cambios quedan enviados a revisión de forma segura.

---

## ❓ Preguntas Frecuentes

- **¿Cómo actualizo mi proyecto local con los cambios que otros hicieron?**
  Antes de empezar una nueva tarea en tu computador, pásate a `main` y descarga lo último:
  ```bash
  git checkout main
  git pull origin main
  ```
- **¿Qué hago si me sale un error al hacer `git push`?**
  Escríbenos al grupo de WhatsApp y la Líder o el Gerente de Soporte te guiarán de inmediato.
