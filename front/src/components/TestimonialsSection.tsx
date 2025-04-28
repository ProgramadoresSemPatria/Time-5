import { Card, CardContent } from './ui/card'
import { Quote } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'With Career Manager, I can easily track all my job applications. I’ve never missed a deadline since I started using it!',
      author: 'Ana Martins',
      role: 'UX Designer, FutureWorks',
    },
    {
      quote:
        'Creating and updating my resume became incredibly simple. I highlighted my most relevant experiences in just a few clicks.',
      author: 'João Pedro Lima',
      role: 'Full Stack Developer, CodeNow',
    },
    {
      quote:
        'The AI suggestions helped me understand what to improve in my resume. It made a big difference during my interviews!',
      author: 'Larissa Oliveira',
      role: 'Data Analyst, InsightTech',
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Loved by People Everywhere
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Don't just take our word for it. Here's what our customers have to
            say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="p-6 flex flex-col h-full">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="flex-grow mb-6 italic text-lg">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
