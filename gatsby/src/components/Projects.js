import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    max-width: 800px;
    margin: auto;
`;

const ProjectItem = styled.div`
/* display: grid;   */

`;

export default function Projects() {
    const data = useStaticQuery(graphql`
    query y{
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
                }
            }
        }
}
}
    `)
    console.log(`this is the data ${data}`);
    // let projectsArray = data.allMarkdownRemark.edges;

    return (
        <>
        <ProjectsContainer>
                {data.allMarkdownRemark.edges.map((project) => {
                    if(project.node.frontmatter.project){
                        return(
                            <ProjectItem>
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

