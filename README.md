# Repositorio con practicas de React

Este proyecto se utilizará unicamente con el proposito de experimentar patrones y caracteristicas avanzadas de React, asi como tambien para almacen de posibles snippets.

### Implementación patrón de componentes - Component Compound

Implementación de patrón de componentes _(Component Compound)_ en react, utilizando la separación y modulación de archivos, asi como tambien diferentes maneras de usar el componente.

```js
// Primera opción
<ProductCard>
  <ProductCard.Image />
  <ProductCard.Title title="Hola Mundo" />
</ProductCard>
```

```js
// Alternativa
<ProductCard>
  <ProductImage />
  <ProductTitle title="Hola Mundo" />
</ProductCard>
```

**TODO's**

- recibir props adicionales de React
- props de estilo y separación de estilos
- control props para sus componentes interiores
