import React from "react";
import "./style.css";

function Jumbotron({ children }) {
    return (
        <div className="jumbotron">
            <div className="container text-center">
                {children}
            </div>
        </div>
    );
}

export default Jumbotron;
