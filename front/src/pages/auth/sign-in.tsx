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
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/sign-in";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export interface FormDataType {
  email: string;
  password: string;
}

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5173/login",
        formData
      );
      console.log(formData);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {}
  };
  return (
    <main className="flex w-full h-screen justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold tracking-tight">
            Entre com sua conta
          </CardTitle>
          <CardDescription>Utilize seu email e senha</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" placeholder="exemplo@gmail.com" type="email" />
            </div>
            <div className="my-5 flex flex-col gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" placeholder="password" type="password" />
            </div>
            <Button className="w-full bg-primary" onClick={() => {}}>
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
