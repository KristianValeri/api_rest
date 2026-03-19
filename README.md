## Endpoints

### Conductores

| Método | Endpoint                | Descripción                               |
| ------ | ----------------------- | ----------------------------------------- |
| GET    | /conductores            | Obtiene la lista de todos los conductores |
| GET    | /conductores/:id        | Devuelve un conductor por su id           |
| POST   | /conductores            | Crea un nuevo conductor (JSON en el body) |
| PUT    | /conductores/:id        | Actualiza un conductor existente          |
| DELETE | /conductores/:id        | Elimina un conductor por su id            |
| GET    | /conductores/:id/coches | Lista los coches del conductor            |

### Coches

| Método | Endpoint    | Descripción                                               |
| ------ | ----------- | --------------------------------------------------------- |
| GET    | /coches     | Lista todos los coches (incluye conductores con populate) |
| GET    | /coches/:id | Devuelve un coche por su id                               |
| POST   | /coches     | Crea un coche (requiere conductor en el body)             |
| PUT    | /coches/:id | Actualiza un coche existente                              |
| DELETE | /coches/:id | Elimina un coche por su id                                |
