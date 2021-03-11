# Proyecto de muestra

Este proyecto muestra como usar `OAUTH` y una conexion a una base de datos `MariaDB` mediante el `ORM` `Sequelize`.

## Intalación

Para instalar el paquete es necesario tener instalados y configurados _*Node.js*_, _NPM_ y _MariaDB_.

Antes de empezar debe copiar el archivo _sample.env_ a un nuevo archivo llamado _.env_ y editar los valores de adentro de acuerdo a su base de datos y su entorno de trabajo.

Despues debe ejecutar los siguientes comandos para iniciar el proyecto:

```bash
npm install # Este instala las dependencias
npm run initdb # Este inicializa la base de datos
npm start # Este inicia la aplicación
```

## Nota:
Si tiene MySQL tambien funciona pues los drivers y el ORM Sequelize permiten usar ambos de manera indiscriminada.

