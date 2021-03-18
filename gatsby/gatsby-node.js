import path from 'path';
//use createPages API so I don't need to run it through Sanity, working on the Sanity Option though.
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const postTemplate = path.resolve('src/templates/post.js');

    return graphql(`{
        allMarkdownRemark {
            edges {
                node {
                    html
                    id
                    frontmatter {
                        path
                        title
                    }
                }
            }
        }
    }`)
    .then(res => {
        if(res.errors) {
            return Promise.reject(res.errors);
        }

        res.data.allMarkdownRemark.edges.forEach( ({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    })
}