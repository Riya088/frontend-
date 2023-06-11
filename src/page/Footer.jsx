import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid bg-white mt-5">
      <div className="row">
        <div className="col-lg-4 p-4">
          <h3 className="h-font fw-bold fs-3 mb-2">Royal HOTELS</h3>
          <p>
          At Hotel Management Code, our mission is to provide efficient and reliable software solutions for hotel management. We strive to simplify hotel operations, enhance guest experiences, and optimize overall efficiency.
          </p>
        </div>
        <div className="col-lg-4 p-4">
          <h5 className="mb-3">Link</h5>
          <a href="#" className="d-inline-block mb-2 text-dark text-decoration-none">Home</a><br/>
          <a href="#" className="d-inline-block mb-2 text-dark text-decoration-none">About</a><br/>
          <a href="#" className="d-inline-block mb-2 text-dark text-decoration-none">Contact Us</a>
        </div>
        <div className="col-lg-4 p-4">
          <h5 className="mb-3">Follow us</h5>
          <a href="#" className="d-inline-block text-dark text-decoration-none mb-2">
          <i class="fa fa-twitter" aria-hidden="true"></i>Twitter
          </a><br/>
          <a href="#" className="d-inline-block text-dark text-decoration-none mb-2">
            <i className="bi bi-facebook me-1"></i>Facebook
          </a><br/>
          <a href="#" className="d-inline-block text-dark text-decoration-none">
            <i className="bi bi-instagram me-1"></i>Instagram
          </a><br/>
        </div>
      </div>
      <h6 className="text-center bg-dark text-white p-3 m-0">Design and Developed by ROYAL HOTEL DEVELOPERS</h6>
    </div>
  );
};

export default Footer;
