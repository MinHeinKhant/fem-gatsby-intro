import React from "react";
import styled from "@emotion/styled";
import { Link, graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

// const BgImg = styled("div")`
const BgImg = styled(BackgroundImage)`
  /* background-image: url("/images/nicole-mm.jpg"); */

  background-position: bottom 20% center;
  background-size: cover;
  height: 50vh;

  + * {
    margin-top: 0;
  }
`;

const TextBox = styled("div")`
  background: linear-gradient(to top, #ddbbffdd 3.2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 55rem) / 2) 3.2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 3.6rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
    margin-bottom: 4rem;
  }

  a {
    margin-top: 0.8rem;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "nicole-mm.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    // <BgImg>
    <BgImg Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>Gatsby Intro &hearts;</h1>
        <p>
          Hey <Link to="/about/">Learn about me! &rarr;</Link>
        </p>
      </TextBox>
    </BgImg>
  );
};

export default Hero;
