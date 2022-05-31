import React from "react";
import NavBar from '../components/NavBar';
import Card from "../components/Card";

const Index = () => {
    return (
        <>
        <NavBar>
        <NavBar.Link href="pages/register.js">Register </NavBar.Link>
        <NavBar.Link href="pages/index.js">Shop </NavBar.Link>
        {/* <NavBar.Link href="pages/login.js">Login </NavBar.Link> */}
        </NavBar>
        <Card />
        </>
    );
}

export default Index;