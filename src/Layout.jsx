//DYNAMIC SEGMENTS

import React from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Outlet } from "react-router-dom"


//here we can pass in comp like home,about,etc dynamically with the help of "Outlet"--> a functionality 
  //provided by react-router-dom . --> what outlet does is vo layout ko as it is unchanged or constant rakhega 
  //and jaha bhi <Outlet /> denge that will behave as dynamic variable and outlet ke andar nesting karke we can render diff components
  //in the place where <Outlet /> is written. This nesting is done inside the router prop. --> usme jo jo element ke andar denge vo
  //sab outlet comp ki jage par aata jayega acc to the path.


  function Layout() {
    return(
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
    )
  }
  
export default Layout // ab is layout ko use karne ka bhi ek perticular syntax hai in which we have to tell the index or main file
//that we're using a layout.