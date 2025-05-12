import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Resume Management Made Simple
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl flex flex-col sm:flex-row gap-3 items-center sm:items-start sm:justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                An easy way to store information about your current job
                applications.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 items-center sm:items-start sm:justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button size="lg" className="font-medium">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </motion.div>
            <motion.p
              className="text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              No credit card required. 14-day free trial.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl">
              <video
                src="/Exemplo.mp4"
                autoPlay
                muted
                loop
                controls
                playsInline
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
