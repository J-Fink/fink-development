import React from 'react';
// import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import BasicPageStyles from '../styles/BasicPageStyles';
export default function Template({ data }) {
    const { markdownRemark: post } = data;
    //the above is equal to const post = data.markdownRemark;
    return (
        <BasicPageStyles>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.html}}/>
        </BasicPageStyles>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                summary
            }
        }      
    }
`;