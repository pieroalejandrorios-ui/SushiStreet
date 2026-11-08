# Sushi Street Lima

Landing responsive desarrollada con Next.js, React y TypeScript. Exportación estática en `out/`.

## Desarrollo

Instalar dependencias con `npm install` y ejecutar `npm run dev`. Para producción: `npm run build`.

## Contenido y comportamiento

- Secciones: inicio, makis, sobre nosotros, promociones, ubicación y contacto/preguntas frecuentes.
- Filtros de makis, selección de sabores para consulta por WhatsApp, cartas ampliables, acordeón y menú móvil.
- WhatsApp y dirección proporcionados por el propietario. No se publica un horario sin confirmar.
- Platos y precios tomados de las dos cartas PNG de la carpeta original. Se avisa al visitante que confirme vigencia y condiciones.
- Las fotografías se extraen de esas cartas. Algunas imágenes de makis son referenciales y se identifican como tales.
- El inicio usa la fotografía de makis proporcionada posteriormente. La foto del cóctel acompaña la sección de carta adicional y el retrato aparece como un detalle pequeño en Sobre nosotros. Se sirven versiones WebP optimizadas, conservando los originales.
- La portada muestra las cuatro fotos indicadas en un carrusel de fondo a la derecha, con deslizamiento horizontal automático y un degradado para preservar la lectura. Cambia cada 5,5 segundos, incluye selección manual y pausa; se detiene al ocultar la pestaña y respeta la preferencia de movimiento reducido.
- Identidad visual tomada del logo adjunto y de las cartas. El perfil de Instagram no fue accesible durante la implementación.
- No procesa pagos ni confirma pedidos: la selección prepara un mensaje editable en WhatsApp.
- No requiere Supabase para esta landing. El futuro sistema de pedidos e inventario se integrará en una etapa posterior.

Los enlaces externos requieren conexión. Las fuentes de Google tienen alternativas locales; el mapa incluye enlace alternativo a Google Maps.

