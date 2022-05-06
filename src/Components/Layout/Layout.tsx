import React from 'react';
import Navbar from "./Navbar"
import Footer from "./Footer";
import { ThemeProvider } from 'styled-components';

const theme = {}
import "../../assets/css/main.css";

const Layout = ({ children }:any) => {
    return <>
         <ThemeProvider theme={theme}>
            <Navbar/>
            {children}
            <Footer/>
           </ThemeProvider>
          </>
  }
  
  export default Layout