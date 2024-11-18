import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
//import { Select } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Recycle, ShoppingBag, MessageCircle, CheckCircle2, ChevronDown } from 'lucide-react'

export default function RecycleProgramPage() {
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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/catalog">
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
                  Programa de Reciclaje
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Contribuye al cuidado del medio ambiente y obtén beneficios al reciclar tus dispositivos electrónicos.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <a href="#recycle-form">Reciclar ahora</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#faq">Preguntas frecuentes</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              ¿Por qué reciclar con nosotros?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Recycle className="h-12 w-12 text-green-500" />
                  <h3 className="text-xl font-bold">Impacto Ambiental</h3>
                  <p className="text-center text-gray-500">
                    Reduce la contaminación y conserva recursos naturales al reciclar tus dispositivos electrónicos.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <ShoppingBag className="h-12 w-12 text-blue-500" />
                  <h3 className="text-xl font-bold">Beneficios Económicos</h3>
                  <p className="text-center text-gray-500">
                    Obtén descuentos en tus próximas compras o bonos canjeables en nuestra tienda.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <CheckCircle2 className="h-12 w-12 text-green-500" />
                  <h3 className="text-xl font-bold">Proceso Seguro</h3>
                  <p className="text-center text-gray-500">
                    Garantizamos la eliminación segura de tus datos personales en todos los dispositivos reciclados.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Cómo funciona
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-500 text-white w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Llena el formulario</h3>
                <p className="text-gray-500">Proporciona la información de tu dispositivo a reciclar.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-500 text-white w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Recibe una valoración</h3>
                <p className="text-gray-500">Te enviaremos una estimación del valor de tu dispositivo.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-500 text-white w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Envía tu dispositivo</h3>
                <p className="text-gray-500">Usa nuestro servicio de envío gratuito o déjalo en nuestras oficinas.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-500 text-white w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">4</div>
                <h3 className="text-xl font-bold mb-2">Recibe tu recompensa</h3>
                <p className="text-gray-500">Obtén un descuento o bono para usar en nuestra tienda.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="recycle-form" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Recicla tu dispositivo
            </h2>
            <form className="max-w-md mx-auto space-y-4">
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
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      Selecciona un tipo
                      <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuItem>Smartphone</DropdownMenuItem>
                    <DropdownMenuItem>Tablet</DropdownMenuItem>
                    <DropdownMenuItem>Laptop</DropdownMenuItem>
                    <DropdownMenuItem>Desktop</DropdownMenuItem>
                    <DropdownMenuItem>Otro</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      Selecciona un estado
                      <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuItem>Como nuevo</DropdownMenuItem>
                    <DropdownMenuItem>Bueno</DropdownMenuItem>
                    <DropdownMenuItem>Regular</DropdownMenuItem>
                    <DropdownMenuItem>Malo</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
              <Button type="submit" className="w-full">Enviar solicitud de reciclaje</Button>
            </form>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Preguntas Frecuentes
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Qué dispositivos puedo reciclar?</AccordionTrigger>
                <AccordionContent>
                  Aceptamos una amplia gama de dispositivos electrónicos, incluyendo smartphones, tablets, laptops, desktops, monitores, impresoras y más. Si tienes dudas sobre un dispositivo específico, no dudes en contactarnos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>¿Cómo se determina el valor de mi dispositivo?</AccordionTrigger>
                <AccordionContent>
                  El valor se determina basándose en varios factores, incluyendo el tipo de dispositivo, la marca, el modelo, la edad y el estado. Nuestro equipo de expertos evaluará tu dispositivo y te proporcionará una oferta justa.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>¿Qué pasa con mis datos personales?</AccordionTrigger>
                <AccordionContent>
                  La seguridad de tus datos es nuestra prioridad. Utilizamos software especializado para borrar completamente todos los datos personales de los dispositivos que recibimos. También te recomendamos realizar un respaldo y borrar tus datos antes de enviarnos el dispositivo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>¿Cómo recibo mi recompensa?</AccordionTrigger>
                <AccordionContent>
                  Una vez que hayamos recibido y evaluado tu dispositivo, te enviaremos un código de descuento o un bono que podrás utilizar en tu próxima compra en nuestra tienda en línea. También ofrecemos la opción de recibir el valor en efectivo a través de transferencia bancaria.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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