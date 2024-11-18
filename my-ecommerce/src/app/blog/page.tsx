'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Recycle, ShoppingBag, MessageCircle, Calendar, Clock, ChevronRight, Menu, Search } from 'lucide-react'

export default function BlogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Dummy data for blog posts
  const blogPosts = [
    { id: 1, title: "Cómo extender la vida útil de tu smartphone", category: "Consejos", date: "2024-03-15", readTime: "5 min", image: "/placeholder.svg", excerpt: "Descubre consejos prácticos para mantener tu smartphone funcionando como nuevo por más tiempo." },
    { id: 2, title: "El impacto ambiental de la tecnología: Lo que necesitas saber", category: "Medio Ambiente", date: "2024-03-10", readTime: "7 min", image: "/placeholder.svg", excerpt: "Analizamos el impacto de la producción y desecho de dispositivos electrónicos en nuestro planeta." },
    { id: 3, title: "Comparativa: Dispositivos nuevos vs. reacondicionados", category: "Tecnología", date: "2024-03-05", readTime: "6 min", image: "/placeholder.svg", excerpt: "¿Vale la pena comprar un dispositivo reacondicionado? Te ayudamos a tomar la mejor decisión." },
    { id: 4, title: "Los beneficios ocultos del reciclaje electrónico", category: "Reciclaje", date: "2024-02-28", readTime: "4 min", image: "/placeholder.svg", excerpt: "Descubre cómo el reciclaje de dispositivos electrónicos beneficia a la economía y al medio ambiente." },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="/">
          <Recycle className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-gray-800">TechRecycle</span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="/">
            Inicio
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="/catalogo">
            Catálogo
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="/recycle">
            Reciclaje
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="/blog">
            Blog
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="/contact">
            Contacto
          </Link>
        </nav>
        <div className="flex items-center gap-4 ml-auto md:ml-4">
          <Button variant="ghost" size="icon">
            <Link href="/carrito">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Carrito de compras</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">Iniciar sesión</Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <nav className="flex flex-col items-center py-4">
            <Link className="w-full text-center py-2 hover:bg-gray-100" href="/">
              Inicio
            </Link>
            <Link className="w-full text-center py-2 hover:bg-gray-100" href="/catalogo">
              Catálogo
            </Link>
            <Link className="w-full text-center py-2 hover:bg-gray-100" href="/recycle">
              Reciclaje
            </Link>
            <Link className="w-full text-center py-2 hover:bg-gray-100" href="/blog">
              Blog
            </Link>
            <Link className="w-full text-center py-2 hover:bg-gray-100" href="/contact">
              Contacto
            </Link>
          </nav>
        </div>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-400 to-blue-500 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Blog TechRecycle
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Explora nuestros artículos sobre tecnología, sostenibilidad y consejos para cuidar tus dispositivos.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="flex-1" placeholder="Buscar artículos..." type="search" />
                  <Button type="submit" className="bg-white text-green-600 hover:bg-green-100">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Buscar</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-3">
              <div className="md:col-span-2 space-y-10">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <Badge className="mb-2 bg-gradient-to-r from-green-400 to-blue-500 text-white">{post.category}</Badge>
                      <h2 className="text-2xl font-bold mb-2 hover:text-green-600 transition-colors">{post.title}</h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="mr-1 h-4 w-4" />
                        <span className="mr-4">{post.date}</span>
                        <Clock className="mr-1 h-4 w-4" />
                        <span>{post.readTime} de lectura</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="outline" className="w-full hover:bg-green-50 hover:text-green-600 transition-colors">
                        Leer más
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="space-y-6">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Categorías</h3>
                    <ul className="space-y-2">
                      {["Tecnología", "Reciclaje", "Medio Ambiente", "Consejos"].map((category) => (
                        <li key={category}>
                          <Link href="#" className="text-green-600 hover:text-green-700 transition-colors hover:underline">
                            {category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Artículos destacados</h3>
                    <ul className="space-y-4">
                      {[
                        "10 formas de reducir tu huella de carbono digital",
                        "La evolución de los smartphones reacondicionados",
                        "Cómo preparar tu dispositivo para el reciclaje"
                      ].map((article, index) => (
                        <li key={index}>
                          <Link href="#" className="text-green-600 hover:text-green-700 transition-colors hover:underline">
                            {article}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-green-100 to-blue-100">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Suscríbete a nuestro newsletter</h3>
                    <p className="text-gray-600 mb-4">Recibe las últimas noticias y consejos directamente en tu bandeja de entrada.</p>
                    <form className="space-y-4">
                      <Input type="email" placeholder="Tu correo electrónico" className="bg-white" />
                      <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white transition-colors">
                        Suscribirse
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                {["Catálogo", "Reciclaje", "Blog", "Contacto"].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase()}`} className="text-gray-600 hover:text-green-600 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Soporte</h3>
              <ul className="space-y-2">
                {["FAQ", "Envíos", "Devoluciones", "Garantía"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Legal</h3>
              <ul className="space-y-2">
                {["Términos de Servicio", "Política de Privacidad"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Síguenos</h3>
              <div className="flex space-x-4">
                {[
                  { name: "Facebook", icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
                  { name: "Twitter", icon: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /> },
                  { name: "Instagram", icon: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></> }
                ].map((social) => (
                  <Link key={social.name} href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-facebook"
                    >
                      {social.icon}
                    </svg>
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-xs text-gray-500">© 2024 TechRecycle. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-4 right-4">
        <Button size="icon" className="rounded-full w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg">
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Abrir chat de asistencia</span>
        </Button>
      </div>
    </div>
  )
}