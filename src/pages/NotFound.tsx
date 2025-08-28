import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-paper px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="sketch-card p-12 mb-8">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-8xl font-sketch font-bold text-primary mb-4 animate-sketch-wiggle">
              404
            </div>
            <div className="flex justify-center gap-4 text-4xl mb-6">
              <span className="animate-bounce">📝</span>
              <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>❓</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🤔</span>
            </div>
          </div>

          <h1 className="text-4xl font-sketch font-bold mb-4 sketch-underline">
            Oops! Page Not Found
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 font-handwritten leading-relaxed">
            Looks like this page decided to take a coffee break! ☕<br />
            Don't worry, even the best developers get lost sometimes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button className="btn-sketch-primary" asChild>
              <a href="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </a>
            </Button>
            <Button className="btn-sketch" onClick={() => window.history.back()}>
              <Search className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>

          {/* Fun Error Message */}
          <div className="sketch-card p-6 bg-primary/5 border-primary/20 max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Coffee className="h-6 w-6 text-primary" />
              <h3 className="font-sketch text-lg font-semibold text-primary">
                Dev Note
              </h3>
            </div>
            <p className="font-handwritten text-sm text-muted-foreground">
              "The page you're looking for is probably having an existential crisis. 
              We're working on therapy for our URLs! 🛠️"
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <p className="font-handwritten text-sm text-muted-foreground">
          You tried to visit: <code className="bg-muted px-2 py-1 rounded font-mono text-xs">{location.pathname}</code>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
