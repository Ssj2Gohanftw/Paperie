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
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Login in to your account</CardDescription>
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
            </CardContent>
            <CardFooter>
              <Button>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="registration">
          <Card>
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
            <CardFooter>
              <Button>Sign Up</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default AuthenticationForm;
