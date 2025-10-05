import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Play, ArrowRight, Settings, Cog, Gear } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gears */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted">
        {/* Decorative gears */}
        <div className="absolute top-20 left-20 opacity-10">
          <Settings className="h-32 w-32 text-primary animate-spin" style={{ animationDuration: '20s' }} />
        </div>
        <div className="absolute top-40 right-32 opacity-8">
          <Cog className="h-24 w-24 text-primary animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
        </div>
        <div className="absolute bottom-32 left-1/4 opacity-6">
          <Settings className="h-16 w-16 text-primary animate-spin" style={{ animationDuration: '25s' }} />
        </div>
        <div className="absolute bottom-20 right-20 opacity-10">
          <Cog className="h-28 w-28 text-primary animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }} />
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/30" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative">
              <Settings className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-primary">COG</span>
              <span className="text-foreground">NIFY</span>
            </h1>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your{" "}
              <span className="text-primary">Whiteboard Lessons</span>
              <br />
              Into Professional Videos
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Harness the power of AI to capture, enhance, and transform your educational content into engaging video experiences. The future of teaching is here.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
            <Button 
              size="lg" 
              className="h-12 px-8 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground border border-primary/20 shadow-lg"
              onClick={onGetStarted}
            >
              Begin Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>


        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </section>
  );
}