import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

// import BackgroundImage from 'gatsby-background-image';

const HeroStyles = styled.div`
    --blue: #193549;
    --tag-highlight: #9EFFFF; //baby blue
    --attribute-name:#FFC600; //orang-ish
    --string: #A5FF90; //lime green
    --source: #FFFFFF; //white
    --misc: #FF9D00; //dark orange, used for equal sign


    width: 100vw;
    height: 100vh;
    background-color: var(--blue);
    word-wrap: break-word;
    white-space: pre;

    color: white;
    cursor: default;
    .var-highlight{
    color: #C0AD60;
    }
    .tag-highlight {
    color: var(--tag-highlight);
    }
    .string {
        color: var(--string);
    }
    .misc {
        color: var(--misc);
    }
    .attribute-name {
        color: var(--attribute-name);
    }

   

 #pre {
        margin: 0;
        font-weight: bold;
        font-size: 2.1em;
        line-height: 1.25;
        font-family: monospace;
        white-space: pre;
    }
    .code {
        white-space: normal;
        text-indent: 150px;
    }
    .navigation:hover {
        color: white;
    }
 
    `;

export default function Hero() {
        
    return (
    <HeroStyles>
        <Typewriter onInit = {(typewriter) => {
            typewriter.typeString(`
            <span id="pre" className="code">
                &lt;<span className="tag-highlight">ul </span><span className="attribute-name">id</span>=<span className="string">"menu"</span><span className="attribute-name">className</span>=<span className="string">"dropdown-menu"</span>&gt;
                
                    &lt;<span className="tag-highlight">li </span><span className="attribute-name">className</span>=<span className="string">"dropdown-content"</span>&lt;<span className="tag-highlight">a </span><span className="attribute-name">className</span>=<span className="string">"learn-more-link"</span><span className="attribute-name">href</span>=<span className="string">"#learn-more"</span>&gt;
            </span>
            
        `).start();
        }} />
        
        <div>
            <span id="pre" className="code">
                &lt;<span className="tag-highlight">ul </span><span className="attribute-name">id</span>=<span className="string">"menu"</span><span className="attribute-name">className</span>=<span className="string">"dropdown-menu"</span>&gt;
                
                &lt;<span className="tag-highlight">li </span><span className="attribute-name">className</span>=<span className="string">"dropdown-content"</span>&lt;<span className="tag-highlight">a </span><span className="attribute-name">className</span>=<span className="string">"learn-more-link"</span><span className="attribute-name">href</span>=<span className="string">"#learn-more"</span>&gt;
            </span>
        </div>
    </HeroStyles> 

    
    )
    
}
