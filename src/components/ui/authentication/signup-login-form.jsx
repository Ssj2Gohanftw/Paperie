import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
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
const AuthenticationForm = () => {
  return (
    <div className="flex items-center justify-center">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="registration">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card className="flex mb-10 ">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Login in to your account</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="name" className="pb-1">
                  Name
                </Label>
                <Input id="name" />
              </div>
              <div>
                <Label htmlFor="email" className="pb-1 pt-1">
                  Email
                </Label>
                <Input id="email" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                variant="secondary"
                className="bg-green-500 hover:bg-green-700 text-white"
              >
                Login
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="registration">
          <Card className="mb-10">
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>Create an account!</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                variant="secondary"
                className="bg-green-500 hover:bg-green-700 text-white"
              >
                Sign Up
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default AuthenticationForm;
