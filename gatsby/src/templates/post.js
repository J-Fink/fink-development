import React from 'react';
// import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import BasicPageStyles from '../styles/BasicPageStyles';
import { BiLinkExternal } from 'react-icons/bi'


import styled from 'styled-components';

const ViewOutsideContentStyles = styled.div`
    
        box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 3px;
        background-color: var(--postTitleColor);
        height: 3.75vh;
        line-height: 3.75vh;
        width: fit-content;
        margin: 12.5px auto;
        padding: 0 20px;
        font-size: 12px;
        transform: skew(var(--postTitleSkew));
        svg {
            position: absolute;
            bottom: 1px;
            right: -22px;
            transform: skew(calc(-1 * var(--postTitleSkew)));
        }
        span {
            display: inline-block;
            transform: skew(calc(-1 * var(--postTitleSkew)));
            position: relative;
        }
        a {
            text-decoration: none;
            color: var(--navTextColor);
            display: inline-block;
            white-space: nowrap;
            margin: 0 1vw;
            position: relative;
            /* background-color: purple; */
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
            :hover {
                /* color: var(--navTextHoverColor); */
                ::after {
                    width: var(--navUnderlineWidth);
                }
            }
}
    
`;
const ViewOutsideContent = ({ message, href, rel, target }) => {
    return ( 
        <ViewOutsideContentStyles>
            <a href={href} rel={rel} target={target}>
                <span>{message}</span>
                <BiLinkExternal size="15" /> 
            </a>
        </ViewOutsideContentStyles>
    )
}

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
    .link-container {
        display: flex;
        flex-direction: row;
        max-width: 500px;
        margin: 0 auto;
        div:first-of-type{
            margin-right: 5px;
        }
        div:last-of-type{
            margin-left: 5px;
        }
    }
    .post-title-container {
        box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 3px;
        background-color: var(--postTitleColor);
        height: 10vh;
        line-height: 10vh;
        width: fit-content;
        margin: 25px auto;
        margin-bottom: 0px;
        padding: 0 20px;
        transform: skew(var(--postTitleSkew));
        
        span {
            display: inline-block;
            transform: skew(calc(-1 * var(--postTitleSkew)));
            position: relative;
        }

    }
    /* .external-link {
        
        position: absolute;
        bottom: 7px;
        right: 11px;
    } */
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
    return (
        <BasicPageStyles>
            <PostStyles>
                    <h1 className="post-title-container">
                        <span>{post.frontmatter.title}</span>
                    </h1>
                <div className="link-container">

                        {post.frontmatter.url ?    
                        <ViewOutsideContent href={post.frontmatter.url} message="View Live Project" target="_blank" rel="nofollow noopener" />
                        : ""}
                        {post.frontmatter.repo ?    
                        <ViewOutsideContent href={post.frontmatter.repo} message="View Repo" target="_blank" rel="nofollow noopener" />
                        : ""}
                
                </div>
                
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
                repo
            }
        }      
    }
`;