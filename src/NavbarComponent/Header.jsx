import { Link } from "react-router-dom";
import logo from "../images/e_logo.png";
import RoleNav from "./RoleNav";

const Header = () => {
  return (
    <div >
      <nav className="navbar fixed-top navbar-expand-lg custom-bg text-color">
        <div className="container-fluid text-color">
        <div class="logo-container">
          <ul>
            <li>
        <div class="logo-holder logo-6">
        <Link to="/" className="navbar-brand">
          <h3>Royal <span>Hotels</span></h3>
       </Link>
       <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
      </div>
      </li>
      </ul>
      </div>
        
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link active"
                  aria-current="page"
                >
                  <h7 className="text-color">About Us</h7>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link active"
                  aria-current="page"
                >
                  <h7 className="text-color">Contact Us</h7>
                </Link>
              </li>
            </ul>

            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
