import React from 'react';
import BasicPageStyles from '../styles/BasicPageStyles';
import SEO from '../components/SEO.js';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const BlogGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`;

const BlogGridItem = styled.div`
    display: grid;
    grid-template-rows: 4% 1fr;
    grid-gap: 3rem;
    .description {
        font-style: italic;
    }
    a {
        text-decoration: none;
        color: var(--textColor);
    }
    a:hover {
        color: var(--textColorHover);
    }

`;
const BlogStyles = styled.div`
    text-align: center;
    
`;
export default function BlogPage({ data }) { 
    console.log(data.allMarkdownRemark.nodes[0])
    return (
        <>
            <SEO />
            <BasicPageStyles>
                <BlogStyles>
                        <h2>Blog</h2>
                    <BlogGrid>
                        {data.allMarkdownRemark.edges.map(post => {
                            return (
                            <BlogGridItem>
                                <Img fluid={data.allMarkdownRemark.nodes[0].frontmatter.featuredImage.childImageSharp.fluid} />
                                <Link 
                                key={post.node.id}
                                to={post.node.frontmatter.path}>
                                    {post.node.frontmatter.title}
                                    </Link>
                                    <div className="description">
                                        {post.node.frontmatter.summary}
                                    </div>
                            </BlogGridItem>
                            );
                        })}
                    </BlogGrid>
                </BlogStyles>
            </BasicPageStyles>
        </>
    )
}

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(limit: 10) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        path
                        summary
                    }
                }
            }
            nodes {
                frontmatter {
                    featuredImage {
                        childImageSharp {
                            fluid(maxWidth: 400) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }

    `;