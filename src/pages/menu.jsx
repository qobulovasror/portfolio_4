import { Link } from "react-router-dom";
import avatar from './assets/user.png';
const Menu = () => {
  return (
    <>
      <div className="menu column">
        <div className="img">
            <img src={avatar} alt="img"/>
            <span className="user-name">Qobulov Asror</span>
        </div>
        <ul className="navbar">
            <li className="nav"><Link to="/"><i class='bx bx-home-alt'></i> <span>Home</span></Link></li>
            <li className="nav"><Link to="/about"><i class='bx bx-info-circle'></i> <span>About Me</span></Link></li>
            <li className="nav"><Link to="/resume"><i class='bx bxs-id-card'></i> <span>Resume</span></Link></li>
            <li className="nav"><Link to="/portfolio"><i class='bx bx-shopping-bag'></i> <span>Portfolio</span></Link></li>
            <li className="nav"><Link to="/blog"><i class='bx bx-book'></i> <span>Blog</span></Link></li>
            <li className="nav"><Link to="/contact"><i class='bx bxs-contact'></i> <span>Contact</span></Link></li>
        </ul>
        <ul className="links row">
            <li><Link to="/"><i class='bx bxl-facebook-square'></i></Link></li>
            <li><Link to="/"><i class='bx bxl-telegram'></i></Link></li>
            <li><Link to="/"><i class='bx bxl-twitter'></i></Link></li>
            <li><Link to="/"><i class='bx bxl-github'></i></Link></li>
        </ul>
        <p className="copy">© {new Date().getFullYear()}</p>
      </div>
    </>
  );
};

export default Menu;
