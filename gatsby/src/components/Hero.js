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
            <span id="pre" className="code"> &lt;<span className="tag-highlight">ul</span> <span className="attribute-name">className</span><span className="misc">=</span><span className="string">"menu-container"</span>&gt;

            &lt;<span className="tag-highlight">div</span> <span className="attribute-name">className</span><span className="misc">=</span><span className="string">"flex-container"</span>&gt;
            
            &lt;<span className="tag-highlight">div</span> <span className="attribute-name">className</span><span className="misc">=</span><span className="string">"bar-container"</span>&gt;
            
            &lt;<span className="tag-highlight">div</span> <span className="attribute-name">className</span><span className="misc">=</span><span className="string">"bar-1"</span>/<span className="tag-highlight">div</span>&gt;

            &lt;<span className="tag-highlight">div</span> <span className="attribute-name">className</span><span className="misc">=</span><span className="string">"bar-2"</span>/<span className="tag-highlight">div</span>&gt;
            
            &lt;<span className="tag-highlight">div</span> <span className="attribute-name">className</span><span className="misc">=</span><span className="string">"bar-3"</span>/<span className="tag-highlight">div</span>&gt;</span>
        `).start();
        }} />
        
        <div id="app"></div>
{/*         
        <pre> 
            &lt;<span className="tag-highlight">ul</span> <span className="attribute-name">className</span><span className="misc">=</span><span className="string">"menu-container"</span>&gt;

            &lt;<span className="tag-highlight">div</span> <span className="attribute-name">className</span><span className="misc">=</span><span className="string">"flex-container"</span>&gt;
            
            &lt;<span className="tag-highlight">div</span> <span className="attribute-name">className</span><span className="misc">=</span><span className="string">"bar-container"</span>&gt;
            
            &lt;<span className="tag-highlight">div</span> <span className="attribute-name">className</span><span className="misc">=</span><span className="string">"bar-1"</span>/<span className="tag-highlight">div</span>&gt;

            &lt;<span className="tag-highlight">div</span> <span className="attribute-name">className</span><span className="misc">=</span><span className="string">"bar-2"</span>/<span className="tag-highlight">div</span>&gt;
            
            &lt;<span className="tag-highlight">div</span> <span className="attribute-name">className</span><span className="misc">=</span><span className="string">"bar-3"</span>/<span className="tag-highlight">div</span>&gt;
        </pre>< */}

        {/* <pre>
            
            <br /><br /><br /><br /><br />
            &lt;<span className="tag-highlight">ul</span> <span className="attribute-name">className</span><span className="misc">=</span><span className="string">"menu-container"</span>&gt;

            &lt;<span className="tag-highlight">div</span> <span className="attribute-name">className</span><span className="misc">=</span><span className="string">"flex-container"</span>&gt;
            
            &lt;<span className="tag-highlight">div</span> <span className="attribute-name">className</span><span className="misc">=</span><span className="string">"bar-container"</span>&gt;
            
            &lt;<span className="tag-highlight">div</span> <span className="attribute-name">className</span><span className="misc">=</span><span className="string">"bar-1"</span>/<span className="tag-highlight">div</span>&gt;

            &lt;<span className="tag-highlight">div</span> <span className="attribute-name">className</span><span className="misc">=</span><span className="string">"bar-2"</span>/<span className="tag-highlight">div</span>&gt;
            
            &lt;<span className="tag-highlight">div</span> <span className="attribute-name">className</span><span className="misc">=</span><span className="string">"bar-3"</span>/<span className="tag-highlight">div</span>&gt;
            
            <br />
            {/* &lt;div className="bar-container"&gt; &lt;div className="bar-1"&gt;&lt;/div&gt; &lt;div className="bar-2"&gt;&lt;/div&gt; &lt;div className="bar-3"&gt;&lt;/div&gt; &lt;/div&gt; &lt;div className="logo-container"&gt; &lt;a className="logo-link" href="https://www.joefink.dev/"&gt; &lt;Logo&gt;&lt;/Logo&gt; &lt;/a&gt; &lt;/div&gt; &lt;div id="menu" className="dropdown-menu"&gt; &lt;li className="dropdown-content"&gt;&lt;a className="learn-more-link" href="#learn-more"&gt;<span className="navigation">About</span>&lt;/a&gt;&lt;/li&gt; &lt;li className="dropdown-content"&gt;&lt;a className="education-link" href="#education"&gt;<span className="navigation">Education</span>&lt;/a&gt;&lt;/li&gt; &lt;li className="dropdown-content"&gt;&lt;a className="technology-link" href="#technology"&gt;<span className="navigation">Technologies</span>&lt;/a&gt;&lt;/li&gt; &lt;/div&gt; &lt;/div&gt; &lt;/ul&gt; &lt;div&gt; &lt;/div&gt; */}
        {/* </pre> */} 
    </HeroStyles> 
    )
    
}
