import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import ViewOutsideContent, { StyledLink, ViewOutsideContentStyles } from './ViewOutsideContent';



const ProjectsContainer = styled.div`
    display: grid;
    grid-gap: 25px;
    text-align: center;
    grid-template-columns: 1fr 1fr;
    max-width: 800px;
    margin: auto;
    .externalLinks {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    @media(max-width: 875px) {
        grid-template-columns: 1fr;
        max-width: 400px;
    
        /* ${ProjectItem} {
            margin: 40px;
        } */
    }
`;

const ProjectItem = styled.div`
background: var(--welcomeBackgroundColor);
box-shadow: var(--boxShadow);
padding: 10px;
border-radius: 10px;
display: grid;  
grid-template-rows: 1fr;
grid-gap: 0rem;
justify-content: center;
.title {
    font-size: 15px;
}
.projectPreviewImage{
    height: fit-content;
    filter: blur(0);
    border: 1px solid transparent;
    :hover {
        border: 1px solid #00000061;
        filter: blur(1px);
    }
}
.projectPreviewImage.gatsby-image-wrapper {
    border-radius: 0;
}
.description {
        font-style: italic;
        max-width: 250px;
        margin: 35px auto auto auto;
    }
    @media(max-width: 875px) {
        margin-left: 25px;
        margin-right: 25px;
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
                            gatsbyImageData
                        }
                    }
                    previewImageAlt
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
            {/* <Img src="src\assets\images\joeFromTheSide.jpg" /> */}
                
                {data.allMarkdownRemark.edges.map((project) => {
        console.log(project.node.frontmatter);
                    if(project.node.frontmatter.project){
                        return(
                            <ProjectItem>
                                {project.node.frontmatter.previewImage ?
                                <Link 
                                key={project.node.id}
                                to={project.node.frontmatter.path}>
                                    <GatsbyImage className='projectPreviewImage'
                                    image={project.node.frontmatter.previewImage.childImageSharp.gatsbyImageData}
                                    alt={project.node.frontmatter.title}
                                    />
                                </Link>
                                
                                : ''
                            }
                                <ViewOutsideContentStyles>
                                    <StyledLink className="title"
                                    key={project.node.id}
                                    to={project.node.frontmatter.path}>
                                        <span>{project.node.frontmatter.title}</span>
                                    </StyledLink>
                                </ViewOutsideContentStyles>
                                <div className="description">
                                    {project.node.frontmatter.summary}
                                </div>
                                <span className="externalLinks">
                                    <ViewOutsideContent
                                    href={project.node.frontmatter.repo} message="View Repo" target="_blank" rel="nofollow noopener" />
                                    <ViewOutsideContent 
                                    href={project.node.frontmatter.url} message="View Live Project" target="_blank" rel="nofollow noopener"  />
                                </span>
                            </ProjectItem>
                        )
                    }
                    return ""
                })}
            
        </ProjectsContainer>
</>
    );
};
