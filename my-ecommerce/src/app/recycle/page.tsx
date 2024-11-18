'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Recycle, ShoppingBag, MessageCircle, CheckCircle2, ChevronDown, Menu } from 'lucide-react'

export default function RecycleProgramPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Programa de Reciclaje
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Contribuye al cuidado del medio ambiente y obtén beneficios al reciclar tus dispositivos electrónicos.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild className="bg-white text-green-600 hover:bg-green-100">
                  <a href="#recycle-form">Reciclar ahora</a>
                </Button>
                <Button variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white/20">
                  <a href="#faq">Preguntas frecuentes</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-800">
              ¿Por qué reciclar con nosotros?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gradient-to-br from-green-100 to-blue-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Recycle className="h-12 w-12 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-800">Impacto Ambiental</h3>
                  <p className="text-center text-gray-600">
                    Reduce la contaminación y conserva recursos naturales al reciclar tus dispositivos electrónicos.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-100 to-green-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <ShoppingBag className="h-12 w-12 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-800">Beneficios Económicos</h3>
                  <p className="text-center text-gray-600">
                    Obtén descuentos en tus próximas compras o bonos canjeables en nuestra tienda.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-100 to-blue-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-800">Proceso Seguro</h3>
                  <p className="text-center text-gray-600">
                    Garantizamos la eliminación segura de tus datos personales en todos los dispositivos reciclados.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-100 to-green-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-800">
              Cómo funciona
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Llena el formulario", description: "Proporciona la información de tu dispositivo a reciclar." },
                { title: "Recibe una valoración", description: "Te enviaremos una estimación del valor de tu dispositivo." },
                { title: "Envía tu dispositivo", description: "Usa nuestro servicio de envío gratuito o déjalo en nuestras oficinas." },
                { title: "Recibe tu recompensa", description: "Obtén un descuento o bono para usar en nuestra tienda." }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white w-16 h-16 flex items-center justify-center text-xl font-bold mb-4 shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="recycle-form" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-800">
              Recicla tu dispositivo
            </h2>
            <form className="max-w-md mx-auto space-y-4 bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg shadow-xl">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico
                </label>
                <Input id="email" type="email" placeholder="tu@email.com" className="w-full" />
              </div>
              <div>
                <label htmlFor="device-type" className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de dispositivo
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smartphone">Smartphone</SelectItem>
                    <SelectItem value="tablet">Tablet</SelectItem>
                    <SelectItem value="laptop">Laptop</SelectItem>
                    <SelectItem value="desktop">Desktop</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
                  Marca
                </label>
                <Input id="brand" placeholder="Ej. Apple, Samsung, Dell" />
              </div>
              <div>
                <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                  Modelo
                </label>
                <Input id="model" placeholder="Ej. iPhone 12, Galaxy S21" />
              </div>
              <div>
                <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-1">
                  Estado del dispositivo
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">Como nuevo</SelectItem>
                    <SelectItem value="good">Bueno</SelectItem>
                    <SelectItem value="fair">Regular</SelectItem>
                    <SelectItem value="poor">Malo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="device-photos" className="block text-sm font-medium text-gray-700 mb-1">
                  Fotos del dispositivo
                </label>
                <Input id="device-photos" type="file" multiple accept="image/*" className="w-full" />
                <p className="text-sm text-gray-500 mt-1">Puedes adjuntar hasta 3 fotos de tu dispositivo</p>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Descripción adicional
                </label>
                <Textarea id="description" placeholder="Proporciona detalles adicionales sobre el estado o características de tu dispositivo" />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
                Enviar solicitud de reciclaje
              </Button>
            </form>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-800">
              Preguntas Frecuentes
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
              {[
                {
                  question: "¿Qué dispositivos puedo reciclar?",
                  answer: "Aceptamos una amplia gama de dispositivos electrónicos, incluyendo smartphones, tablets, laptops, desktops, monitores, impresoras y más. Si tienes dudas sobre un dispositivo específico, no dudes en contactarnos."
                },
                {
                  question: "¿Cómo se determina el valor de mi dispositivo?",
                  answer: "El valor se determina basándose en varios factores, incluyendo el tipo de dispositivo, la marca, el modelo, la edad y el estado. Nuestro equipo de expertos evaluará tu dispositivo y te proporcionará una oferta justa."
                },
                {
                  question: "¿Qué pasa con mis datos personales?",
                  answer: "La seguridad de tus datos es nuestra prioridad. Utilizamos software especializado para borrar completamente todos los datos personales de los dispositivos que recibimos. También te recomendamos realizar un respaldo y borrar tus datos antes de enviarnos el dispositivo."
                },
                {
                  question: "¿Cómo recibo mi recompensa?",
                  answer: "Una vez que hayamos recibido y evaluado tu dispositivo, te enviaremos un código de descuento o un bono que podrás utilizar en tu próxima compra en nuestra tienda en línea. También ofrecemos la opción de recibir el valor en efectivo a través de transferencia bancaria."
                }
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><Link href="/catalogo" className="text-gray-600 hover:text-green-600 transition-colors">Catálogo</Link></li>
                <li><Link href="/recycle" className="text-gray-600 hover:text-green-600 transition-colors">Reciclaje</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-green-600 transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-green-600 transition-colors">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Soporte</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">FAQ</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">Envíos</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">Devoluciones</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">Garantía</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">Términos de Servicio</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">Política de Privacidad</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Síguenos</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
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
        <Button size="icon" className="rounded-full w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 shadow-lg">
          <MessageCircle className="h-6 w-6 text-white" />
          <span className="sr-only">Abrir chat de asistencia</span>
        </Button>
      </div>
    </div>
  )
}