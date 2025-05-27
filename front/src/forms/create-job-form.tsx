import { Label } from '@radix-ui/react-label'
import { Textarea } from '@/components/ui/textarea'
import Input from '@/components/ui/input'
import { DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Controller, useForm } from 'react-hook-form'
import { CreateJobFormData, createJobSchema } from '@/schemas/CreateJobSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { createJob } from '@/services/jobs'
import toast from 'react-hot-toast'
import { toastSuccessStyle } from '@/lib/toast-success-style'
import { queryClient } from '@/lib/react-query'
import { toastErrorStyle } from '@/lib/toast-error-style'
import { ApiError } from '@/types/error'

interface CreateJobFormProps {
  closeModal: () => void
}

export function CreateJobForm({ closeModal }: CreateJobFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<CreateJobFormData>({
    resolver: zodResolver(createJobSchema),
    defaultValues: {
      application_status: 'APPLIED',
    },
  })

  const createJobMutation = useMutation({
    mutationFn: createJob,
    onSuccess: () => {
      toast.success('Application added successfully!', toastSuccessStyle)
      reset()
      closeModal()
      queryClient.invalidateQueries({ queryKey: ['jobCards'] })
    },
  })

  async function onSubmit(data: CreateJobFormData) {
    try {
      await createJobMutation.mutateAsync(data)
    } catch (error) {
      const errorMessage = (error as ApiError)?.message
      toast.error(
        errorMessage
          ? `Ocurred an error at your application creation, details: ${errorMessage}. Please contact the support.`
          : 'Ocurred an error at application creation. Please contact the support.',
        toastErrorStyle,
      )
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3">
        <Label htmlFor="companyName">Company name</Label>
        <Input id="companyName" {...register('companyName')} />
        {errors.companyName?.message && (
          <span className="text-sm text-destructive block">
            {errors.companyName.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <Label>Status</Label>
        <Controller
          control={control}
          name="application_status"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select the application status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="APPLIED">Applied</SelectItem>
                <SelectItem value="INTERVIEWING">Interviewing</SelectItem>
                <SelectItem value="OFFERED">Offered</SelectItem>
                <SelectItem value="REJECTED">Rejected</SelectItem>
                <SelectItem value="ACCEPTED">Accepted</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Label htmlFor="link">Link</Label>
        <Input id="link" {...register('link')} />
      </div>

      <div className="flex flex-col gap-3">
        <Label htmlFor="description">Description</Label>
        <Textarea
          className="bg-white"
          id="description"
          {...register('description')}
        />
      </div>

      <DialogFooter>
        <Button type="submit" className="bg-violet-600 hover:bg-violet-700">
          Create
        </Button>
      </DialogFooter>
    </form>
  )
}
