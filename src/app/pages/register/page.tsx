'use client'
import * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
// shadcn/ui
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import "../../globals.css";
// hook
import { useForm } from "react-hook-form"
import { Controller } from "react-hook-form"
// type
import { User } from "../../types/user"
// ///////////////////

export default function RegisterPage() {
  // Varibales
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [error, setError] = useState<String[]>([]);
  // Use Form
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<User>();
  // Clear After Handling
  const handleClear = () => {
    setName("");
    setSurname("");
    setEmail("");
    setGender("");
  };
  const handleClickForm = (obj:User) => {
    let data = obj
    console.log(data)
  }
  // Screen
  return (
    <div className="regdiv">
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Your New Account</CardTitle>
        <CardDescription>please fill the fields</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit(handleClickForm)}
        >
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                placeholder="Please Write Your Name"
                value={name} 
                {...register("name", {
                  required: "write your name",
                  pattern: {
                    value: /^[a-zA-Z]*$/,
                    message: "Name need to be letters!",
                  },
                })}
                onChange={(e) => setName(e.target.value)}
                />
              {errors && (
                <p className="ml-3 text-red-400">{errors.name?.message}</p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="surname">Surname</Label>
              <Input 
                id="surname"
                placeholder="Please Write Your Surname" 
                value={surname} 
                {...register("surname",{
                  required:"write your surname",
                  pattern: {
                    value: /^[a-zA-Z]*$/,
                    message:"Surname need to be letters!", 
                  },
                })}
                onChange={(e) => setSurname(e.target.value)}
                />
                {errors && (
                  <p className="ml-3 text-red-400">{errors.surname?.message}</p>
                )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                placeholder="Please Write Your Email" 
                value={email} 
                {...register("email",{
                  required:"write your email",
                  pattern: {
                    value:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message:"example of email: asd@gmail.com!",
                  }
                })}
                onChange={(e) => setEmail(e.target.value)}
                />
                {errors && (
                  <p className="ml-3 text-red-400">{errors.email?.message}</p>
                )}
            </div>
            <div className="flex flex-col space-y-1.5">
            <Controller
              name="gender"
              control={control}
              rules={{ required: "Choose your gender" }}
              render={({ field }) => (
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    setGender(value as "male" | "female");
                    }}
                  value={field.value}
                >
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
                </Select>
              )}
              />
              {errors.gender && (
                <p className="ml-3 text-red-400">{errors.gender.message}</p>
              )}
          <Button variant="outline" type="button" onClick={handleClear}>Cancel</Button>
          <Button type="submit">Register</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}


