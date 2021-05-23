import React from "react";
import IconInfo from "../../../assets/IconInfo";
import Box from "../../atoms/Box";
import Text from "../../atoms/Text";
import PropTypes from 'prop-types';


const Bubble = ({ children, className }) => {
    return (
        <>
            <Box className={className}>
                <Box>
                    <IconInfo classNames="h-5 w-5 text-yellow-500 mr-4" />
                </Box>
                <Text className="text-sm font-normal">
                    {
                        children
                    }
                </Text>
            </Box>
        </>
    )
};


Bubble.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
}

Bubble.defaultProps = {
    className: "w-screen max-w-screen-sm flex absolute top-8 left-full-5 bg-yellow-200 text-dark p-4 rounded-lg shadow-sm"
}


export default Bubble;