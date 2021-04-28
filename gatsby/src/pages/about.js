import React from 'react';
import BasicPageStyles from '../styles/BasicPageStyles';
import SEO from '../components/SEO.js';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';





const AboutStyles = styled.div`
    text-align: center;
    /* --imageHeight: 400px;
    --imageWidth: 400px; */
    line-height: 2.5rem;
    width: 100vw;
    --avatarImgHeight: 400px;
    --avatarImgWidth: 400px;
    /* --avatarImgLeft: -58vw; */
    --introTop: -483px;
    --introLeft: 145px;
    --h1Top: -445px;
    .flex-container {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
    }
    .mobile-image {
        border-radius:50%;
    }
    .gatsby-image-wrapper {
        height: var(--avatarImgHeight);
        width: var(--avatarImgWidth);
        border-radius: 50%;
        /* margin-top: 95px; */
        /* margin-left: var(--avatarImgLeft); */
        overflow: hidden;
    }
    .cotton-candy {
        height: var(--avatarImgHeight);
        width: var(--avatarImgWidth);
        border-radius: 50%;
        margin: 0 auto;
        margin-left: 0;
        overflow: hidden;

    }
    /* img {
        border-radius: 50%;
    } */
    h1 {
      top: var(--h1Top);
      font-size: 9rem;
      width: 50vw;
      margin: 45px auto 0 auto;
      line-height: normal;
    }
    @media (max-width: 1315px) {
        /* --avatarImgHeight: 215px;
        --avatarImgWidth: 215px; */
        /* --introTop: -352px; */
        /* --h1Top: -287px; */



    }
    @media (max-width: 800px) {
        /* --introLeft: 1px;
        --h1Top: -75px;
        --avatarImgLeft: -26vw;
        --introTop: -154px; */
    }
    /* .intro {
        position: relative;
        top: var(--introTop);
        left: var(--introLeft);
        width: 50vw;
        margin: 50px auto 0 auto;
    }
    .intro {
        width: 50vw;
        margin: 50px auto 0 auto;
    }
    .info {
        width: 55vw;
        text-align: left;
        margin: 0 auto;
    } */
    p a {
        text-decoration: none;
        font-style: italic;
        color: var(--textColor);
    }
    p a:hover {
        color: var(--navTextHoverColor);
    }
  
`;

export default function AboutPage() { 
    return (
        <>
            <SEO title={`We have an about page`} />
            
            <BasicPageStyles>
                <AboutStyles>
                        <h1>About</h1>
                    <span className="flex-container">
                        <p>
                            Hi, I'm Joe!<br />
                            I'm a husband, father, and a self-taught web<br /> developer, from St. Paul, Minnesota<br />
                        </p>
                    <StaticImage
                        imgClassName="mobile-image" //this allows me to add border radius to the image directly, because when it was on the wrapper it was not showing up on mobile
                        alt="Joe speaks into a microphone"
                        src="../assets/images/joeFromTheSide.jpg"
                        placeholder="traced SVG"
                        // layout="fixed"
                        width={400}
                        height={400}
                        />
                    </span>
                    
                    
                    <p>
                        I work for a nonprofit organization where I wear many hats. From maintaining our website(built with Drupal 7), managing livestreaming our services, to all around logistics. I believe having a smooth workflow makes life easier, at the same time I find it helpful to figure out the desired outcome first then find a path to achieve that outcome. In my free time I make websites, and like to use my new found skills to help nonprofit organizations.
                    </p>
                    
                    <p>
                        I started to learn how to program in August of 2019. There has been so much I have learned so far(and yet still so much more!), you can check out my GitHub <a href="https://github.com/J-Fink" rel="noreferrer nofollow">here</a>.
                    </p>
                    <p>
                        I have a lot of interests, when the COVID reality set in I picked up another hobby. My kids love it
                    </p>
                    
                    <StaticImage className="cotton-candy"
                    imgClassName="mobile-image"
                    alt="Joe speaks into a microphone"
                    src="../assets/images/joeHoldsCottonCandy.jpg"
                    placeholder="traced SVG"
                    width={400}
                    height={400}
                  />

                </AboutStyles>
            </BasicPageStyles>
        </>
    )
}