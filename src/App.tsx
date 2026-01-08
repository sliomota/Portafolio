import { useState } from "react";
import Header from "./components/header";
import { MainLayout } from "./components/mainlayout";
import { Hero } from "./components/hero";
import { Proyects } from "./components/proyects";
import { About } from "./components/about";
function App() {
  return (
    <>
      <Header></Header>
      <MainLayout>
        <Hero></Hero>
        <About></About>
        <Proyects></Proyects>
      </MainLayout>
    </>
  );
}

export default App;
