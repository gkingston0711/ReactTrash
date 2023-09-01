import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from "./components/NavBar";
import Main from "./components/Main"
import './style.css';

export default function App() {
    return (
        <div className="main-container">
            <NavBar />
            <Main />
        </div>

    )
}
