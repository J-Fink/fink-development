import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import BasicPageStyles from '../styles/BasicPageStyles';
import Projects from './Projects';
import Technologies from './Technologies';

const WelcomeStyles = styled.div`
    text-align: center;
    line-height: 2.5rem;
    width: 100vw;
    --avatarImgHeight: 100%;
    --avatarImgWidth: 100%;
    --introTop: -483px;
    --introLeft: 145px;
    --h1Top: -445px;
    p {
        overflow-wrap: anywhere;
        max-width: 1200px;
        text-align: center;
        padding: 0 50px;
        margin: auto auto 25px auto;
    }
    .flex-container {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        margin-left: 15px;
        margin-right: 15px;
        margin-bottom: 25px;
        p {
            margin: 0 0 25px 0;
            max-width: 400px;
            text-align: left;
        }
    }
    
    .mobile-image { //allows me to target the actual img tag so the round circle shows up on mobile
        border-radius:50%;
    }
    .gatsby-image-wrapper {
        border-radius: 50%;

    }
    
    h1 {
      top: var(--h1Top);
      font-size: 9rem;
      margin: 45px auto 0 auto;
      line-height: normal;
    }
    @media (max-width: 500px) {
        .flex-container {
            flex-direction: column;
            p {
                margin-bottom: 25px;
            }
        }
    }
    
    p a {
        text-decoration: none;
        font-style: italic;
        color: var(--textColor);
        text-transform: uppercase;
    }
    p a:hover {
        color: var(--anchorTextHoverColor); /*var(--navTextHoverColor);*/
        text-decoration: underline;
    }
  @media (hover: none) {//on mobile where there is no hover, this makes it so the color doesn't change on click and get stuck in the 'hover' state
    p a:hover {
        color: var(--textColor);
    } 
  }
`;
export default function Welcome() {
    return (
        <BasicPageStyles>
            <WelcomeStyles>
                <h1>WELCOME!</h1>
                <span className="flex-container">
                    <p>Hello, my name is Joe and I'm glad you're here!<br/>
                    I'm a husband, a dad, and a web developer.In 2019 I started intentionally spending time learning how to program and figure out this mystery that is <span className="emphasis">technology</span>. Learn more about my journey <Link to="/about">HERE</Link></p>
                    <StaticImage
                    imgClassName="mobile-image" //this allows me to add border radius to the image directly, because when it was on the wrapper it was not showing up on mobile
                    alt="Joe speaks into a microphone"
                    src="../assets/images/joeFromTheSide.jpg"
                    placeholder="traced SVG"
                    layout="constrained"
                    width={400}
                    height={400}
                    // aspectRatio={16/9}
                    />
                </span>
                <section>
                    <h2>Skills and Technologies</h2>
                    <p>Troubleshooting and research (i.e. GOOGLING) are skills I use EVERYDAY. Tools I've been using include:
                    </p>
                    <Technologies />    
                </section>
                <section>
                    <h2>What I've Been Up To</h2>
                    <Projects />
                </section>
            </WelcomeStyles>
        </BasicPageStyles>
    )
}