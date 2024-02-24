import React from "react";
import profileImage from "../../assets/large/";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
        <img src={profileImage} style={{ width: "100%" }} alt="large" />
          </div>
          <p>
            Hi there! I'm Savannah Williams, a 26-year-old from the Bay Area. I have a BA in Theology and Religious Studies from Saint Mary's College of California. Although most of my academic background revolves around Theology, I have decided to pursue coding!
          </p>
          <p>Beyond my professional commitments, I enjoy anything and everything that involves art. Music, poetry, fashion, and culinary arts all inspire me to live life to the fullest.</p>
          <p>The things that make me happiest aside from coding are cups of chai, the winter season, and my dog Finnick.</p>
        </div>
      </div>
    </section>
  );
}

export default About;