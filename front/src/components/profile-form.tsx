import { useForm } from "react-hook-form";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@radix-ui/react-switch";
import { useState } from "react";

// @TODO: handle the right data from the backend.

type ProfileFormData = {
  isEditing: boolean;
  userId: string;
  name: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  website: string;
};

const ProfileForm = ({ isEditing }: { isEditing: boolean }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    defaultValues: {
      name: "Luam Silva", // Example default value
      email: "luam.silva@example.com",
      bio: "I am a full-stack developer.",
      location: "São Paulo, Brazil",
    },
  });

  const [isOpenToWork, setIsOpenToWork] = useState(true);

  const onSubmit = (data: ProfileFormData) => {
    console.log("Form submitted with data:", data);
    // Handle form submission, e.g., update user profile
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="border-purple-100">
        <CardHeader className="bg-purple-50 border-b border-purple-100">
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Edit your profile details</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
                disabled={!isEditing}
                className={isEditing ? "border-purple-200" : ""}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                disabled={!isEditing}
                className={isEditing ? "border-purple-200" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Input
                id="bio"
                {...register("bio")}
                disabled={!isEditing}
                className={isEditing ? "border-purple-200" : ""}
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                {...register("location")}
                disabled={!isEditing}
                className={isEditing ? "border-purple-200" : ""}
              />
            </div>

            {/* Open to Work */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Open to Work</Label>
                <p className="text-sm text-muted-foreground">
                  Show recruiters you're open to new opportunities
                </p>
              </div>
              <Switch
                id="openToWork"
                checked={isOpenToWork}
                onCheckedChange={(checked) => setIsOpenToWork(checked)}
                disabled={!isEditing}
              />
            </div>

            <Separator />
            {/* Submit Button */}
            {isEditing && (
              <Button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700"
              >
                Save Changes
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default ProfileForm;
