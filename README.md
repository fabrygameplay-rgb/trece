# 🏜️ Líneas de Nazca - Proyecto Interactivo

Proyecto web interactivo desarrollado con **HTML5, CSS3 y JavaScript Vanilla** que presenta información histórica sobre las Líneas de Nazca e incluye un sistema dinámico para visualizar sus principales geoglifos.

---

## 🇵🇪 Descripción

Este sitio web explica:

- ¿Qué son las Líneas de Nazca?
- ¿Quién las descubrió?
- La importancia de María Reiche
- Curiosidades históricas

Incluye una sección interactiva donde el usuario puede hacer clic en diferentes figuras (Colibrí, Mono, Araña, Cóndor, etc.) y visualizar su imagen correspondiente con animación y enlace a la fuente original.

---

## Funcionalidad Interactiva

- Sistema dinámico basado en `data-* attributes`
- Animaciones suaves con `opacity` y `transform`
- Reemplazo dinámico del enlace de referencia
- Transiciones controladas con `classList`
- Uso de `requestAnimationFrame` para activar animaciones correctamente
- Reinicio de animación con `void element.offsetWidth`

---

## 🛠️ Tecnologías Utilizadas

- HTML5 semántico
- CSS3 (Flexbox + Media Queries + Transiciones)
- JavaScript Vanilla (sin frameworks)

---

## Responsive Design

Breakpoints implementados:

```css
/* Móviles pequeños */
@media (max-width: 414px)

/* Móviles grandes y tablets pequeñas */
@media (min-width: 415px) and (max-width: 768px)

/* Tablets */
@media (min-width: 769px) and (max-width: 1024px)
