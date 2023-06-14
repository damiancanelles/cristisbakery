import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Cristis Bakery",
  description: "Welcome to Cristis Bakery, where you'll find an exquisite selection of pastries and treats designed to make your celebrations truly special. Our bakery specializes in crafting bocadillos, offering a delightful fusion of flavors and textures that are perfect for festive occasions. From savory options to satisfy the taste buds to sweet creations that satisfy your cravings, our bocadillos are meticulously prepared using only the finest ingredients. At Cristis Bakery, we take pride in delivering exceptional quality and creating lasting memories for our customers. Indulge in our extraordinary treats and elevate your party with the magic of Cristis Bakery's bocadillos, specially crafted for your festive tables.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
