import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PostCard, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'

const Blog=({ data, location, pageContext }) => {
    const page=data.ghostPage
    const posts=data.allGhostPost.edges
    return (
        <Layout>
            <MetaData
                data={data}
                location={location}
                type="website"
            />
            <main>
                <section className="hero_blog" style={{ backgroundImage: `url(${page?.feature_image})` }}>
                    <div className="filter" />
                    <div className="hero_blog__content">
                        <h1> Blog </h1>
                        <h3>{page?.title||``}</h3>
                    </div>
                </section>
                <section className="recent_posts">
                    <h2> Recientes </h2>
                </section>
                <section className="container blog">
                    {posts &&
                        posts.map(({ node }) => <PostCard key={node.id} post={node} />)
                    }
                </section>
                <section className="container_pagination">
                    <Pagination pageContext={pageContext} />
                </section>
            </main>
        </Layout>
    )
}

Blog.propTypes={
    data: PropTypes.shape({
        ghostPage: PropTypes.shape({
            title: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Blog

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery=graphql`
  query GhostPostsQuery($limit: Int!, $skip: Int!) {

    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip,
        filter: {
            tags: {
                elemMatch: {
                    slug: {
                        nin: ["portfolio", "testimonials", "data-schema"]
                    }
                }
            }
        },
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }

    ghostPage(slug: { eq: "blog" }) {
        ...GhostPageFields
    }
  }
`
