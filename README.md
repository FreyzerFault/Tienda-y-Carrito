# Tienda y Carrito - Usando useContext y useReducer de React

---

## Ecommerce

[ ] Muestra una lista de productos que vienen de un JSON
[ ] Añade un filtro por categoría
[ ] Añade un filtro por precio

Haz uso de useContext para evitar pasar props innecesarias.

## Carrito

[ ] Haz que se puedan añadir los productos a un carrito.
[ ] Haz que se puedan eliminar los productos del carrito.
[ ] Haz que se puedan modificar la cantidad de productos del carrito.
[ ] Sincroniza los cambios del carrito con la lista de productos.
[ ] Guarda en un localStorage el carrito para que se recupere al recargar la página. (da puntos)

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
