import '../../src/App.css';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Footer() {
  return (
    <footer>
        <Link to="/home"><button id="home"><i className="bi bi-house"></i></button></Link>
        <Link to="/search"><button id="search"><i className="bi bi-search"></i></button></Link>
        <Link to="/profile"><button id="person"><i className="bi bi-person"></i></button></Link>
    </footer>
  );
}

export default Footer;