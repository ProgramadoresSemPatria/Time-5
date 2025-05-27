import CtaSection from '@/components/landing-page/CtaSection'
import FeaturesSection from '@/components/landing-page/FeaturesSection'
import Footer from '@/components/landing-page/Footer'
import HeroSection from '@/components/landing-page/HeroSection'
import NewHeader from '@/components/landing-page/NewHeader'
import PricingSection from '@/components/landing-page/PricingSection'
import TestimonialsSection from '@/components/landing-page/TestimonialsSection'

export default function LandingPage() {
  return (
    <div>
      <NewHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
