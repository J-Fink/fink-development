import React from 'react';
// import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import BasicPageStyles from '../styles/BasicPageStyles';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PostStyles = styled.div`
    text-align: center;
    p {
        overflow-wrap: anywhere;
        max-width: 1200px;
        text-align: left;
        padding: 0 50px;
        margin: auto auto 25px auto;
        }
    /* .gatsby-image-wrapper {
        width: 25vw;
    } */
    .post-title-container {
        box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 3px;
        background-color: var(--postTitleColor);
        height: 10vh;
        line-height: 10vh;
        width: fit-content;
        margin: 25px auto;
        padding: 0 20px;
        transform: skew(var(--postTitleSkew));
    }
    .post-title-container span {
        display: inline-block;
        transform: skew(calc(-1 * var(--postTitleSkew)));
    }
    ul {
        width: 75%;
        text-align: left;
        li {
            margin-bottom: 12.5px;
        }
        margin-bottom: 25px;
    }
`;

export default function Template({ data }) {
    const { markdownRemark: post } = data;
    //the above is equal to const post = data.markdownRemark;
    // let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
    return (
        <BasicPageStyles>
            <PostStyles>
                <a href={post.frontmatter.url}><h1 className="post-title-container"><span>{post.frontmatter.title}</span></h1></a>
                {/* <Img fluid={featuredImgFluid} /> */}
                <div dangerouslySetInnerHTML={{__html: post.html}}/>
            </PostStyles>
        </BasicPageStyles>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                title
                path
                summary
                url
            }
        }      
    }
`;