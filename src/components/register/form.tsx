"use client";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRef } from "react"


export function RegisterForm() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const password2InputRef = useRef<HTMLInputElement>(null);


  return (
    <form>
      <Card className="w-full max-w-sm m-auto mt-5">
        <CardHeader>
          <CardTitle className="text-2xl">Cadastro</CardTitle>
          <CardDescription>
            Insira seus dados para se cadastrar.
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input ref={emailInputRef} id="email" type="email" placeholder="seu@email.com.br" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input ref={passwordInputRef} id="password" type="password" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password2">Repita sua senha</Label>
            <Input ref={password2InputRef} id="password" type="password" required />
          </div>

        </CardContent>
        <CardFooter>
          <Button className="w-full ">Cadastrar</Button>
        </CardFooter>
      </Card>
    </form>
  )
}
