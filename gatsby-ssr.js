const React = require('react');
const Context = require("./src/Context");

exports.wrapRootElement = ({ element }) => {
    return (
        <Context>
            {element}
        </Context>
    )
}