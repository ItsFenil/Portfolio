import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Fenil Mehta</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/*<li><a href="#testimonials">Testimonials</a></li>*/}
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
<<<<<<< HEAD
      <a href="https://www.linkedin.com/in/fenil-mehta-51613421b/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
=======
      <a href="https://www.linkedin.com/in/meri-gogichashvili/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
>>>>>>> caa4cd9a7c578d90690e2243b71dfe5a046b50fc
      <a href="https://github.com/ItsFenil" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
    </footer>
  )
}

export default Footer
