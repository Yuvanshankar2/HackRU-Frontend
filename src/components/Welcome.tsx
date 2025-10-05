import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Settings, Cog, ArrowRight, Upload, Video, Download, Zap } from "lucide-react";

interface WelcomeProps {
  onBackToHome: () => void;
}

export function Welcome({ onBackToHome }: WelcomeProps) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
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

      {/* Header */}
      <header className="relative z-10 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight">
                <span className="text-primary">COG</span>
                <span className="text-foreground">NIFY</span>
              </h1>
            </div>
            <Button 
              variant="outline" 
              onClick={onBackToHome}
              className="border-primary/30 hover:bg-primary/10 hover:border-primary/50"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        <div className="container px-4 md:px-6 mx-auto py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            
            {/* Welcome Header */}
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="relative">
                  <Settings className="h-16 w-16 text-primary" />
                </div>
              </div>
              
              <Badge variant="secondary" className="px-6 py-2 border border-primary/20 bg-card/50 backdrop-blur-sm">
                ⚙️ System Activated
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Welcome to{" "}
                <span className="text-primary">COGNIFY</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Your educational content transformation engine is now operational. Begin harnessing the power of mechanical precision to create extraordinary learning experiences.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="relative overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative">
                      <Upload className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary/90 transition-colors duration-300">
                    Upload Content
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    Begin by uploading your whiteboard content or educational materials to the processing chamber.
                  </CardDescription>
                </CardContent>
                <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Settings className="h-16 w-16 text-primary" />
                </div>
              </Card>

              <Card className="relative overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative">
                      <Zap className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary/90 transition-colors duration-300">
                    Process & Enhance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    Watch as our AI-powered engines analyze and enhance your content with mechanical precision.
                  </CardDescription>
                </CardContent>
                <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Settings className="h-16 w-16 text-primary" />
                </div>
              </Card>

              <Card className="relative overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative">
                      <Video className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary/90 transition-colors duration-300">
                    Generate Videos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    Export polished educational videos ready for distribution and classroom use.
                  </CardDescription>
                </CardContent>
                <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Settings className="h-16 w-16 text-primary" />
                </div>
              </Card>
            </div>

            {/* Get Started Button */}
            <div className="pt-8">
              <Button 
                size="lg" 
                className="h-12 px-8 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground border border-primary/20 shadow-lg"
              >
                Start Creating
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex h-16 items-center justify-center">
            <p className="text-muted-foreground">
              © 2025 COGNIFY. Engineered for educational excellence.
            </p>
          </div>
        </div>
      </footer>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </div>
  );
}