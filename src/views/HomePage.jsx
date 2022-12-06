import React from "react";
import Header from "../components/header/header.component";
import Info from "../components/info/info.component";
import About from "../components/about/about.component";
import Projects from "../components/projects/projects.component";
import Contact from "../components/contact/contact.component";
import Footer from "../components/footer/footer.component";

const HomePage = () => {
  return (
    <div id="homepage">
      <a href="mailto:ritutwinkle10@gmail.com" className="infoEmail">
        ritutwinkle10@gmail.com
      </a>
      <Header>
        <Info />
        <hr />
        <About />
        <div>
          <hr />
          <Projects />
          <hr />
          <Contact />
        </div>
      </Header>
      <Footer />
    </div>
  );
};

export default HomePage;
