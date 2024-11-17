'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent } from "@/components/ui/card"
import { Recycle, ShoppingBag, MessageCircle, Trash2, Plus, Minus } from 'lucide-react'

// Dummy data for cart items
const initialCartItems = [
  { id: 1, name: "Laptop Reacondicionada", price: 599, quantity: 1, image: "/placeholder.svg" },
  { id: 2, name: "Smartphone Nuevo", price: 799, quantity: 1, image: "/placeholder.svg" },
  { id: 3, name: "Tablet Reacondicionada", price: 299, quantity: 2, image: "/placeholder.svg" },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
    ).filter(item => item.quantity > 0))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.1 // Assuming 10% tax
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
              Tu Carrito de Compras
            </h1>
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                {cartItems.length === 0 ? (
                  <p className="text-center text-gray-500">Tu carrito está vacío.</p>
                ) : (
                  cartItems.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="rounded-md"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-sm text-gray-500">Precio: ${item.price}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                              className="w-16 text-center"
                            />
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-5 w-5 text-red-500" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Resumen del Pedido</h2>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Impuestos</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-6" disabled={cartItems.length === 0}>
                      Proceder al Pago
                    </Button>
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