import React from 'react'
import PropTypes from 'prop-types'

import { Layout, HeroHome, Contact, AboutHome } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
 * Main index page (home page)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const Index = ({ location }) => (
    <>
        <MetaData location={location} />
        <Layout isHome={true}>
            <main>
                <div id="home" className="main_hero">
                    <HeroHome />
                </div>
                <div id="about" className="main_about">
                    <AboutHome />
                </div>
                <div id="contact">
                    <Contact />
                </div>
            </main>
        </Layout>
    </>
)

Index.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default Index

// // This page query loads all posts sorted descending by published date
// // The `limit` and `skip` values are used for pagination
// export const pageQuery = graphql `
//   query GhostPostQuery($limit: Int!, $skip: Int!) {
//     allGhostPost(
//         sort: { order: DESC, fields: [published_at] },
//         limit: $limit,
//         skip: $skip
//     ) {
//       edges {
//         node {
//           ...GhostPostFields
//         }
//       }
//     }
//   }
// `
