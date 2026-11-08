import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Sushi Street | Makis con actitud · Lima',description:'Explora la carta de Sushi Street Lima: makis, combos, bowls y barra libre. Encuentra tu próximo antojo y contáctanos por Instagram.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="es"><body>{children}</body></html>}
