import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
const Layout = lazy(() => import(`../components/common/Layout`))
const HeroHome = lazy(() => import(`../components/common/HeroHome`))
const AboutHome = lazy(() => import(`../components/common/AboutHome`))
const Contact = lazy(() => import(`../components/common/Contact`))
import { MetaData } from '../components/common/meta'

const renderLoader = () => (
    <div className="loadign">
        <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
        </div>
    </div>
)
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
        <Suspense fallback={renderLoader()}>
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
        </Suspense>
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
