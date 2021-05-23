import React from 'react';
import Header from '../../molecules/Header';
import PropTypes from 'prop-types';

const SearchLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

SearchLayout.propTypes = {
    children: PropTypes.any.isRequired
};
export default SearchLayout;