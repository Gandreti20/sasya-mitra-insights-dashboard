
import { useState } from "react";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Login successful", {
        description: "Welcome back to Sasya Mitra!",
      });
      navigate("/");
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sasya-green/5 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-green-200 opacity-10 animate-pulse" />
        <div className="absolute left-1/4 top-96 w-32 h-32 rounded-full bg-blue-200 opacity-10 animate-pulse" 
          style={{ animationDelay: '0.5s' }} />
        <div className="absolute right-1/3 bottom-1/4 w-48 h-48 rounded-full bg-green-300 opacity-5 animate-pulse"
          style={{ animationDelay: '0.8s' }} />
      </div>
    
      <Card className="w-full max-w-md animate-fade-in">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-sasya-green/90 mb-2">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            <span className="text-sasya-green">Aedaa</span> | Sasya Mitra
          </CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your farm dashboard
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="farmer@example.com" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-xs text-sasya-green hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button 
              type="submit" 
              className="w-full bg-sasya-green hover:bg-sasya-green-dark hover-scale"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
            <p className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-sasya-green hover:underline">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
