import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import useDate from '../../hooks/useDate'

const PostCard = ({ post }) => {
    const url = `/blog/${post.slug}`
    const readingTime = readingTimeHelper(post, { minute: `1 min de lectura`, minutes: `% mins de lectura` })
    const image = post?.feature_image
    const { tags } = post
    const { title } = post
    const author = post?.authors[0]
    const customExcerpt = post?.custom_excerpt ? `${post?.custom_excerpt.substring(0, 100)}...` : `No tiene descripción`
    const publishedDate = useDate(post?.published_at)
    let tagId = 0
    return (
        <article className="blog_card">
            <div className="blog_card__header">
                <Link to={url}>
                    <img src={image} alt={title} />
                </Link>
            </div>
            <div className="blog_card__tags">
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
            </div>
            <div className="blog_card__date">
                {publishedDate}
            </div>
            <div className="blog_card__body">
                <h3>
                    <Link to={url}>
                        {title}
                    </Link>
                </h3>
                <p>
                    {customExcerpt}
                </p>
            </div>
            <div className="blog_card__footer">
                <div className="author">
                    <img src={author.profile_image} alt={author.name} />
                    {author.name}
                </div>
                <div className="reading_time">
                    {readingTime}
                </div>
            </div>
        </article>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        custom_excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostCard
