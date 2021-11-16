import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import BasicPageStyles from '../styles/BasicPageStyles';
import Projects from './Projects';
import Technologies from './Technologies';

const WelcomeStyles = styled.div`
    position: relative;
    text-align: center;
    line-height: 2.5rem;
    width: 100%;
    --introTop: -483px;
    --introLeft: 145px;
    --h1Top: -445px;
    --avatarWidth: 300px;
    --avatarHeight: 300px;
    p {
        overflow-wrap: anywhere;
        max-width: 1200px;
        text-align: center;
        padding: 0 50px;
        margin: auto auto 25px auto;
    }
    @keyframes slideInAnimation {
        0% {
            height: 0;
            opacity: 0;
        }
        75% {
            opacity: 0;
        }
        100% {
            height: 100;
            opacity: 1;
        }
    }
    @keyframes fadeInAnimation {
        0% {
            opacity: 0;
        }
        75% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    .divider {
        display:inline-block;
        position: relative;
        /* background:blue; */
        /* box-shadow: var(--boxShadow); */
        /* transform: skew(var(--postTitleSkew)); */
        width: 100%;
        height: 50px;
        /* span:nth-child(1), span:nth-child(2) {
            animation: fadeInAnimation ease 2s;
        } */
        span:nth-child(1) {
        mix-blend-mode: normal;
        display: inline-block;
        position: relative;
        width: 100%;
        height: 40px;
        transform: skewY(-1deg) translateY(1px);
        background: var(--navBoxBackgroundColor);
        
    }
    span:nth-child(2) {
        mix-blend-mode: normal;
        display: inline-block;
        position: relative;
        width: 100%;
        height: 68px;
        transform: translateY(-20px);
        background: var(--navBoxBackgroundColor);

    }
    }
    //TO-DO work on setting the animations to start at different times
    .welcome-container {
        height: 100vh;
        width: 100%;
        display: inline-block;
    }
    .welcome-section {
        animation: slideInAnimation ease 1.5s;
        animation-iteration-count: 1;
        transition: opacity 4s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 79vh;

        
        h1 {
            margin-bottom: 55px;
        }
    }
    .flex-container {
        background: var(--welcomeBackgroundColor);
        color: var(--textColorHover);
        box-shadow: var(--boxShadow);
        /* width: 68vw; */
        max-width: 800px;

        /* padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 15px;
        right: 15px; */
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        /* margin-left: 15px; */
        margin-right: auto;
        margin-left: auto;
        /* margin-bottom: 25px; */
        p {
            margin: 0 0 25px 0;
            max-width: 368px;
            text-align: left;
        }
    }
    
    .mobile-image { //allows me to target the actual img tag so the round circle shows up on mobile
        border-radius:50%;
        height: var(--avatarImgHeight);
        width: var(--avatarImgWidth);
    }
    .gatsby-image-wrapper {
        height: var(--avatarImgHeight);
        width: var(--avatarImgWidth);
        border-radius: 50%;
        margin: 15px;
    }
    
    h1 {
      top: var(--h1Top);
      font-size: 9rem;
      margin: 45px auto 0 auto;
      line-height: normal;
    }
    @media (max-width: 800px) {
        --avatarImgHeight: 300px;
        --avatarImgWidth: 300px;
        .welcome-section h1 {
            font-size: 11.5vw;
        }
        .mobile-image {
            aspect-ratio: auto;
            height: var(--avatarImgHeight);
            width: var(--avatarImgWidth);
        }
        .gatsby-image-wrapper {
            aspect-ratio: auto;
            margin-left: 25px;
            margin-right: 25px;
            height: var(--avatarImgHeight);
            width: var(--avatarImgWidth);
        }
        .flex-container {
            flex-direction: column;
            width: 75%;
            p {
                margin-bottom: 25px;
                margin-top: 25px;
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
    @media (max-width: 440px) {
        --avatarImgHeight: 75vw;
        --avatarImgWidth: 75vw;
        .welcome-section h1 {
            margin-bottom: 0;
        }
        .flex-container {
            width: 100%;
        }
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
            <span className="welcome-container">
                <section className="welcome-section">
                    <h1>WELCOME!</h1>
                    <span className="flex-container">
                        <p>Hello, my name is Joe and I'm glad you're here!<br/>
                        I'm a husband, a dad, and a web developer. In 2019 I started intentionally spending time learning how to program and figure out this mystery that is <span className="emphasis">technology</span>. Learn more about my journey <Link to="/about">HERE</Link></p>
                        <StaticImage
                        imgClassName="mobile-image" //this allows me to add border radius to the image directly, because when it was on the wrapper it was not showing up on mobile
                        alt="Joe smiles a welcoming smile"
                        src="../assets/images/joeBW.jpg"
                        placeholder="traced SVG"
                        layout="constrained"
                        transformOptions={{cropFocus: 'entropy'}}
                        width={300}
                        height={300}
                        // cropFocus='NORTH'
                        // imgStyle={{ objectFit: 'contain'}}
                        // aspectRatio={16/9}
                        />
                    </span>
                </section>
            {/* <div className="divider">
                <span></span>
                <span></span>
            </div> */}
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