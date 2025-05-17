"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  }

  return (
    <div className="flex flex-col">
      <h1 className="pt-5 text-3xl md:text-5xl font-bold mb-4 text-center">
        Admin Login
      </h1>
      <div className="flex justify-center items-center mt-10 ">
        <form onSubmit={handleSubmit} className="">
          <Card className="flex mb-10 w-96 shadow ">
            <CardHeader>
              <CardTitle className="text-2xl md:text-4xl">Login</CardTitle>
              <CardDescription className="text-md">
                Login in as Admin
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="Username" className="pb-1 text-xl">
                  Username
                </Label>
                <Input
                  id="Username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="pb-1 text-xl">
                  Password
                </Label>
                <Input
                  id="email"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                type="submit"
                variant="secondary"
                className="bg-green-500 text-white text-md  hover:bg-green-700 p-5"
              >
                Login
              </Button>
              {error && <div className="text-red-500 text-center">{error}</div>}
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
}
