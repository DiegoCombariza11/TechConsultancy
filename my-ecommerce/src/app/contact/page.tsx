'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Recycle, ShoppingBag, MessageCircle, Mail, Phone, MapPin, Menu } from 'lucide-react'

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-100 to-green-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-800">
                  Contáctanos
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros para cualquier consulta o sugerencia.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Envíanos un mensaje</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nombre
                        </label>
                        <Input id="first-name" required className="bg-white" />
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                          Apellido
                        </label>
                        <Input id="last-name" required className="bg-white" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Correo electrónico
                      </label>
                      <Input id="email" type="email" required className="bg-white" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Asunto
                      </label>
                      <Input id="subject" required className="bg-white" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensaje
                      </label>
                      <Textarea id="message" required className="min-h-[150px] bg-white" />
                    </div>
                    <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white transition-colors">Enviar mensaje</Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-8">
                <Card className="overflow-hidden bg-blue-50">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Información de contacto</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center">
                        <Mail className="h-5 w-5 mr-2 text-green-600" />
                        <span className="text-gray-600">info@techrecycle.com</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <Phone className="h-5 w-5 mr-2 text-green-600" />
                        <span className="text-gray-600">+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <MapPin className="h-5 w-5 mr-2 text-green-600" />
                        <span className="text-gray-600">123 Calle Tecnología, Ciudad Eco, 12345</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden bg-green-50">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Horario de atención</h2>
                    <ul className="space-y-2 text-center text-gray-600">
                      <li>Lunes - Viernes: 9:00 AM - 6:00 PM</li>
                      <li>Sábado: 10:00 AM - 2:00 PM</li>
                      <li>Domingo: Cerrado</li>
                    </ul>
                  </CardContent>
                </Card>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2043.1914122646695!2d-72.9414993877752!3d5.705705169199126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a45cb8472448f%3A0x63b776a002185d75!2sUniversidad%20Pedag%C3%B3gica%20y%20Tecnol%C3%B3gica%20de%20Colombia%20-%20Sede%20Sogamoso!5e0!3m2!1ses!2sco!4v1731915803228!5m2!1ses!2sco" 
                width="600" height="450" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
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
        <Button size="icon" className="rounded-full w-12 h-12 bg-green-500 hover:bg-green-600 text-white shadow-lg transition-colors">
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Abrir chat de asistencia</span>
        </Button>
      </div>
    </div>
  )
}