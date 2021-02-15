import React from "react";
import Menu from "./Menu";

import { FaGithub } from 'react-icons/fa';
import {FaLinkedin} from "react-icons/fa";
import { MdMail} from 'react-icons/md';

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "p-4",
  children
}) => (
  <div>
    <Menu />
    <div className="container-fluid" >
      <div className="jumbotron text-center" style={{color:"#1d3557", backgroundColor:"#a8dadc"}}>
        <h1 className="display-3 font-weight-bold">{title}</h1>
        <p className="lead font-weight-bold">{description}</p>
       
      </div>
     <hr />
      <div className={className}>{children}</div>
    </div>
    < hr/>
    <footer className="footer mt-auto py-3" style={{backgroundColor:"#a8dadc"}}>
      <div className="container-fluid text-center py-4" style={{backgroundColor:"#a8dadc"}}>
        <h3>If you got any questions, feel free to reach out!</h3>

        <div className="icons" >
        <a href="https://github.com/ishii287" target="_blank" style={{color:"#1d3557", paddingRight:"20px"}}><FaGithub /></a>
        <a href="https://linkedin.com/in/ishii-agarwal" target="_blank" style={{color:"#1d3557",paddingRight:"20px"}}><FaLinkedin /></a>
        <a href="mailto:agarwalishita@gmail.com" target="_blank" style={{color:"#1d3557"}}><MdMail /></a>
        </div>
      </div>
      

    </footer>
  </div>
);

export default Base;
