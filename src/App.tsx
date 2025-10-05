// This is the main page for our application.

import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { Welcome } from "./components/Welcome";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "login" | "welcome">("home");

  const navigateToLogin = () => setCurrentPage("login");
  const navigateToHome = () => setCurrentPage("home");
  const navigateToWelcome = () => setCurrentPage("welcome");

  if (currentPage === "login") {
    return <Login onBackToHome={navigateToHome} onLogin={navigateToWelcome} />;
  }

  if (currentPage === "welcome") {
    return <Welcome onBackToHome={navigateToHome} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header onGetStarted={navigateToLogin} />
      <main className="flex-1">
        <Hero onGetStarted={navigateToLogin} />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}