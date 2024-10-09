//This AppLayot help to constant the Header and Footer of the Application...

import { Outlet } from "react-router-dom"
import { Footer } from "../UI/Footer"
import { Header } from "../UI/Header"

export const AppLayout = ()=>{
    return (
        <>
        <Header/>
        {/* This Outlet help to render the Child of Applayout where "Header and Fooder are constant..." */}
        <Outlet></Outlet>    
        <Footer/>
        </>
    )
}