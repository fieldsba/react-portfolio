import coverImage from "../../assets/cover/cover-image.jpg";
import React from 'react';

function About() {
  return (
    <section>
      <h1 id="about">Alex Fields: Full Stack Web Developer</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="blue and pink gradient background" />
    </section>
  );
}

export default About;