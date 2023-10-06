import { AboutMe } from "./sections/AboutMe";
import { Blog } from "./sections/Blog";
import { ContactMe } from "./sections/ContactMe";
import { Hero } from "./sections/Hero";
import { Project } from "./sections/Project";
import { ServiceAndSertif } from "./sections/ServiceAndSertif";
import { Tools } from "./sections/Tools";

function App() {
  return (
    <div>
      <main className="lg:snap-y lg:snap-mandatory h-screen w-screen lg:overflow-scroll lg:overflow-x-hidden">
        <Hero />
        <AboutMe />
        <ServiceAndSertif />
        <Tools />
        <Project />
        <Blog />
        <ContactMe />
      </main>
    </div>
  );
}

export default App;
