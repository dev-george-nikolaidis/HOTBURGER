

const React = require("react");
const {HotburgerContextProvider} = require("./src/context/hotburger/HotburgerContext");

exports.wrapRootElement   = ({element}) =>{
    return  <HotburgerContextProvider > {element}</HotburgerContextProvider>
}

// const React = require('react');
// const Layout = require("./src/components/Layout/Layout").default

// exports.wrapPageElement = ({element,props})=>{
//     return<Layout {...props}>{element}</Layout>
// }
