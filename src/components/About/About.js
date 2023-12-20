import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! I'm <strong>Subhayan</strong> and I'm a frontend developer
            who just started out his career in 2023.My areas of interest in
            tech are web technologies and also web3. I also work in scrpting
            stuff and in general I like to keep myself updated with latest
            technologies.😁
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
