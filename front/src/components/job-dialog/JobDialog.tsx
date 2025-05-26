import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { DialogDescription } from '@radix-ui/react-dialog'
import { Plus } from 'lucide-react'
import { CreateJobForm } from '@/forms/create-job-form'

export function JobDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          className="bg-violet-600 hover:bg-violet-700 rounded-lg flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add new job
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center text-center text-xl font-bold tracking-tight text-violet-800">
            New application
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-muted-foreground">
            Register your new job application
          </DialogDescription>
        </DialogHeader>
        <CreateJobForm />
      </DialogContent>
    </Dialog>
  )
}
