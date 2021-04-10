import React from 'react';
// import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import BasicPageStyles from '../styles/BasicPageStyles';
import Img from 'gatsby-image';


export default function Template({ data }) {
    const { markdownRemark: post } = data;
    //the above is equal to const post = data.markdownRemark;
    let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
    return (
        <BasicPageStyles>
            <h1>{post.frontmatter.title}</h1>
            <Img fluid={featuredImgFluid} />
            <div dangerouslySetInnerHTML={{__html: post.html}}/>
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
`;