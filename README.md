# preentregatalentotech

Este script en Node.js permite interactuar con la [Fake Store API](https://fakestoreapi.com/) mediante comandos desde la consola. Puedes realizar operaciones como `GET`, `POST` y `DELETE` sobre el recurso (`products`), pasando parámetros opcionales como `title`, `price` y `category`.

## 📦 Requisitos

- Node.js 18 o superior (usa `fetch` nativamente).
- Conexión a internet.

## 🚀 Uso

```bash
node script.js <METHOD> <RESOURCE> [title] [price] [category]
```

### Parámetros

| Parámetro  | Descripción                                                              | Requerido |
|------------|---------------------------------------------------------------------------|-----------|
| METHOD     | Método HTTP a utilizar (`GET`, `POST` o `DELETE`.)                        | ✅        |
| RESOURCE   | Recurso de la API (`products`)                                            | ✅        |
| title      | Título del producto (solo para `POST`)                                    | ❌        |
| price      | Precio del producto (solo para `POST`)                                    | ❌        |
| category   | Categoría del producto (solo para `POST`)                                 | ❌        |

> ⚠️ Todos los parámetros después de `RESOURCE` son opcionales, pero si se incluyen se usarán como parte del cuerpo del request (`body`) en formato JSON.

### Ejemplos

#### Obtener productos
```bash
npm start GET products
```

#### Obtener producto especifico
```bash
npm start GET products/1
```

#### Crear un producto
```bash
npm start POST products "My Product" 99.99 "electronics"
```

#### Eliminar un producto
```bash
npm start DELETE products/1
```

## 🛠 Detalles Técnicos

- Si se pasan parámetros (`title`, `price`, `category`), se construye automáticamente el cuerpo (`body`) y los headers del request.
- Al ser una fake API, el numero de ids va de 1 a 20, al crear un producto siempre se obtendrá (`id:21`), pero el mismo no será accesible.
- La respuesta del servidor se imprime en consola.
- Si ocurre un error durante la ejecución, se mostrará un mensaje orientando a leer este `README`, en caso de incurrir en algun otro problema cree un ticket en este repo.

## 📄 Licencia

Este script es de uso libre para fines de prueba y desarrollo.
