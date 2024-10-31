import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/saiful-islam-pimon-8938061a5" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ cursor: 'pointer' }}
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/primon311" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ cursor: 'pointer' }}
        >
          <FaGithub />
        </a>
        <a 
          href="https://x.com/isprimon?t=Rs7XJuk9oRn_q6WPhvAnXw&s=09" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ cursor: 'pointer' }}
        >
          <FaTwitter />
        </a>
        <a 
          href="https://www.instagram.com/_pri_mon_/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ cursor: 'pointer' }}
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
