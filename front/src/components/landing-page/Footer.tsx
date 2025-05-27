import githubIcon from '@/../assets/github-icon.png'
import Logo from '@/../assets/logo-transparent.png' // Importe a mesma imagem que você usa no cabeçalho

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-muted py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Seção Principal do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Coluna da esquerda - Logo e Descrição */}
          <div className="md:col-span-5">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <img
                  src={Logo}
                  alt="Career Manager Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-bold text-xl">Career Manager</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Career Manager helps you streamline your job search, organize your
              applications, and create professional resumes—all in one place.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ProgramadoresSemPatria/Time-5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img src={githubIcon} alt="github icon" className="h-6" />
              </a>
            </div>
          </div>

          {/* Colunas do meio e direita - Links */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#features"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#privacy"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="w-full border-t border-border my-8" />

        {/* Rodapé com Copyright */}
        <div className="text-sm text-muted-foreground">
          <p>&copy; {currentYear} Career Manager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
