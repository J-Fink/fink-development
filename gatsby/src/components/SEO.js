import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ children, location, description, title, image }) {
    const { site } = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
                description
                # twitter
            }
        }
    }
    `);
    return (
        <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
            <html lang="en" />
            <title>{title}</title>
            {/* Fav Icons */}
            <link rel="icon" type="image/svg+xml" href="/favicon-light.svg" />
            <link rel="alternate icon" href="/favicon-light.png" />
        </Helmet>
    )
}