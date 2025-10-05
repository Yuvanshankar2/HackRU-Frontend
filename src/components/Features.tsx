import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Brain, Cog, Zap, Cpu, Gauge, Settings } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Cognitive Enhancement",
    description: "Advanced neural networks analyze and enhance your educational content with intelligent recognition patterns.",
    badge: "Neural-Powered"
  },
  {
    icon: Cog,
    title: "Mechanical Precision",
    description: "Engineered algorithms ensure pixel-perfect capture and processing of your whiteboard content.",
    badge: "Precision-Built"
  },
  {
    icon: Zap,
    title: "Lightning Generation",
    description: "Harness electrical processing power to transform raw content into polished educational experiences.",
    badge: "High-Voltage"
  },
  {
    icon: Cpu,
    title: "Processing Engine",
    description: "Steam-powered computational engines deliver unmatched performance in content transformation.",
    badge: "Engine-Driven"
  },
  {
    icon: Gauge,
    title: "Performance Metrics",
    description: "Monitor and optimize your content creation workflow with precision instruments and analytics.",
    badge: "Measured"
  },
  {
    icon: Settings,
    title: "Configuration Control",
    description: "Fine-tune every aspect of your video generation process with mechanical precision controls.",
    badge: "Adjustable"
  }
];

export function Features() {
  return (
    <section id="features" className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background with mechanical elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30">
        <div className="absolute top-10 right-10 opacity-5">
          <Cog className="h-40 w-40 text-primary animate-spin" style={{ animationDuration: '30s' }} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-5">
          <Settings className="h-32 w-32 text-primary animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
        </div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Engineered for
              <br />
              <span className="text-primary">Educational Excellence</span>
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl leading-relaxed">
              Every component has been meticulously crafted and calibrated to deliver unparalleled educational content creation capabilities.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="relative">
                    <feature.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <Badge 
                    variant="outline" 
                    className="border-primary/30 text-primary/80 bg-primary/5"
                  >
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-left group-hover:text-primary/90 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-left leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
              
              {/* Decorative gear in corner */}
              <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Settings className="h-16 w-16 text-primary" />
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </section>
  );
}