"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Globe,
  Linkedin,
  Github,
  Twitter,
  Plus,
  Trash2,
  Upload,
  Edit,
  Save,
} from "lucide-react";
import DashboardHeader from "@/components/dashboard-header";
import SkillBadge from "@/components/skill-badge";
import ExperienceItem from "@/components/experience-item";
import EducationItem from "@/components/education-item";
import ResumeItem from "@/components/resume-item";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "JavaScript",
    "UI/UX Design",
    "CSS",
    "HTML",
    "Git",
    "Agile",
    "Project Management",
  ];

  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "São Paulo, Brazil",
      startDate: "Jan 2022",
      endDate: "Present",
      description:
        "Led the development of the company's main product using React and TypeScript. Implemented new features and improved performance by 40%.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "InnovateLabs",
      location: "Remote",
      startDate: "Mar 2020",
      endDate: "Dec 2021",
      description:
        "Worked on multiple client projects using React, Next.js, and various frontend technologies.",
    },
    {
      id: 3,
      title: "Web Developer",
      company: "StartupBR",
      location: "Rio de Janeiro, Brazil",
      startDate: "Jun 2018",
      endDate: "Feb 2020",
      description:
        "Developed and maintained the company website and internal tools.",
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: "Federal University of Rio de Janeiro",
      location: "Rio de Janeiro, Brazil",
      startDate: "2014",
      endDate: "2018",
      description: "Focused on web development and software engineering.",
    },
    {
      id: 2,
      degree: "Full Stack Web Development Bootcamp",
      institution: "Coding Academy",
      location: "Online",
      startDate: "2019",
      endDate: "2019",
      description:
        "Intensive 12-week program covering modern web development technologies.",
    },
  ];

  const resumes = [
    {
      id: 1,
      name: "Luam_Silva_Resume_Frontend.pdf",
      lastUpdated: "April 20, 2025",
      size: "1.2 MB",
      isPrimary: true,
    },
    {
      id: 2,
      name: "Luam_Silva_Resume_Full_Stack.pdf",
      lastUpdated: "March 15, 2025",
      size: "1.3 MB",
      isPrimary: false,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1">
        <DashboardHeader username="Luam" />

        <main className="p-6">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-purple-900 mb-2">
                My Profile
              </h1>
              <p className="text-muted-foreground">
                Manage your personal information and resume details
              </p>
            </div>
            <Button
              variant={isEditing ? "outline" : "default"}
              className={isEditing ? "" : "bg-purple-600 hover:bg-purple-700"}
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? (
                <>
                  <Save className="mr-2 h-4 w-4" /> Save Changes
                </>
              ) : (
                <>
                  <Edit className="mr-2 h-4 w-4" /> Edit Profile
                </>
              )}
            </Button>
          </div>

          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="bg-white border border-purple-100 mb-6">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="professional">Professional</TabsTrigger>
              <TabsTrigger value="resumes">Resumes</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Personal Info Tab */}
            <TabsContent value="personal">
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="lg:col-span-1 border-purple-100">
                  <CardHeader className="bg-purple-50 border-b border-purple-100">
                    <CardTitle>Profile Picture</CardTitle>
                    <CardDescription>
                      Your profile photo will be visible to recruiters
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 flex flex-col items-center">
                    <Avatar className="h-32 w-32 border-4 border-purple-200 mb-4">
                      <AvatarImage src="/placeholder.svg" alt="Luam Silva" />
                      <AvatarFallback className="bg-purple-100 text-purple-800 text-2xl">
                        LS
                      </AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm">
                          <Upload className="mr-2 h-4 w-4" /> Upload
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-500 hover:text-red-600"
                        >
                          <Trash2 className="mr-2 h-4 w-4" /> Remove
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="lg:col-span-2 border-purple-100">
                  <CardHeader className="bg-purple-50 border-b border-purple-100">
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Your basic information visible to recruiters
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          defaultValue="Luam Ramlow"
                          disabled={!isEditing}
                          className={isEditing ? "border-purple-200" : ""}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="jobTitle">Job Title</Label>
                        <Input
                          id="jobTitle"
                          defaultValue="Senior Frontend Developer"
                          disabled={!isEditing}
                          className={isEditing ? "border-purple-200" : ""}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue="luam.silva@example.com"
                          disabled={!isEditing}
                          className={isEditing ? "border-purple-200" : ""}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          defaultValue="+55 11 98765-4321"
                          disabled={!isEditing}
                          className={isEditing ? "border-purple-200" : ""}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          defaultValue="São Paulo, Brazil"
                          disabled={!isEditing}
                          className={isEditing ? "border-purple-200" : ""}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          defaultValue="https://luamsilva.dev"
                          disabled={!isEditing}
                          className={isEditing ? "border-purple-200" : ""}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="lg:col-span-3 border-purple-100">
                  <CardHeader className="bg-purple-50 border-b border-purple-100">
                    <CardTitle>About Me</CardTitle>
                    <CardDescription>
                      Write a brief introduction about yourself
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Textarea
                      className={`min-h-32 ${isEditing ? "border-purple-200" : ""}`}
                      placeholder="Write something about yourself..."
                      defaultValue="Senior Frontend Developer with over 5 years of experience building modern web applications. Passionate about creating intuitive user interfaces and optimizing web performance. Experienced in React, TypeScript, and Next.js. Currently looking for new opportunities in tech companies with innovative products."
                      disabled={!isEditing}
                    />
                  </CardContent>
                </Card>

                <Card className="lg:col-span-3 border-purple-100">
                  <CardHeader className="bg-purple-50 border-b border-purple-100 flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Social Profiles</CardTitle>
                      <CardDescription>
                        Your professional profiles across the web
                      </CardDescription>
                    </div>
                    {isEditing && (
                      <Button variant="outline" size="sm">
                        <Plus className="mr-2 h-4 w-4" /> Add Profile
                      </Button>
                    )}
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="flex items-center gap-3">
                        <Linkedin className="h-5 w-5 text-blue-600" />
                        <div className="flex-1">
                          <Input
                            defaultValue="https://linkedin.com/in/luamsilva"
                            disabled={!isEditing}
                            className={isEditing ? "border-purple-200" : ""}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Github className="h-5 w-5 text-gray-800" />
                        <div className="flex-1">
                          <Input
                            defaultValue="https://github.com/luamsilva"
                            disabled={!isEditing}
                            className={isEditing ? "border-purple-200" : ""}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Twitter className="h-5 w-5 text-blue-400" />
                        <div className="flex-1">
                          <Input
                            defaultValue="https://twitter.com/luamsilva"
                            disabled={!isEditing}
                            className={isEditing ? "border-purple-200" : ""}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-green-600" />
                        <div className="flex-1">
                          <Input
                            defaultValue="https://luamsilva.dev"
                            disabled={!isEditing}
                            className={isEditing ? "border-purple-200" : ""}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Professional Tab */}
            <TabsContent value="professional">
              <div className="grid gap-6">
                <Card className="border-purple-100">
                  <CardHeader className="bg-purple-50 border-b border-purple-100 flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Skills</CardTitle>
                      <CardDescription>
                        Highlight your professional skills
                      </CardDescription>
                    </div>
                    {isEditing && (
                      <Button variant="outline" size="sm">
                        <Plus className="mr-2 h-4 w-4" /> Add Skill
                      </Button>
                    )}
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <SkillBadge
                          key={index}
                          skill={skill}
                          isEditing={isEditing}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-100">
                  <CardHeader className="bg-purple-50 border-b border-purple-100 flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Work Experience</CardTitle>
                      <CardDescription>
                        Your professional work history
                      </CardDescription>
                    </div>
                    {isEditing && (
                      <Button variant="outline" size="sm">
                        <Plus className="mr-2 h-4 w-4" /> Add Experience
                      </Button>
                    )}
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      {experiences.map((experience, index) => (
                        <ExperienceItem
                          key={experience.id}
                          experience={experience}
                          isEditing={isEditing}
                          isLast={index === experiences.length - 1}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-100">
                  <CardHeader className="bg-purple-50 border-b border-purple-100 flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Education</CardTitle>
                      <CardDescription>
                        Your academic background
                      </CardDescription>
                    </div>
                    {isEditing && (
                      <Button variant="outline" size="sm">
                        <Plus className="mr-2 h-4 w-4" /> Add Education
                      </Button>
                    )}
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      {education.map((edu, index) => (
                        <EducationItem
                          key={edu.id}
                          education={edu}
                          isEditing={isEditing}
                          isLast={index === education.length - 1}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Resumes Tab */}
            <TabsContent value="resumes">
              <Card className="border-purple-100">
                <CardHeader className="bg-purple-50 border-b border-purple-100 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>My Resumes</CardTitle>
                    <CardDescription>
                      Manage your resume versions
                    </CardDescription>
                  </div>
                  {isEditing && (
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Upload className="mr-2 h-4 w-4" /> Upload Resume
                    </Button>
                  )}
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {resumes.map((resume) => (
                      <ResumeItem
                        key={resume.id}
                        resume={resume}
                        isEditing={isEditing}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="border-purple-100">
                  <CardHeader className="bg-purple-50 border-b border-purple-100">
                    <CardTitle>Job Preferences</CardTitle>
                    <CardDescription>
                      Set your job search preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Open to Work</Label>
                          <p className="text-sm text-muted-foreground">
                            Show recruiters you're open to new opportunities
                          </p>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>
                      <Separator />
                      <div className="space-y-4">
                        <Label>Job Types</Label>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                            Full-time
                          </Badge>
                          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                            Part-time
                          </Badge>
                          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                            Contract
                          </Badge>
                          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                            Freelance
                          </Badge>
                          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                            Remote
                          </Badge>
                        </div>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <Label htmlFor="location">Preferred Location</Label>
                        <Input
                          id="location"
                          defaultValue="São Paulo, Brazil"
                          disabled={!isEditing}
                          className={isEditing ? "border-purple-200" : ""}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="salary">Expected Salary (Annual)</Label>
                        <Input
                          id="salary"
                          defaultValue="R$ 120,000"
                          disabled={!isEditing}
                          className={isEditing ? "border-purple-200" : ""}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-100">
                  <CardHeader className="bg-purple-50 border-b border-purple-100">
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>
                      Manage how you receive notifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive updates about your applications via email
                          </p>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Job Recommendations</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive personalized job recommendations
                          </p>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Application Deadlines</Label>
                          <p className="text-sm text-muted-foreground">
                            Get reminders about upcoming application deadlines
                          </p>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Marketing Communications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive updates about new features and promotions
                          </p>
                        </div>
                        <Switch defaultChecked={false} />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="lg:col-span-2 border-purple-100">
                  <CardHeader className="bg-purple-50 border-b border-purple-100">
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>
                      Manage your account preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            defaultValue="luam.silva@example.com"
                            disabled={!isEditing}
                            className={isEditing ? "border-purple-200" : ""}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <Input
                            id="password"
                            type="password"
                            defaultValue="••••••••••••"
                            disabled={!isEditing}
                            className={isEditing ? "border-purple-200" : ""}
                          />
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-red-600">Delete Account</Label>
                          <p className="text-sm text-muted-foreground">
                            Permanently delete your account and all data
                          </p>
                        </div>
                        <Button variant="destructive" size="sm">
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
