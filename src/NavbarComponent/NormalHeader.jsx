import { Link } from "react-router-dom";
const NormalHeader = () => {
  return (
    <div className="normal">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item">
        <Link
          to="/user/customer/register"
          className="nav-link active"
          aria-current="page"
        >
          <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark">Register Customer</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/login" className="nav-link active" aria-current="page">
         <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark">Login</button>
        </Link>
      </li>
    </ul>
    </div>
  );
};

export default NormalHeader;
