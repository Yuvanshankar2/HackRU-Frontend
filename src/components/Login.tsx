import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Settings, Lock, ArrowLeft } from "lucide-react";

interface LoginProps {
  onBackToHome: () => void;
  onLogin: () => void;
}

export function Login({ onBackToHome, onLogin }: LoginProps) {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background with gears */}
      <div className="absolute inset-0">
        {/* Large background gears */}
        <div className="absolute top-10 right-20 opacity-5">
          <Settings className="h-64 w-64 text-primary animate-spin" style={{ animationDuration: '60s' }} />
        </div>
        <div className="absolute bottom-20 left-20 opacity-5">
          <Settings className="h-48 w-48 text-primary animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />
        </div>
        <div className="absolute top-32 left-1/4 opacity-3">
          <Settings className="h-32 w-32 text-primary animate-spin" style={{ animationDuration: '30s' }} />
        </div>
        <div className="absolute bottom-32 right-1/3 opacity-3">
          <Settings className="h-40 w-40 text-primary animate-spin" style={{ animationDuration: '50s', animationDirection: 'reverse' }} />
        </div>
        
        {/* Additional smaller gears */}
        <div className="absolute top-1/4 right-1/4 opacity-4">
          <Settings className="h-20 w-20 text-primary animate-spin" style={{ animationDuration: '25s' }} />
        </div>
        <div className="absolute bottom-1/4 left-1/3 opacity-4">
          <Settings className="h-16 w-16 text-primary animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        </div>
      </div>

      {/* Back button */}
      <button
        onClick={onBackToHome}
        className="absolute top-6 left-6 z-20 flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="text-sm">Back to Home</span>
      </button>

      {/* Main login container */}
      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        {/* Logo and branding */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <div className="relative">
              <Settings className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              <span className="text-primary">COG</span>
              <span className="text-foreground">NIFY</span>
            </h1>
          </div>
        </div>

        {/* Tab buttons */}
        <div className="flex mb-6">
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-3 px-4 text-center transition-all duration-200 ${
              activeTab === "login"
                ? "bg-primary text-primary-foreground"
                : "bg-card/50 text-muted-foreground hover:text-foreground"
            }`}
            style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`flex-1 py-3 px-4 text-center transition-all duration-200 ${
              activeTab === "signup"
                ? "bg-primary text-primary-foreground"
                : "bg-card/50 text-muted-foreground hover:text-foreground"
            }`}
            style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}
          >
            Sign Up
          </button>
        </div>

        {/* Login form */}
        <Card className="border border-border/50 bg-card/70 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="text-center space-y-2">
              <h2 className="text-lg font-medium text-foreground">Welcome back</h2>
              <p className="text-sm text-muted-foreground">
                Enter your credentials to access your account
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Email field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="youexample.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-input-background border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20"
              />
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm text-foreground">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-input-background border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20"
              />
            </div>

            {/* Forgot password link */}
            <div className="flex justify-end">
              <button className="text-sm text-primary hover:text-primary/80 transition-colors">
                Forgot password?
              </button>
            </div>

            {/* Supabase security note */}
            <div className="flex items-center space-x-2 text-xs text-muted-foreground bg-muted/20 rounded-md p-3 border border-border/30">
              <Lock className="h-3 w-3 text-primary" />
              <span>Secure authentication powered by Supabase</span>
            </div>

            {/* Login button */}
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              size="lg"
              onClick={onLogin}
            >
              Log In
            </Button>
          </CardContent>
        </Card>

        {/* Decorative diamond */}
        <div className="flex justify-center mt-6">
          <div className="w-2 h-2 bg-primary/60 rotate-45"></div>
        </div>
      </div>
    </div>
  );
}