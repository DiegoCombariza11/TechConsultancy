import { Recycle, ShoppingBag } from 'lucide-react';
import Link from 'next/link'
import { Button } from "../components/ui/button";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <Recycle className="h-6 w-6 text-green-600" />
        <span className="ml-2 text-2xl font-bold text-gray-700">TechRecycle</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">Inicio</Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/catalog">Catálogo</Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/recycle">Reciclaje</Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/blog">Blog</Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">Contacto</Link>
      </nav>
      <div className="flex items-center gap-4 ml-4">
        <Button>
          <ShoppingBag className="h-5 w-5" />
          <span className="sr-only">Carrito de compras</span>
        </Button>
        <Button>Iniciar sesión</Button>
      </div>
    </header>
  )
}

export default Header
