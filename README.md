## Práctica Mejora Proyecto Cliente con Github Actions

## Índice:
 + Introducción
 + Tecnologias utilizadas
 + Planteamiento de las mejoras
 + Mejoras


### Introdución

Este proyecto es la mejora con github actions de una aplicación web para jugar al bingo, realizada en el módulo de Cliente.

#### Sintaxis de flujo de trabajo para acciones de GitHub

Un flujo de trabajo es un proceso automatizado configurable compuesto por uno o más trabajos. Debe crear un archivo YAML para definir la configuración de su flujo de trabajo.

### Tecnologias utilizadas

#### Javascript ES6

Es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.

El proyecto del bingo está construido con Javascript, en la versión de ECMAScript 6.

#### Node.js

Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript asíncrono.

#### WebSockets

WebSocket es una tecnología que proporciona un canal de comunicación bidireccional y full-duplex sobre un único socket TCP. Está diseñada para ser implementada en navegadores y servidores web, pero puede utilizarse por cualquier aplicación cliente/servidor.

#### Socket.io

Socket.IO es una biblioteca que permite la comunicación en tiempo real, bidireccional y basada en eventos entre el navegador y el servidor.

#### Nodemailer

Nodemailer es un módulo para aplicaciones Node.js que permite el envío de correos electrónicos de forma sencilla.

#### Jest

Jest es un marco de prueba de JavaScript mantenido por Facebook, Inc. diseñado y construido por Christoph Nakazawa con un enfoque en la simplicidad y soporte para grandes aplicaciones web. 

Funciona con proyectos que utilizan Babel , TypeScript , Node.js , React , Angular , Vue.js y Svelte. Jest no requiere mucha configuración para los usuarios nuevos de un marco de prueba.


### Planteamiento de las mejoras

Esta práctica consistirá en aplicar una serie de mejoras sobre el proyecto realizadoen la asignatura de Cliente del primer trimestre. Todos estos cambios se deberánrealizar en una nueva rama que se denominará “githubActions_improvement”.

Los cambios arealizar consistirán en configurar un nuevo   workflow dentro del proyecto denominado Bingo_Workflow. Dicho workflow sólo se ejecutará cuando se realice unpush en la rama creada y estará compuesto por los siguientes jobs:

#### Job 1 ( Syntax Check Job)

Job   de   verificación   de   sintaxis   correcta.   Se   denominará syntax_check_job y se encargará de realizar la descarga del proyecto y de verificar que la sintáxis utilizada és correcta en los ficheros javascript.

