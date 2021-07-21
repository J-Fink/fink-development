import React from 'react';
import BasicPageStyles from '../styles/BasicPageStyles';
import SEO from '../components/SEO.js';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`;

const ProjectsGridItem = styled.div`
    display: grid;
    grid-template-rows: 4% 1fr;
    grid-gap: 3rem;
    .description {
        font-style: italic;
    }
    a {
        text-decoration: none;
        color: var(--textColor);
        height: fit-content;
        margin: 0 auto;
        box-shadow: rgb(0 0 0 / 20%) 2px 2px 3px;
        transform: skew(var(--postTitleSkew));
        background-color: var(--postTitleColor);
        span {
            display: inline-block; //must add this or the below transform won't work
            transform: skew(calc(-1 * var(--postTitleSkew)));
        }
    }
    a:hover {
        color: var(--textColorHover);
    }

`;
const ProjectsStyles = styled.div`
    text-align: center;
    h2 {
        text-transform: uppercase;
        text-decoration: underline;
    }
    
`;
export default function ProjectsPage({ data }) { 
    console.log(data);
    return (
        <>
            <SEO />
            <BasicPageStyles>
                <ProjectsStyles>
                        <h2>Stuff I've Learned Blog</h2>
                    <ProjectsGrid>
                        {data.allMarkdownRemark.edges.map(post => {
                            if(post.node.frontmatter.project){
                                return (
                                <ProjectsGridItem>
                                    {/* <Img fluid={data.allMarkdownRemark.nodes[0].frontmatter.featuredImage.childImageSharp.fluid} /> */}
                                    <Link 
                                    key={post.node.id}
                                    to={post.node.frontmatter.path}>
                                        <span>{post.node.frontmatter.title}</span>
                                        </Link>
                                        <div className="description">
                                            {post.node.frontmatter.summary}
                                        </div>
                                </ProjectsGridItem>
                                )
                             return ""
                            }
                        })}
                    </ProjectsGrid>
                </ProjectsStyles>
            </BasicPageStyles>
        </>
    )
}

export const pageQuery = graphql`
    query ProjectsQuery {
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
                    }
                }
            }
    }
    }
    `;