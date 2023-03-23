import { Link } from "react-router-dom";
import avatar from './assets/user.png';
const Menu = ({menu}) => {
  return (
    <>
      <div 
        className="menu column" 
        style={{left: (menu)? 0: "-100%"}}>
        <div className="img">
            <img src={avatar} alt="img"/>
            <span className="user-name">Qobulov Asror</span>
        </div>
        <ul className="navbar">
            <li className="nav"><Link to="/"><i class='bx bx-home-alt'></i> <span>Home</span></Link></li>
            <li className="nav"><Link to="/about"><i class='bx bx-info-circle'></i> <span>About Me</span></Link></li>
            <li className="nav"><Link to="/resume"><i class='bx bxs-id-card'></i> <span>Resume</span></Link></li>
            <li className="nav"><Link to="/portfolio"><i class='bx bx-shopping-bag'></i> <span>Portfolio</span></Link></li>
            <li className="nav"><Link to="/"><i class='bx bx-book'></i> <span>Blog</span></Link></li>
            <li className="nav"><Link to="/contact"><i class='bx bxs-contact'></i> <span>Contact</span></Link></li>
        </ul>
        <ul className="links row">
            <li><a target="_blank" href="https://www.linkedin.com/in/asrorqobulov/" rel="noreferrer"><i class='bx bxl-linkedin'></i></a></li>
            <li><a target="_blank" href="https://www.facebook.com/asror.qobulov/" rel="noreferrer"><i class='bx bxl-facebook-square'></i></a></li>
            <li><a target="_blank" href="https://t.me/Qobulov_Asror" rel="noreferrer"><i class='bx bxl-telegram'></i></a></li>
            <li><a target="_blank" href="https://github.com/qobulovasror/" rel="noreferrer"><i class='bx bxl-github'></i></a></li>
            <li><a target="_blank" href="https://codepen.io/qobulovasror" rel="noreferrer"><i class='bx bxl-codepen'></i></a></li>
        </ul>
        <p className="copy">© {new Date().getFullYear()}</p>
      </div>
    </>
  );
};

export default Menu;
