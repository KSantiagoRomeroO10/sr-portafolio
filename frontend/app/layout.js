import './globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Generated by Santiago Romero',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="es">
      <head><link rel="icon" href="/icon-portfolio.svg" type="image/svg+xml" /></head>
      <body>{children}</body>
    </html>
  )
}
/* 
  Este ultimo componente envuelve el contenido de la página web y le incrusta las propiedades definicdas 
  en el metadata al head
*/