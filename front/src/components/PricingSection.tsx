import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Check } from 'lucide-react'

export default function PricingSection() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$12',
      description:
        'Great for those starting their career journey and organizing first applications.',
      features: [
        'Manage up to 10 applications',
        'Basic resume builder',
        'Email reminders for deadlines',
        'Access to support articles',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$29',
      description:
        'Perfect for active job seekers who want advanced tools to stand out.',
      features: [
        'Unlimited applications',
        'Advanced resume and cover letter tools',
        'AI insights and tips',
        'Priority email support',
        'Export resume to PDF',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$79',
      description:
        'Ideal for professionals managing multiple roles or working with recruiters.',
      features: [
        'Advanced analytics on job performance',
        'One-on-one resume review',
        'Custom resume templates',
        'Personalized job suggestions',
        'Career coaching session',
        'Priority support',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Choose the plan that's right for you. All plans include a 14-day
            free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col ${plan.popular ? 'border-primary shadow-lg relative' : 'border shadow'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="flex items-baseline mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
