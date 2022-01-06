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

### Component Extend Styles Pattern

Se agrego el patrón de estilos extensible al Compound Component Pattern, para asi poder personalizar los estilos de todo el componente

```js
// Ejemplo
<ProductCard className="my-custom-class">
  <ProductImage style={{ padding: '10px', borderRadius: 20 }} />
  <ProductTitle title="Hola Mundo" />
</ProductCard>
```

**TODO's**

- recibir props adicionales de React
- control props para sus componentes interiores
