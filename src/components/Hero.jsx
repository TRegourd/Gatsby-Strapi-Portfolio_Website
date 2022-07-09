import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import { GatsbyImage } from "gatsby-plugin-image";
import SocialLinks from "../constants/social_links";

const Hero = () => {
  const data = useStaticQuery(query);

  console.log(data);

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Ridge Coding</h1>
            <h4>Web and Mobile Development</h4>
            <Link to="/contact" className="btn">
              Contact Us
            </Link>
            <SocialLinks />
          </div>
        </article>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          alt="hero-img"
          className="hero-img"
        ></GatsbyImage>
      </div>
    </header>
  );
};

export default Hero;

export const query = graphql`
  {
    file(relativePath: { eq: "hero.png" }) {
      id
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
