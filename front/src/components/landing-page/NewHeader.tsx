import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '../ui/button'
import { Menu, X } from 'lucide-react'
import Logo from '@/../assets/logo-transparent.png'

export default function NewHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="logo" className="h-40" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-sm font-medium hover:text-primary"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium hover:text-primary"
          >
            Testimonials
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary">
            Pricing
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            Blog
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <NavLink to={'/sign-in'}>
            <Button variant="ghost" size="sm" className="cursor-pointer">
              Log in
            </Button>
          </NavLink>
          <NavLink to={'/sign-up'}>
            <Button size="sm" className="cursor-pointer">
              Get Started
            </Button>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container py-4 pb-6 border-b">
          <nav className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="ghost" size="sm" className="justify-start">
                Log in
              </Button>
              <Button size="sm" className="justify-start">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
