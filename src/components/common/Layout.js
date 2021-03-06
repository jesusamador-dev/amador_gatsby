import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import ActiveLinks from "../../plugins/activeLinkObserver"
import { StaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import config from '../../utils/siteConfig'
import Header from './Header'
import Footer from './Footer'

// Styles
import '../../styles/app.css'
import "../../styles/styles.scss"
import 'aos/src/sass/aos.scss'

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null
    useEffect(() => {
        if (isHome) {
            new ActiveLinks(`#home`, `link_home`, { root: null, rootMargin: `0px`, threshold: .5 })
            new ActiveLinks(`#about`, `link_about`, { root: null, rootMargin: `0px`, threshold: .5 })
            new ActiveLinks(`#contact`, `link_contact`, { root: null, rootMargin: `0px`, threshold: .5 })
        }
    }, [])
    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no,  maximum-scale=1, user-scalable=no" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" />
                <body id="body" className={`mobile_menu_close ${bodyClass}`} />
            </Helmet>
            <Header />
            {children}
            <Footer />
        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
