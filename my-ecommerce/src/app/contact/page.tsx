import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Recycle, ShoppingBag, MessageCircle, Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Recycle className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-gray-700">TechRecycle</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Inicio
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/catalogo">
            Catálogo
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/recycle">
            Reciclaje
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/blog">
            Blog
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contacto
          </Link>
        </nav>
        <div className="flex items-center gap-4 ml-4">
        <Button variant="ghost" size="icon">
            <Link href="/carrito">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Carrito de compras</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm">Iniciar sesión</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Contáctanos
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros para cualquier consulta o sugerencia.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-8">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Nombre
                      </label>
                      <Input id="first-name" required />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Apellido
                      </label>
                      <Input id="last-name" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Correo electrónico
                    </label>
                    <Input id="email" type="email" required />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Asunto
                    </label>
                    <Input id="subject" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Mensaje
                    </label>
                    <Textarea id="message" required className="min-h-[150px]" />
                  </div>
                  <Button type="submit" className="w-full">Enviar mensaje</Button>
                </form>
              </div>
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Información de contacto</h2>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-2 text-green-600" />
                        <span>info@techrecycle.com</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-2 text-green-600" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-green-600" />
                        <span>123 Calle Tecnología, Ciudad Eco, 12345</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Horario de atención</h2>
                    <ul className="space-y-2">
                      <li>Lunes - Viernes: 9:00 AM - 6:00 PM</li>
                      <li>Sábado: 10:00 AM - 2:00 PM</li>
                      <li>Domingo: Cerrado</li>
                    </ul>
                  </CardContent>
                </Card>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835253576489!2d144.96305931531907!3d-37.8172099797523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1635131371064!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><Link href="/catalogo" className="text-gray-500 hover:text-gray-700">Catálogo</Link></li>
                <li><Link href="/recycle" className="text-gray-500 hover:text-gray-700">Reciclaje</Link></li>
                <li><Link href="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link></li>
                <li><Link href="/contact" className="text-gray-500 hover:text-gray-700">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Soporte</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-500 hover:text-gray-700">FAQ</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-gray-700">Envíos</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-gray-700">Devoluciones</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-gray-700">Garantía</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-500 hover:text-gray-700">Términos de Servicio</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-gray-700">Política de Privacidad</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-xs text-gray-500">© 2024 TechRecycle. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-4 right-4">
        <Button size="icon" className="rounded-full w-12 h-12 bg-blue-500 hover:bg-blue-600">
          <MessageCircle className="h-6 w-6 text-white" />
          <span className="sr-only">Abrir chat de asistencia</span>
        </Button>
      </div>
    </div>
  )
}