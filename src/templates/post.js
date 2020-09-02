import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import useDate from '../hooks/useDate'

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location }) => {
    const post = data.ghostPost
    const publishedDate = useDate(post.published_at)
    const author = post.authors[0]
    console.log(post)
    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="article"
            />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <section className="post_header"
                    style={{ backgroundImage: `url(${post.feature_image})` }}>
                    <div className="filter" />
                    <div className="post_header__content">
                        <h1 className="content-title">{post.title}</h1>
                        <div className="details">
                            <div className="author">
                                <img src={author.profile_image} alt={author.name} />
                                <h3>{author.name}</h3>
                            </div>
                            <div className="details__date">
                                <h6>{ publishedDate }</h6>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <article className="content">
                        <section className="post-full-content">
                            {/* The main post content */}
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                        </section>
                    </article>
                </div>
            </Layout>
        </>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`

