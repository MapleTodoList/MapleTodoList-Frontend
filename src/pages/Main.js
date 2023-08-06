import React from "react";
import Header from "../components/header"
import Profile from "../components/profile"
import Contents from "../components/contents"

function Main() {
    return(
        <div style={{ height:"auto", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Header/>
            <Profile/>
            <Contents/>
        </div>
    )
}

export default Main