import { BarChart3, Clock, FileText, Zap, ListChecks  } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: <ListChecks className="h-10 w-10 text-primary" />,
      title: 'Manage Applications',
      description:
        'Easily keep track of your job applications and stay organized throughout the hiring process.',
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: 'Smart Resume Builder',
      description:
        'Create professional, customizable resumes in minutes with templates that highlight your strengths.',
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: 'AI-Powered Insights',
      description:
        'Use artificial intelligence to analyze your application data and get actionable suggestions.',
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: 'Time Tracking',
      description:
        'Track deadlines, interviews, and follow-ups so you never miss an opportunity.',
    },
  ]

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Everything You Need to Land Your Next Job
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Career Manager helps you organize job applications, build
            professional resumes, and make smarter decisions with AI-driven
            insights — all in one streamlined platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
