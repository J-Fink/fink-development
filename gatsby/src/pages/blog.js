import React from 'react';
import BasicPageStyles from '../styles/BasicPageStyles';
import SEO from '../components/SEO.js';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';

const BlogGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`;

const BlogGridItem = styled.div`
    display: grid;
    grid-template-rows: 4% 1fr;
    grid-gap: 0rem;
    justify-content: center;

    .description {
        font-style: italic;
        max-width: 250px;
        margin-top: 35px;
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
        ::after {
        width: var(--navUnderlineWidth);
    }
    }

`;
const BlogStyles = styled.div`
    text-align: center;
    h2 {
        text-transform: uppercase;
        text-decoration: underline;
    }
    
`;
export default function BlogPage({ data }) { 
    console.log(data.allMarkdownRemark.nodes)
    return (
        <>
            <SEO />
            <BasicPageStyles>
                <BlogStyles>
                        <h2>Stuff I've Learned Blog</h2>
                    <BlogGrid>
                        {data.allMarkdownRemark.edges.map(post => {
                            if(post.node.frontmatter.project){
                                return ""
                            }
                            return (
                            <BlogGridItem>
                                <Link 
                                key={post.node.id}
                                to={post.node.frontmatter.path}>
                                    <span className="post-title">{post.node.frontmatter.title}</span>
                                    </Link>
                                    <div className="description">
                                        {post.node.frontmatter.summary}
                                    </div>
                            </BlogGridItem>
                            )           
                    })
                    }
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
                        project
                    }
                }
            }
            # nodes {
            #     frontmatter {
            #         featuredImage {
            #             childImageSharp {
            #                 fluid(maxWidth: 400) {
            #                     ...GatsbyImageSharpFluid
            #                 }
            #             }
            #         }
            #     }
            # }
        }
    }

    `;