'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Recycle, ShoppingBag, MessageCircle } from 'lucide-react'

// Asumimos que estas funciones están implementadas en otro archivo
import { initMercadoPago, createPreference } from '@/lib/mercadopago'

// Datos de ejemplo del carrito
const cartItems = [
  { id: 1, name: "Laptop Reacondicionada", price: 599, quantity: 1, image: "/placeholder.svg" },
  { id: 2, name: "Smartphone Nuevo", price: 799, quantity: 1, image: "/placeholder.svg" },
]

export default function CheckoutPage() {
  const [preferenceId, setPreferenceId] = useState<string | null>(null)
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  })

  useEffect(() => {
    // Inicializar Mercado Pago
    initMercadoPago('TU_PUBLIC_KEY')
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí deberías validar los datos del usuario antes de crear la preferencia
    const preference = await createPreference(cartItems, userInfo)
    setPreferenceId(preference.id)
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.1 // Asumiendo 10% de impuestos
  const total = subtotal + tax

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
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Carrito de compras</span>
          </Button>
          <Button variant="ghost" size="sm">Iniciar sesión</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
              Finalizar Compra
            </h1>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Resumen del Pedido</h2>
                <Card>
                  <CardContent className="p-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 mb-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="rounded-md"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-gray-500">
                            Cantidad: {item.quantity} x ${item.price}
                          </p>
                        </div>
                        <p className="font-semibold">${item.price * item.quantity}</p>
                      </div>
                    ))}
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Impuestos</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Información de Envío y Pago</h2>
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Nombre Completo</Label>
                          <Input
                            id="name"
                            name="name"
                            value={userInfo.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Correo Electrónico</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={userInfo.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={userInfo.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="address">Dirección</Label>
                        <Input
                          id="address"
                          name="address"
                          value={userInfo.address}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">Ciudad</Label>
                          <Input
                            id="city"
                            name="city"
                            value={userInfo.city}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">Estado/Provincia</Label>
                          <Input
                            id="state"
                            name="state"
                            value={userInfo.state}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">Código Postal</Label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            value={userInfo.zipCode}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <Button type="submit" className="w-full">
                        Proceder al Pago
                      </Button>
                    </form>
                    {preferenceId && (
                      <div id="wallet_container" className="mt-4"></div>
                    )}
                  </CardContent>
                </Card>
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
                <li><Link href="/catalog" className="text-gray-500 hover:text-gray-700">Catálogo</Link></li>
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