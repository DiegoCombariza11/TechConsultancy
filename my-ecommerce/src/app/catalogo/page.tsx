"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Recycle, ShoppingBag, MessageCircle, Search, Menu } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";

// Dummy data for demonstration
const products = [
  { id: 1, name: "Laptop Reacondicionada", price: 599, status: "reacondicionado", image: "/placeholder.svg", category: "Laptops" },
  { id: 2, name: "Smartphone Nuevo", price: 799, status: "nuevo", image: "/placeholder.svg", category: "Smartphones" },
  { id: 3, name: "Tablet Reacondicionada", price: 299, status: "reacondicionado", image: "/placeholder.svg", category: "Tablets" },
  { id: 4, name: "Monitor LED Nuevo", price: 199, status: "nuevo", image: "/placeholder.svg", category: "Accesorios" },
  { id: 5, name: "Teclado Inalámbrico", price: 49, status: "nuevo", image: "/placeholder.svg", category: "Accesorios" },
  { id: 6, name: "Mouse Ergonómico", price: 39, status: "nuevo", image: "/placeholder.svg", category: "Accesorios" },
];

export default function CatalogPage() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = products.filter(product => 
    (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
    product.price >= priceRange[0] && product.price <= priceRange[1] &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    if (sortOrder === "price-asc") return a.price - b.price;
    if (sortOrder === "price-desc") return b.price - a.price;
    if (sortOrder === "name-asc") return a.name.localeCompare(b.name);
    if (sortOrder === "name-desc") return b.name.localeCompare(a.name);
    return 0;
  });

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
          <Link href="/carrito">
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Carrito de compras</span>
            </Button>
          </Link>
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center text-gray-800">
              Catálogo de Productos
            </h1>
            <div className="grid gap-6 lg:grid-cols-4">
              <div className="lg:col-span-1 space-y-6 bg-white p-6 rounded-lg shadow-md">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Filtros</h2>
                  <Select onValueChange={(value) => console.log(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos los productos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los productos</SelectItem>
                      <SelectItem value="new">Nuevos</SelectItem>
                      <SelectItem value="refurbished">Reacondicionados</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <h3 className="text-md font-semibold mb-2">Categorías</h3>
                  <div className="space-y-2">
                    {["Laptops", "Smartphones", "Tablets", "Accesorios"].map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <label htmlFor={category} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {category}
                        </label>
                      </div>
                    ))}
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
                    className="mb-2"
                  />
                  <div className="flex justify-between mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                  <div className="relative w-full md:w-auto">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      className="pl-8 w-full"
                      placeholder="Buscar productos"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Select onValueChange={(value) => setSortOrder(value)}>
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Ordenar por</SelectItem>
                      <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
                      <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
                      <SelectItem value="name-asc">Nombre: A-Z</SelectItem>
                      <SelectItem value="name-desc">Nombre: Z-A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <Card key={product.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                      <CardContent className="p-4">
                        <div className="aspect-square relative mb-4">
                          <Image
                            src={product.image}
                            alt={product.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                          />
                        </div>
                        <h3 className="text-lg font-semibold line-clamp-2">{product.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">${product.price}</p>
                        <Badge variant={product.status === 'nuevo' ? 'default' : 'secondary'}>
                          {product.status}
                        </Badge>
                      </CardContent>
                      <CardFooter className="p-4">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Agregar al carrito</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
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
  );
}