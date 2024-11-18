'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Recycle, ShoppingBag, BookOpen, MessageCircle, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="/">
          <Recycle className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-gray-800">TechRecycle</span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-4 sm:gap-6">
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
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <nav className="flex flex-col items-center py-4">
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-green-400 to-blue-500">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Tecnología Responsable
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Compra tecnología nueva y reacondicionada con nuestro sello de calidad. Contribuye al reciclaje responsable.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/catalogo">
                  <Button className="bg-white text-green-600 hover:bg-green-100">Ver Catálogo</Button>
                </Link>
                <Link href="/recycle">
                  <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/20">
                    Programa de Reciclaje
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <ShoppingBag className="h-12 w-12 text-blue-500" />
                <h2 className="text-xl font-bold text-center">Catálogo Diverso</h2>
                <p className="text-sm text-gray-500 text-center">Tecnología nueva y reacondicionada con nuestro sello de calidad.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Recycle className="h-12 w-12 text-green-500" />
                <h2 className="text-xl font-bold text-center">Reciclaje Responsable</h2>
                <p className="text-sm text-gray-500 text-center">Entrega tus dispositivos antiguos para reacondicionamiento o reciclaje seguro.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <BookOpen className="h-12 w-12 text-blue-500" />
                <h2 className="text-xl font-bold text-center">Blog Informativo</h2>
                <p className="text-sm text-gray-500 text-center">Contenidos sobre tecnología y consejos para extender la vida útil de tus dispositivos.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <MessageCircle className="h-12 w-12 text-green-500" />
                <h2 className="text-xl font-bold text-center">Asistencia Virtual</h2>
                <p className="text-sm text-gray-500 text-center">Chat automatizado para responder tus preguntas y guiarte en tu compra.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-100 to-green-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-800">Únete a Nuestra Comunidad</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Recibe noticias sobre tecnología sostenible, ofertas exclusivas y tips para cuidar tus dispositivos.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input className="flex-1" placeholder="Ingresa tu email" type="email" />
                  <Button type="submit" className="bg-green-600 text-white hover:bg-green-700">Suscribirse</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2024 TechRecycle. Todos los derechos reservados.</p>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-sm text-gray-500 hover:underline underline-offset-4" href="#">
                Términos de Servicio
              </Link>
              <Link className="text-sm text-gray-500 hover:underline underline-offset-4" href="#">
                Privacidad
              </Link>
            </nav>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-4 right-4">
        <Button size="icon" className="rounded-full w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 shadow-lg">
          <MessageCircle className="h-6 w-6 text-white" />
          <span className="sr-only">Abrir chat de asistencia</span>
        </Button>
      </div>
    </div>
  )
}