# Landing San Valentín 2026 – Faranda Hotels España

Landing en **Next.js + Tailwind** lista para Vercel.

## Requisitos
- Node.js 18+ (recomendado 20)

## Instalación
```bash
npm install
npm run dev
```

## Dónde editar ofertas / teléfonos
En `app/page.tsx` hay un array `hotels` con:
- `phoneDisplay` (lo que se muestra)
- `phoneE164` (para el enlace `tel:`)
- `instagramUrl`
- `offers` (título, precio y detalle)

## Imágenes
Las fotos se encuentran en `public/hotels/`.
Actualmente se han extraído automáticamente del PDF que compartiste.

## Despliegue en Vercel
- Importa el repo en Vercel
- Framework: Next.js (autodetectado)
- Build: `npm run build`

## Notas legales (email)
La landing incluye mensajes de privacidad y baja en el footer.
En los emails, recuerda añadir siempre **método de baja** (unsubscribe o respuesta “BAJA”) y enlazar a la **política de privacidad** del hotel.
