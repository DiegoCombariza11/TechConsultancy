import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"
import { Recycle, ShoppingBag, BookOpen, MessageCircle, ChevronRight } from 'lucide-react'

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Recycle className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-gray-700">TechRecycle</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Catálogo
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Reciclaje
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Blog
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Tecnología Responsable
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Compra tecnología nueva y reacondicionada con nuestro sello de calidad. Contribuye al reciclaje responsable.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Ver Catálogo</Button>
                <Button variant="outline">Programa de Reciclaje</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <ShoppingBag className="h-10 w-10 text-blue-500" />
                <h2 className="text-xl font-bold">Catálogo Diverso</h2>
                <p className="text-sm text-gray-500 text-center">Tecnología nueva y reacondicionada con nuestro sello de calidad.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <Recycle className="h-10 w-10 text-green-500" />
                <h2 className="text-xl font-bold">Reciclaje Responsable</h2>
                <p className="text-sm text-gray-500 text-center">Entrega tus dispositivos antiguos para reacondicionamiento o reciclaje seguro.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <BookOpen className="h-10 w-10 text-blue-500" />
                <h2 className="text-xl font-bold">Blog Informativo</h2>
                <p className="text-sm text-gray-500 text-center">Contenidos sobre tecnología y consejos para extender la vida útil de tus dispositivos.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <MessageCircle className="h-10 w-10 text-green-500" />
                <h2 className="text-xl font-bold">Asistencia Virtual</h2>
                <p className="text-sm text-gray-500 text-center">Chat automatizado para responder tus preguntas y guiarte en tu compra.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Únete a Nuestra Comunidad</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Recibe noticias sobre tecnología sostenible, ofertas exclusivas y tips para cuidar tus dispositivos.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Ingresa tu email" type="email" />
                  <Button type="submit">Suscribirse</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 TechRecycle. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}