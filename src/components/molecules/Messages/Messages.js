import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../atoms/Box';
import Text from '../../atoms/Text';

const Messages = ({ children, type }) => {

    let classNames = 'text-blue-300 font-semibold text-xs';
    let icon = '';

    switch (type) {
        case 'info':
            classNames = 'my-4 p-4 mx-auto w-3/6 rounded-lg border shadow-sm bg-blue-100 border-blue-300 text-blue-500 font-semibold text-xs';
            break;

        case 'warning':
            classNames = 'my-4 p-4 mx-auto w-3/6 rounded-lg border shadow-sm bg-yellow-100 border-yellow-300 text-yellow-500 font-semibold text-xs';
            break;

        case 'error':
            classNames = 'my-4 p-4 mx-auto w-3/6 rounded-lg bg-red-100 border border-red-300 shadow-sm  text-red-500 font-semibold text-xs';
            break;
        case 'success':
            classNames = 'my-4 p-4 mx-auto w-3/6 rounded-lg border shadow-sm bg-green-100 border-green-300 text-green-500 font-semibold text-xs';
            break;

    };

    return (
        <>
            <Box className={classNames}>
                <Text className="text-center font-semibold text-base">
                    {children}
                </Text>
            </Box>
        </>
    )
}

Messages.propTypes = {
    children: PropTypes.any.isRequired,
    type: PropTypes.string.isRequired //info, warning, error, success
}
Messages.defaultProps = {
    type: 'info'

}


export default Messages;