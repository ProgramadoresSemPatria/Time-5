"use client";

import { useState } from "react";
import { GraduationCap, MapPin, Calendar, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

interface EducationProps {
  education: {
    id: number;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  };
  isEditing: boolean;
  isLast: boolean;
}

export default function EducationItem({
  education,
  isEditing,
  isLast,
}: EducationProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      {isEditing && isExpanded ? (
        <div className="space-y-4 border border-purple-200 rounded-lg p-4 bg-purple-50/50">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`degree-${education.id}`}>Degree</Label>
              <Input
                id={`degree-${education.id}`}
                defaultValue={education.degree}
                className="border-purple-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`institution-${education.id}`}>Institution</Label>
              <Input
                id={`institution-${education.id}`}
                defaultValue={education.institution}
                className="border-purple-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`location-${education.id}`}>Location</Label>
              <Input
                id={`location-${education.id}`}
                defaultValue={education.location}
                className="border-purple-200"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor={`startDate-${education.id}`}>Start Year</Label>
                <Input
                  id={`startDate-${education.id}`}
                  defaultValue={education.startDate}
                  className="border-purple-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`endDate-${education.id}`}>End Year</Label>
                <Input
                  id={`endDate-${education.id}`}
                  defaultValue={education.endDate}
                  className="border-purple-200"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor={`description-${education.id}`}>Description</Label>
            <Textarea
              id={`description-${education.id}`}
              defaultValue={education.description}
              className="min-h-24 border-purple-200"
            />
          </div>
          <div className="flex justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsExpanded(false)}
            >
              Cancel
            </Button>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </Button>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                Save
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          {isEditing && (
            <div className="absolute right-0 top-0 space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setIsExpanded(true)}
              >
                <Edit className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-red-500 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          )}
          <div className="space-y-2">
            <div>
              <h3 className="text-lg font-semibold text-purple-900">
                {education.degree}
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <GraduationCap className="mr-1 h-4 w-4" />
                  {education.institution}
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-1 h-4 w-4" />
                  {education.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  {education.startDate} - {education.endDate}
                </div>
              </div>
            </div>
            <p className="text-sm">{education.description}</p>
          </div>
          {!isLast && <Separator className="mt-6" />}
        </div>
      )}
    </div>
  );
}
