import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import useDate from '../hooks/useDate'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location }) => {
    const post = data.ghostPost
    const publishedDate = useDate(post.published_at)
    const readingTime = readingTimeHelper(post, { minute: `1 min de lectura`, minutes: `% mins de lectura` })
    const author = post.authors[0]
    const { tags } = post
    let tagId = 0
    let disqusConfig = {
        url: `https://jesusamador.com/blog/${post.slug}`,
        identifier: post.id,
        title: post.title,
    }
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
                <div className="post-container">
                    <header className="post-full-header">

                        <section className="post-full-tags">
                            {
                                tags &&
                                    tags.map((tag) => {
                                        tagId += 1
                                        return (
                                            <p key={tagId}>
                                                {`#`}
                                                {tag.name}
                                                {`  `}
                                            </p>
                                        )
                                    })
                            }
                        </section>
                        <h1 className="post-full-title">{post.title}</h1>
                        <p className="post-full-custom-excerpt">
                            {post.custom_excerpt}
                        </p>

                        <div className="post-full-byline">
                            <section className="post-full-byline-content">
                                <ul className="author-list">
                                    <li className="author-list-item">
                                        <div className="author-avatar">
                                            <img
                                                className="author-profile-image"
                                                src={author.profile_image}
                                                alt="Jesús Amador" />
                                        </div>
                                    </li>
                                </ul>
                                <section className="post-full-byline-meta">
                                    <h4 className="author-name">{author.name}</h4>
                                    <div className="byline-meta-content">
                                        <time className="byline-meta-date" dateTime={post.published_at}>
                                            {publishedDate}
                                        </time>
                                        <span className="byline-reading-time">
                                            <span className="bull">•</span>
                                            {readingTime}
                                        </span>
                                    </div>
                                </section>
                            </section>
                        </div>
                    </header>
                    <figure className="post-full-image">
                        <img src={post.feature_image} alt={post.title}/>
                    </figure>
                    <article className="content">
                        <section className="post-full-content">
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                            <CommentCount config={disqusConfig} placeholder={`Escribe un comentario`} />
                            <Disqus config={disqusConfig} />
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
            slug: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
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

