import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
    const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

    const revealContainer = useRef(null);

    useEffect(() => {
        sr.reveal(revealContainer.current, srConfig());
    }, []);

    const skills = ['JavaScript (ES6+)', 'HTML & (S)CSS', 'React', 'Vue', 'Node.js', 'WordPress'];

    return (
        <StyledAboutSection id="about" ref={revealContainer}>
            <h2 className="numbered-heading">About Me</h2>

            <div className="inner">
                <StyledText>
                    <div>
                        <p>Linux System Administrator at <a href="https://singlebucks.blogspot.com/2022/06/joined-wipro-limited-as-scholar-trainee.html" target="_blank" rel="noopener noreferrer">Wipro</a> and M. Tech Computing Systems and Infrastructure student at BITS
                            Pilani.</p>
                        <p>Completed BCA from Aryabhata Knowledge University Patna, showcasing a strong foundation in computer science.
                        </p>
                        <p>Passionate about technology and continuously exploring new projects and opportunities.</p>
                        <p>I have a keen interest in open-source development and have contributed to various projects,
                            which can be found on my <a href="https://github.com/flyingsonu122" target="_blank" rel="noopener noreferrer">GitHub</a> profile.</p>

                        <p>Additionally, I maintain a <a href="https://singlebucks.blogspot.com" target="_blank" rel="noopener noreferrer">personal website</a> where I share my thoughts and experiences:
                        </p>
                        <p>I am open to new opportunities and collaborations, so don't hesitate to connect with me on <a href="https://www.linkedin.com/in/sonukumarkushwaha" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </p>
                        <p>Here are a few technologies I've been working with recently:</p>
                    </div>

                    <ul className="skills-list">
                        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                </StyledText>

                <StyledPic>
                    <div className="wrapper">
                        <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />
                    </div>
                </StyledPic>
            </div>
        </StyledAboutSection>
    );
};

export default About;
