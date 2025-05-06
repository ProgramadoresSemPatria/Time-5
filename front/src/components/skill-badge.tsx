import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface SkillBadgeProps {
  skill: string;
  isEditing: boolean;
}

export default function SkillBadge({ skill, isEditing }: SkillBadgeProps) {
  return (
    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 py-1.5 px-3 text-sm font-medium">
      {skill}
      {isEditing && (
        <button className="ml-1 hover:bg-purple-200 rounded-full">
          <X className="h-3 w-3" />
          <span className="sr-only">Remove {skill}</span>
        </button>
      )}
    </Badge>
  );
}
