import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Recycle, ShoppingBag, MessageCircle, Search } from 'lucide-react'

// Dummy data for demonstration
const products = [
  { id: 1, name: "Laptop Reacondicionada", price: 599, status: "reacondicionado", image: "/placeholder.svg" },
  { id: 2, name: "Smartphone Nuevo", price: 799, status: "nuevo", image: "/placeholder.svg" },
  { id: 3, name: "Tablet Reacondicionada", price: 299, status: "reacondicionado", image: "/placeholder.svg" },
  { id: 4, name: "Monitor LED Nuevo", price: 199, status: "nuevo", image: "/placeholder.svg" },
  { id: 5, name: "Teclado Inalámbrico", price: 49, status: "nuevo", image: "/placeholder.svg" },
  { id: 6, name: "Mouse Ergonómico", price: 39, status: "nuevo", image: "/placeholder.svg" },
]

export default function CatalogPage() {
  const [priceRange, setPriceRange] = useState([0, 1000])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
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
              Catálogo de Productos
            </h1>
            <div className="grid gap-6 lg:grid-cols-4">
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Filtros</h2>
                  <Select>
                    <option value="">Todos los productos</option>
                    <option value="new">Nuevos</option>
                    <option value="refurbished">Reacondicionados</option>
                  </Select>
                </div>
                <div>
                  <h3 className="text-md font-semibold mb-2">Categorías</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>Laptops</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>Smartphones</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>Tablets</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>Accesorios</span>
                    </label>
                  </div>
                </div>
                <div>
                  <h3 className="text-md font-semibold mb-2">Rango de Precio</h3>
                  <Slider
                    min={0}
                    max={1000}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="flex justify-between items-center mb-6">
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input className="pl-8" placeholder="Buscar productos" />
                  </div>
                  <Select>
                    <option value="">Ordenar por</option>
                    <option value="price-asc">Precio: Menor a Mayor</option>
                    <option value="price-desc">Precio: Mayor a Menor</option>
                    <option value="name-asc">Nombre: A-Z</option>
                    <option value="name-desc">Nombre: Z-A</option>
                  </Select>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {products.map((product) => (
                    <Card key={product.id}>
                      <CardContent className="p-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover mb-4"
                        />
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">${product.price}</p>
                        <Badge variant={product.status === 'nuevo' ? 'default' : 'secondary'}>
                          {product.status}
                        </Badge>
                      </CardContent>
                      <CardFooter className="p-4">
                        <Button className="w-full">Agregar al carrito</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
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
      <div className="fixed bottom-4 right-4">
        <Button size="icon" className="rounded-full w-12 h-12 bg-blue-500 hover:bg-blue-600">
          <MessageCircle className="h-6 w-6 text-white" />
          <span className="sr-only">Abrir chat de asistencia</span>
        </Button>
      </div>
    </div>
  )
}