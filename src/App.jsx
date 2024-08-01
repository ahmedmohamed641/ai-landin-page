 // TODO: CHECK ALL THE FILES AND REMOVE UNUSED IMPORTS
 // TODO: REMOVE FILES THAT ARE NOT USED, SOME FILES ARE FULL OF ERRORS
 // TODO: MAKE NAVBAR LINKS INTERACTIVE
 // TODO: SITE IS NOT MOBILE RESPONSIVE
 
 
 // todo: remove unsused imports
import { Button, Typography, Container, ButtonGroup } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ApplicationSection from "./components/ApplicationSection/ApplicationSection";
import ProcessSection from "./components/ProcessSection/ProcessSection";
import TeamSection from "./components/TeamSection/TeamSection";
import QuestionSection from "./components/QuestionSection/QuesionSection";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import PartnersSection from "./components/PartnersSection/PartnersSection";
import BlogsSection from "./components/BlogsSection/BlogsSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Container className="landing-page" maxWidth="xl">
        <Navbar />
        <HeroSection />
      </Container>

      <AboutSection />
      <ApplicationSection />
      <ProcessSection />
      <TeamSection />
      <QuestionSection />
      <ReviewSection />
      <PartnersSection />
      <BlogsSection />
      <Footer />
    </>
  );
}

export default App;
