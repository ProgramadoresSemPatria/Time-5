import { FileText, Download, Trash2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ResumeProps {
  resume: {
    id: number;
    name: string;
    lastUpdated: string;
    size: string;
    isPrimary: boolean;
  };
  isEditing: boolean;
}

export default function ResumeItem({ resume, isEditing }: ResumeProps) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
      <div className="flex items-center gap-3">
        <div className="bg-purple-100 p-2 rounded-lg">
          <FileText className="h-6 w-6 text-purple-700" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="font-medium">{resume.name}</p>
            {resume.isPrimary && (
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                <Check className="mr-1 h-3 w-3" /> Primary
              </Badge>
            )}
          </div>
          <div className="text-sm text-muted-foreground">
            Last updated: {resume.lastUpdated} • {resume.size}
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Download className="h-4 w-4" />
          <span className="sr-only">Download</span>
        </Button>
        {isEditing && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-red-500 hover:text-red-600"
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Delete</span>
          </Button>
        )}
      </div>
    </div>
  );
}
