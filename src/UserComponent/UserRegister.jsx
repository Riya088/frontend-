import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const UserRegister = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    contact: "",
    street: "",
    city: "",
    pincode: "",
    role: "",
    age: "",
    sex: "",
  });

  if (document.URL.indexOf("admin") !== -1) {
    user.role = "Admin";
  } else if (document.URL.indexOf("hotel") !== -1) {
    user.role = "Hotel";
  } else if (document.URL.indexOf("manager") !== -1) {
    user.role = "Manager";
  } else if (document.URL.indexOf("customer") !== -1) {
    user.role = "Customer";
  }

  console.log("ROLE FETCHED: " + user.role);

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    let inputValue = value;

    if (name === "firstName" || name === "lastName") {
      inputValue = value.replace(/[^a-zA-Z]/g, "").slice(0, 50); // Remove non-alphabetic characters and limit length
    } else if (name === "contact") {
      const contactPattern = /^\d{0,10}$/; // Regular expression for contact validation

      if (!contactPattern.test(value)) {
        // Invalid contact format
        return;
      }
    }

    setUser((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  const [genders, setGenders] = useState([]);

  const retrieveAllGenders = async () => {
    const response = await axios.get("http://localhost:8080/api/user/gender");
    return response.data;
  };

  useEffect(() => {
    const getAllGenders = async () => {
      const allGenders = await retrieveAllGenders();
      if (allGenders) {
        setGenders(allGenders.genders);
      }
    };

    getAllGenders();
  }, []);

  const saveUser = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/api/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((result) => {
      toast.success("Registered Successfully!!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      result
        .json()
        .then((res) => {
          console.log("response", res);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div className="margin">
      <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          className="card form-card border-color text-color custom-bg"
          style={{ width: "50rem", height: "860px"}}
        >
          
          <div className="card-header bg-color custom-bg-text text-center">
            <h5 className="card-title">Register {user.role}</h5>
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={saveUser}>
              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="title" className="form-label">
                  <b>
                    First Name<span className="text-danger">*</span>
                  </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  onChange={handleUserInput}
                  value={user.firstName}
                  required
                />
              </div>
              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="description" className="form-label">
                  <b>
                    Last Name<span className="text-danger">*</span>
                  </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  onChange={handleUserInput}
                  value={user.lastName}
                  required
                />
              </div>

              <div className="col-md-6 mb-3 text-color">
                <b>
                  <label className="form-label">
                    Email Id<span className="text-danger">*</span>
                  </label>
                </b>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={user.emailId}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="password" className="form-label">
                  <b>Password<span className="text-danger">*</span></b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={user.password}
                  required
                />
              </div>

              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="sex" className="form-label">
                  <b>User Gender</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="sex"
                >
                  <option value="0">Select Gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                 
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="contact" className="form-label">
                  <b>
                    Contact No<span className="text-danger">*</span>
                  </b>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="contact"
                  name="contact"
                  onChange={handleUserInput}
                  value={user.contact}
                  pattern="[0-9]{10}"
                  title="Contact number must be 10 digits"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="contact" className="form-label">
                  <b>Age</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  onChange={handleUserInput}
                  value={user.age}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="description" className="form-label">
                  <b> Street</b>
                </label>
                <textarea
                  className="form-control"
                  id="street"
                  name="street"
                  rows="3"
                  onChange={handleUserInput}
                  value={user.street}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="price" className="form-label">
                  <b>
                    City<span className="text-danger">*</span>
                  </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  onChange={handleUserInput}
                  value={user.city}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="pincode" className="form-label">
                  <b>
                    Pincode<span className="text-danger">*</span>
                  </b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="pincode"
                  name="pincode"
                  onChange={handleUserInput}
                  value={user.pincode}
                  required
                />
              </div>
              <br>
                </br>
                <br>
                </br>
                <br></br> <br>
                </br>
                <br>
                </br>
                <br></br>
              <div className="d-flex aligns-items-center justify-content-center">
                <input
                  type="submit"
                  className="btn bg-color custom-bg-text col-md-3"
                  value="Register User"
                />
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;