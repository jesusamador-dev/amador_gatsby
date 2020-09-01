import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Pagination=({ pageContext }) => {
    const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages }=pageContext

    return (
        <nav className="pagination" role="navigation">
            <div className="pagination__button">
                {previousPagePath&&(
                    <Link to={previousPagePath} rel="prev">
                        Anterior
                    </Link>
                )}

            </div>
            {numberOfPages>1&&(
                <div className="pagination__location">
                    Página
                    {` `}
                    {humanPageNumber}
                    {` `}
          de
                    {` `}
                    {numberOfPages}
                </div>
            )}
            <div className="pagination__button">
                {nextPagePath&&(

                    <Link to={nextPagePath} rel="next">
                        Siguiente
                    </Link>
                )}
            </div>
        </nav>
    )
}

Pagination.propTypes={
    pageContext: PropTypes.object.isRequired,
}

export default Pagination
