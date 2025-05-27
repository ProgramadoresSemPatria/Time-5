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

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-none">
            <Link to="/" className="flex items-center space-x-2">
              <img src={Logo} alt="logo" className="h-40" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary"
              onClick={(e) => handleSmoothScroll(e, 'features')}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-primary"
              onClick={(e) => handleSmoothScroll(e, 'testimonials')}
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-primary"
              onClick={(e) => handleSmoothScroll(e, 'pricing')}
            >
              Pricing
            </a>
          </nav>

          {/* Action Buttons */}
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
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-sm font-medium hover:text-primary"
                onClick={(e) => handleSmoothScroll(e, 'features')}
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium hover:text-primary"
                onClick={(e) => handleSmoothScroll(e, 'testimonials')}
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium hover:text-primary"
                onClick={(e) => handleSmoothScroll(e, 'pricing')}
              >
                Pricing
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Link to="/auth">
                  <Button variant="ghost" className="w-full">
                    Sign in
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
