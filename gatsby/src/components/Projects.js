import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ProjectsContainer = styled.div`
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr;
    max-width: 800px;
    margin: auto;
`;

const ProjectItem = styled.div`
display: grid;  
grid-template-rows: 4% 1fr;
grid-gap: 0rem;
justify-content: center;
.description {
        font-style: italic;
        max-width: 250px;
        margin: 35px auto auto auto;
    }
    a {
        text-decoration: none;
        color: var(--textColor);
        height: fit-content;
        margin: 0 auto;
        box-shadow: rgb(0 0 0 / 20%) 2px 2px 3px;
        transform: skew(var(--postTitleSkew));
        background-color: var(--postTitleColor);
        :after {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 0%;
            content: "";
            color: transparent;
            background: var(--navTextHoverColor);
            height: 3px;
            transition: all 0.25s ease-in-out;
        }
        span {
            display: inline-block; //must add this or the below transform won't work
            transform: skew(calc(-1 * var(--postTitleSkew)));
            padding: 5px 10px;
        }
    }
    a:hover, :focus {
        /* color: var(--textColorHover); */
        color: white;
        ::after {
        width: var(--navUnderlineWidth);
    }
    }

`;


export default function Projects() {
  const data = useStaticQuery(graphql`
      query {
    allMarkdownRemark(limit: 10) {
        edges {
            node {
                id
                frontmatter {
                    title
                    path
                    summary
                    project
                    url
                    repo
                    previewImage {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
}
}
  `)
    console.log(data);
  
  // let projectsArray = data.allMarkdownRemark.edges;
    return (
        <>
        <ProjectsContainer>
            <Img src="src\assets\images\joeFromTheSide.jpg" />
                
                {data.allMarkdownRemark.edges.map((project) => {
        console.log(project.node.frontmatter);
                    if(project.node.frontmatter.project){
                        return(
                            <ProjectItem>
                                {project.node.frontmatter.previewImage ?
                                <Img
                                src="/static/812a3469db8dfe3071203f4ad293aadb/14b42/bingoPreview.jpg"
                                alt={project.node.frontmatter.title}
                                />
                                
                                : ''
                            }
                                <Link
                                key={project.node.id}
                                to={project.node.frontmatter.path}>
                                    <span>{project.node.frontmatter.title}</span>
                                </Link>
                                <div className="description">
                                    {project.node.frontmatter.summary}
                                </div>
                            </ProjectItem>
                        )
                    }
                    return ""
                })}
            
        </ProjectsContainer>
</>
    );
};
