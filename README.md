# pokedex-exercise-angular

![Pokedex Logo](design-html/img/logo.png)

**Pokedex Exercise Angular** es una aplicación Pokédex desarrollada en Angular con el objetivo de proporcionar una experiencia educativa y entretenida para los amantes de los Pokémon. Con esta aplicación, puedes explorar el fascinante mundo de los Pokémon y obtener información detallada sobre sus habilidades y características únicas.

<p align="center"> <img src="screenshots/screenshots-001.png" /> </p>

## Estado de Desarrollo

⚠️ **Este proyecto está en fase de desarrollo y estoy trabajando en mejoras constantes.** Si encuentras algún error o tienes sugerencias, no dudes en informarme abriendo un [issue](https://github.com/notyel/pokedex-exercise-angular/issues).

También estoy emocionado por las nuevas características que planeo agregar en el futuro, así que ¡mantente atento a las actualizaciones!

## Estructura del Proyecto

El repositorio tiene la siguiente estructura de carpetas:
- `design-html`: Contiene el diseño HTML del proyecto.
- `pokedex-app`: La aplicación Angular.

## Características Principales

- **Exploración de Pokémon**: Navega por una amplia variedad de Pokémon y descubre sus detalles esenciales, como su nombre, tipo, altura y peso.

- **Carga Dinámica**: Implementamos una carga dinámica desde la API pública [pokeapi.co](https://pokeapi.co/api/v2), lo que significa que puedes explorar una gran cantidad de Pokémon sin cargar todos los datos de una vez.

- **Scroll Infinito**: ¡No te preocupes por cargar más Pokémon manualmente! Hemos incluido una función de scroll infinito que te permite cargar automáticamente más Pokémon a medida que desplazas la página hacia abajo.

- **Carga Perezosa**: Mejoramos la eficiencia de la aplicación con la carga perezosa, lo que significa que los recursos se cargan según sea necesario, proporcionando una experiencia de usuario fluida.

- **Pikachu como Loader**: Hemos añadido un toque de diversión con un simpático Pikachu corriendo como loader mientras se cargan los datos. ¡Te encantará!

- **Detección de Imágenes SVG**: Detectamos automáticamente si una imagen es un archivo SVG y aplicamos estilos personalizados para garantizar una presentación adecuada.

- **Estructura Modularizada**: La aplicación sigue una estructura modularizada en componentes y servicios para facilitar el desarrollo y el mantenimiento.

## Uso

Para ejecutar la aplicación, sigue estos pasos:

1. Clona el repositorio:

   ```shell
   git clone https://github.com/tu-usuario/pokedex-exercise-angular.git
   ```

2. Navega al directorio de la aplicación:

   ```shell
   cd pokedex-exercise-angular/pokedex-app
   ```

3. Instala las dependencias:

   ```shell
   npm install
   ```

4. Inicia la aplicación:

   ```shell
   ng serve
   ```

5. Abre tu navegador y accede a [http://localhost:4200/](http://localhost:4200/) para explorar la Pokédex.

## ¿Qué es Angular? (Información de interes)

**Angular** es un popular framework de desarrollo de aplicaciones web y móviles. Fue creado por Google y es una de las herramientas más utilizadas para la creación de aplicaciones web de una sola página (*SPA*, por sus siglas en inglés) y aplicaciones web progresivas (*PWA*). Angular se basa en el lenguaje TypeScript y ofrece un conjunto de herramientas y bibliotecas que facilitan la creación de aplicaciones web complejas y dinámicas.

Algunas de las características clave de Angular incluyen:

1. **Componentes**: Angular se basa en un sistema de componentes, lo que significa que la interfaz de usuario se descompone en piezas reutilizables llamadas componentes. Cada componente tiene su propio HTML, CSS y lógica de JavaScript/TypeScript.

2. **Enlace de datos bidireccional**: Angular proporciona enlace de datos bidireccional, lo que permite la sincronización automática de datos entre el modelo y la vista. Cuando los datos cambian en el modelo, la vista se actualiza automáticamente y viceversa.

3. **Inyección de dependencias**: Angular utiliza un sistema de inyección de dependencias que facilita la gestión de las dependencias y la creación de componentes y servicios de manera modular y mantenible.

4. **Enrutamiento**: Angular incluye un módulo de enrutamiento que permite crear aplicaciones de una sola página con múltiples vistas y rutas. Esto es especialmente útil para aplicaciones web que tienen múltiples páginas o secciones.

5. **Directivas**: Angular ofrece directivas personalizadas que permiten extender el HTML con funcionalidades personalizadas. Por ejemplo, la directiva `ngFor` se utiliza para iterar sobre una lista de elementos en la vista.

6. **Compatibilidad con TypeScript**: Angular se desarrolla con TypeScript, un superconjunto de JavaScript que agrega tipos estáticos y otras características que facilitan el desarrollo y la detección temprana de errores en el código.

7. **Herramientas de desarrollo**: Angular proporciona herramientas de desarrollo robustas, como Angular CLI (Command Line Interface) para crear y gestionar proyectos, así como herramientas de depuración y pruebas.

Angular es ampliamente utilizado en la industria para crear aplicaciones web complejas y de alto rendimiento. Su arquitectura modular y su énfasis en las mejores prácticas de desarrollo hacen que sea una elección popular para desarrolladores y equipos de desarrollo que trabajan en proyectos web exigentes.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu contribución: `git checkout -b mi-contribucion`.
3. Realiza tus cambios y realiza un commit: `git commit -m "Añade nuevas características"`.
4. Sube tus cambios a tu repositorio: `git push origin mi-contribucion`.
5. Abre una solicitud de extracción (Pull Request) en el repositorio original.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.

---

Hecho con ❤️ por [Leyton Manuel Espitia Diaz](https://github.com/notyel) | [Github](https://github.com/notyel)
