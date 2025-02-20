import Experience from "./Sections/Experience";
import Hero from "./Sections/Hero";
import Skills from "./Sections/Skills";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen p-3 md:p-6 space-y-2 md:space-y-4">
      <Hero></Hero>
      <Experience></Experience>
      <Skills></Skills>
    </div>
  );
};

export default App;
