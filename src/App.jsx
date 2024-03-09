import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialMediaAccounts from "./components/SocialMediaAccounts";
import FirstProject from "./components/FirstProject";
import SecondProject from "./components/SecondProject";
import ThirdProject from "./components/ThirdProject";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FourthProject from "./components/FourthProject";
import FifthProject from "./components/FifthProject";
import MoreProjects from "./components/MoreProjects";
import Education from "./components/Education";
import SixthProject from "./components/SixthProject";
function App() {
  return (
    <>
      <main className=" text-white " id="main">
        <Header />
        <Hero />
        <SocialMediaAccounts />
        <About />
        <Education />
        <FirstProject />
        <SecondProject />
        <ThirdProject />
        <FourthProject />
        <FifthProject />
        <SixthProject />
        {/* <MoreProjects /> */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
