import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManagerHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-manager"));
  console.log(user);

  const managerLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-manager");
    window.location.reload(true);
    navigate("/home");
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      
      <li className="nav-item">
        <Link
          to="user/manager/add/staff"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Add Staff</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="user/manager/booking/all"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">View All Bookings</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to="/home"
          class="nav-link active"
          aria-current="page"
          onClick={managerLogout}
        >
          <b className="text-color">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default ManagerHeader;
