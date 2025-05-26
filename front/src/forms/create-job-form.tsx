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

// interface CreateJobFormProps {
//   documentData: Document
//   closeModal: () => void
// }

export function CreateJobForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm<CreateJobFormData>({
    resolver: zodResolver(createJobSchema),
    defaultValues: {
      status: 'APPLIED', // adiciona isso
    },
  })

  async function onSubmit(data: CreateJobFormData) {
    console.log(data)
    console.log('eai')
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
          name="status"
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
        <Button type="submit">Create</Button>
      </DialogFooter>
    </form>
  )
}
