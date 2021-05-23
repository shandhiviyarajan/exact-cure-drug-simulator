import React from 'react';
import PropTypes from 'prop-types';
import ArticleElement from './Article.styles';
const Article = ({ children, className }) => {
    <ArticleElement className={className}>
        {children}
    </ArticleElement>
};


Article.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
};
export default Article;