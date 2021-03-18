import React from 'react';
import BasicPageStyles from '../styles/BasicPageStyles';
import SEO from '../components/SEO.js';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';

const BlogStyles = styled.div`
    text-align: center;
    
`;
export default function BlogPage({ data }) { 
    return (
        <>
            <SEO />
            <BasicPageStyles>
                <BlogStyles>
                    <h2>Index</h2>
                    {data.allMarkdownRemark.edges.map(post => {
                        return (
                        <Link 
                        key={post.node.id}
                        href={post.node.frontmatter.path}>
                            {post.node.frontmatter.title}</Link>
                        );
                    })}
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
                    }
                }
            }
        }
    }
    `;