# MyMusicApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

# Ejercicio práctico front-end My music app

## Tu misión es desarrollar una aplicación web responsive con tecnologías front-end vigentes y consumiendo la API de Spotify

### Prerrequisitos

- Leer estándar Front-End   
  [https://yellowshoe.com.au/standards/](https://yellowshoe.com.au/standards/)

### Objetivo

Aplicar y asimilar conceptos de:

- Implementación responsive
- Frameworks vigentes front-end
- Interacción de información entre componentes
- Consumo de servicios externos (APIs) o locales (localStorage, IndexedDB, etc...)
- Versionamiento de código
- Pruebas unitarias\*

### Descripción general

Desarrollo de una web responsive que consuma la [API de Spotify](https://developer.spotify.com/documentation/web-api/), para traer una lista de canciones. Un usuario, luego de registrarse y loguearse, podrá ver la lista de canciones y podrá agregar las que más le gusten a sus favoritos.

### Inventario del sitio

Páginas:

- **Registro + Login**: con campos de e-mail de usuario, contraseña, validaciones respectivas según tipo y botones ‘**Registrarse**’ / ‘**Entrar**’
- **Home**: muestra un **header** y una **lista de canciones** de la API de Spotify
- **Tus favoritos**: muestra las canciones que el usuario ha agregado a favoritos

Header:

- **Logo** de My Music App con enlace al Home
- Enlace a **Tus favoritos**
- **Nombre de usuario logueado**
- Botón **Salir** para cerrar sesiónº

### Consideraciones técnicas

- La aplicación debe ser **_responsive_**. Se debe pensar en [**_mobile first_**](https://www.initcoms.com/que-es-mobile-first-posicionamiento/).
- La mínima resolución para una buena visualización de la información es de **320 pixeles de ancho**.
- El desarrollo debe tener soporte para las **últimas versiones de Google Chrome y Firefox**.
- El sitio debe estar desarrollado sobre **React** o **Angular (v7+)**.
- Solicitar al _master_ del equipo de desarrollo o líder de capacidad, la creación de un **nuevo repositorio** en GitLab (con el nombre **_Capacitacion_nombre.apellido_**), y el permiso adecuado como desarrollador en el mismo. En este repositorio se versionará el proyecto.

### Enlaces de guia

- API Spotify

[https://developer.spotify.com/documentation/web-api/](https://developer.spotify.com/documentation/web-api/)

- Angular setup

[https://angular.io/guide/setup-local](https://angular.io/guide/setup-local)

- React

[https://es.reactjs.org/docs/create-a-new-react-app.html](https://es.reactjs.org/docs/create-a-new-react-app.html)

- Presentación GIT   
  [https://wiki.pragma.com.co/git-galaxy](https://wiki.pragma.com.co/git-galaxy)
