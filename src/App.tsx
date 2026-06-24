import Header from "./components/header";
import { MainLayout } from "./components/mainlayout";
import { Hero } from "./components/hero";
import { Proyects } from "./components/proyects";
import { ExperienceSection } from "./components/experiencesection";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { About } from "./components/about";
function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <Header></Header>
      <MainLayout>
        <Hero></Hero>
        <ExperienceSection></ExperienceSection>
        <About></About>
        <Proyects></Proyects>
      </MainLayout>
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;
