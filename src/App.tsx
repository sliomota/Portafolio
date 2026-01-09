import Header from "./components/header";
import { MainLayout } from "./components/mainlayout";
import { Hero } from "./components/hero";
import { Proyects } from "./components/proyects";
import { ExperienceCard } from "./components/experiencecard";
import { About } from "./components/about";
function App() {
  return (
    <>
      <Header></Header>
      <MainLayout>
        <Hero></Hero>
        <ExperienceCard></ExperienceCard>
        <About></About>
        <Proyects></Proyects>
      </MainLayout>
    </>
  );
}

export default App;
