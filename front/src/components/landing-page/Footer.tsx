import githubIcon from '@/../assets/github-icon.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gradient-to-br from-slate-50 to-blue-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Left Column - Brand and Description */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">CM</span>
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Career Manager
              </span>
            </div>
            <p className="text-slate-600 mb-6 max-w-lg leading-relaxed text-lg">
              Career Manager helps you streamline your job search, organize your
              applications, and create professional resumes—all in one place.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ProgramadoresSemPatria/Time-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="github icon" className="h-6" />
              </a>
            </div>
          </div>

          {/* Right Columns - Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Product Column */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-6 text-lg">
                Product
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#features"
                    className="text-slate-600 hover:text-purple-600 transition-colors duration-200 block py-1"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-slate-600 hover:text-purple-600 transition-colors duration-200 block py-1"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-slate-600 hover:text-purple-600 transition-colors duration-200 block py-1"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-6 text-lg">
                Company
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#about"
                    className="text-slate-600 hover:text-purple-600 transition-colors duration-200 block py-1"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="text-slate-600 hover:text-purple-600 transition-colors duration-200 block py-1"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-slate-600 hover:text-purple-600 transition-colors duration-200 block py-1"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-6 text-lg">
                Support
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#help"
                    className="text-slate-600 hover:text-purple-600 transition-colors duration-200 block py-1"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="text-slate-600 hover:text-purple-600 transition-colors duration-200 block py-1"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="text-slate-600 hover:text-purple-600 transition-colors duration-200 block py-1"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-8" />

        {/* Copyright Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Career Manager. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-slate-500">
            <span>Made with ❤️ for job seekers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
