import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Eye, Cpu, Zap, Gauge, Settings, Cog } from "lucide-react";

const steps = [
  {
    icon: Eye,
    title: "Visual Acquisition",
    description: "Advanced optical sensors scan and analyze your whiteboard content with mechanical precision, capturing every detail."
  },
  {
    icon: Cpu,
    title: "Computational Processing",
    description: "Steam-powered processing engines decode and enhance your captured content using cutting-edge algorithmic machinery."
  },
  {
    icon: Zap,
    title: "Electrical Synthesis",
    description: "High-voltage generation systems transform processed data into polished educational video experiences."
  },
  {
    icon: Gauge,
    title: "Performance Calibration",
    description: "Precision instruments optimize and export your content across multiple formats with mechanical accuracy."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background with mechanical elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background">
        <div className="absolute top-20 left-20 opacity-3">
          <Settings className="h-48 w-48 text-primary animate-spin" style={{ animationDuration: '40s' }} />
        </div>
        <div className="absolute bottom-20 right-20 opacity-3">
          <Cog className="h-36 w-36 text-primary animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        </div>
        
        {/* Connecting lines */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/20"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-primary">From Concept to Creation</span>
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl leading-relaxed">
              Our meticulously engineered workflow transforms educational content through a series of precisely calibrated mechanical processes.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl py-12">
          <div className="relative">
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="relative overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 group">

                    
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-all duration-300">
                            <step.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl group-hover:text-primary/90 transition-colors duration-300">
                            {step.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                    
                    {/* Decorative elements */}
                    <div className="absolute -bottom-2 -right-2 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                      <Settings className="h-12 w-12 text-primary" />
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </section>
  );
}