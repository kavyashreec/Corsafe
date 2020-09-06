import React from 'react';
import Tracker from "./Tracker";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";



function Home() {
    return (
        <div>
            <Navbar />
            <div className="apphome__tracker"><Tracker /></div>

        </div>
    )
}

export default Home
