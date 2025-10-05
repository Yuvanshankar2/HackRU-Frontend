import { Settings, Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex justify-center py-8 md:py-12">
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Settings className="h-6 w-6 text-primary" />
              <span className="font-bold">COGNIFY</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Harness AI-powered intelligence to transform your educational content into engaging video experiences.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="flex justify-center py-6">
          <p className="text-xs text-muted-foreground">
            © 2024 COGNIFY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}