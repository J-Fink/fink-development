import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
// import BackgroundImage from 'gatsby-background-image';

const HeroStyles = styled.div`
    --blue: #193549;
    --blueHighlight: #1F4662;
    --blueHighlight2: #234E6D;
    --blueDark: #122738;
    --yellow: #ffc600;
    --hotPink: #ff0088;
    --blushPink: #ff628c;
    --orange: #ff9d00;
    width: 100%;
    height: 100%;
    background-color: var(--blue);
    color: var(--blueHighlight2);
    /* background-position: bottom center; */
    /* background-repeat: none; */
    /* background-size: cover; */
    pre {
        font-weight: bold;
        font-size: 2.1em;
        line-height: 1.25;
        font-family: monospace;
        white-space: pre-wrap;
    }
    code {
        white-space: pre-wrap;
    }
    `;

export default function Hero({ className }) {
    return (
    <HeroStyles>
        <pre>
            <code>
            <br /><br /><br /><br /><br />
            &lt;ul className="menu-container"&gt;<br />
                &lt;div className="flex-container"&gt; 
            &lt;div className="bar-container"&gt; &lt;div className="bar-1"&gt;&lt;/div&gt; &lt;div className="bar-2"&gt;&lt;/div&gt; &lt;div className="bar-3"&gt;&lt;/div&gt; &lt;/div&gt; &lt;div className="logo-container"&gt; &lt;a className="logo-link" href="https://www.joefink.dev/"&gt; &lt;Logo&gt;&lt;/Logo&gt; &lt;/a&gt; &lt;/div&gt; &lt;div id="menu" className="dropdown-menu"&gt; &lt;li className="dropdown-content"&gt;&lt;a className="learn-more-link" href="#learn-more"&gt;About&lt;/a&gt;&lt;/li&gt; &lt;li className="dropdown-content"&gt;&lt;a className="education-link" href="#education"&gt;Education&lt;/a&gt;&lt;/li&gt; &lt;li className="dropdown-content"&gt;&lt;a className="technology-link" href="#technology"&gt;Technologies&lt;/a&gt;&lt;/li&gt; &lt;/div&gt; &lt;/div&gt; &lt;/ul&gt; &lt;div&gt; &lt;/div&gt;
            </code>
        </pre>
    </HeroStyles> 
    )
//     const data = useStaticQuery(
//         graphql`
//         query {
//             desktop: file(relativePath: { eq: "background-working.JPG" }) {
//                 childImageSharp {
//                     fluid(quality: 90, maxWidth: 1920) {
//                         ...GatsbyImageSharpFluid_withWebp
//                     }
//                 }
//             }
//         }`
//     )
    
// const imageData = data.desktop.childImageSharp.fluid;
// return (
//     <HeroStyles>
//         <BackgroundImage
//         Tag="section"
//         className={className}
//         fluid={imageData}
//         backgroundColor={`#040e18`}>background</BackgroundImage>
//     </HeroStyles>
// )
}
