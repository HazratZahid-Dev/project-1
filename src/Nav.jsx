import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './index.css'
function Nav() {

   
   
    return (
        <>
            <nav class={`navbar navbar-expand-lg  bg-light  navbar text-danger `}>
                <div class='container'>

                    <Link to="/" class="nav-link active navbar-brand"><img className="Logo" /> </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse right" id="navbarSupportedContent ">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link to="/" class="nav-link active">Home </Link>

                            </li>
                            <li class="nav-item">
                                <Link to="/About" class="nav-link active">About </Link>

                            </li>
                            <div>
                            <li class="nav-item">
                                <Link to="/Contact" class="nav-link active mr-2">Contact </Link>
                            </li>
                            </div>
                            

                            <li class="form-check form-switch mt-2">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">DarkMode</label>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );

}
export default Nav;