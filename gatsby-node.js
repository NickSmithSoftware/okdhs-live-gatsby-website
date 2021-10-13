// const path = require('path')

// exports.createPages = ({
//   actions,
// }) => {

//   actions.createPage({
//     path: '/dsg',
//     component: path.resolve('src/templates/dsg.js'),
//     defer: true,
//   })
// }

const React = require("react");

exports.onRenderBody = ({setHeadComponents}) => {
    setHeadComponents([
        <script key="1" type="text/javascript" src={"./services/auth"} />
    ])
}