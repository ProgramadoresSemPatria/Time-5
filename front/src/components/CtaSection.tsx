import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

export default function CtaSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Take control of your job search today.
          </h2>
          <p className="text-primary-foreground/90 md:text-lg max-w-[600px]">
            Join thousands of professionals using Career Manager to track their
            applications, build standout resumes, and land their next
            opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" className="font-medium">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground"
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="text-xs text-primary-foreground/80">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </div>
    </section>
  )
}
