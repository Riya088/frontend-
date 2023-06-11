import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React from "react";
function validateCardNumber(event) {
  // Remove any non-digit characters from the input
  const cardNumber = event.target.value.replace(/\D/g, '');

  // Check if the card number has more than 16 digits
  if (cardNumber.length > 16) {
    // If more than 16 digits, truncate the input value
    event.target.value = cardNumber.slice(0, 16);
  }
}
function validateCVV(event) {
  // Remove any non-digit characters from the input
  const cvv = event.target.value.replace(/\D/g, '');

  // Check if the CVV has more than 3 digits
  if (cvv.length > 3) {
    // If more than 3 digits, truncate the input value
    event.target.value = cvv.slice(0, 3);
  }
}
function validateEXP(event){
  const exp=event.target.value.replace(/\D/g, "");
  if (exp.length > 6) {
    // If more than 3 digits, truncate the input value
    event.target.value = exp.slice(0, 3);
  }
}
const AddPayment = () => {
  const [booking, setBooking] = useState({});

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/book/hotel/fetch/last"
        );
        const fetchedBooking = response.data;
        setBooking(fetchedBooking);

        // Fetch additional data using the last booking ID
        const bookingId = fetchedBooking.id;
        const additionalResponse = await axios.get(
          `http://localhost:8080/api/book/hotel/fetch/${bookingId}`
        );
        const additionalData = additionalResponse.data;

        // Merge the additional data into the booking object
        const mergedBooking = { ...fetchedBooking, ...additionalData };
        setBooking(mergedBooking);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooking();
  }, []);
  return (
    <div className="margin">
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="row justify-content-center">
        <div className="col-md-9 col-lg-7 col-xl-5">
          <h1 style={{  color: "#ffffff",fontFamily: "sans-serif", textAlign: "center" }}>
           
            Payment Form
          </h1>
          <br>
          </br>
          <div className="card"style={{  color: "#000000",fontFamily: "sans-serif", textAlign: "center" }}>
         
            <div className="card-body">
              <div className="d-flex justify-content-between mb-0">
                <p className="text-color mb-0">Total payment</p>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={"Rs " + booking.totalAmount}
                    required
                    readOnly
                  />
                </div>
              </div>

              <div
                className="rounded-bottom"
                style={{ backgroundColor: "#ffffff" }}
              >
                <div className="card-body">
                  <h4 className="mb-4" >Your payment details</h4>
                  <div className="mb-3">
                    <label htmlFor="cardNumber" className="form-label">
                      Card Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="cardNumber"
                      placeholder="1234 5678 1234 5678"
                      onChange={validateCardNumber}
                      required
                    />
                  </div>

                  <div className="row mb-3">
                    <div className="col-6">
                      <label htmlFor="expire" className="form-label">
                        Expire
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="expire"
                        placeholder="MM/YYYY"
                        onChange={validateEXP}
                        required
                      />
                    </div>

                    <div className="col-6">
                      <label htmlFor="cvv" className="form-label">
                        CVV
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="cvv"
                        placeholder="CVV"
                        onChange={validateCVV}
                        required
                      />
                        <br></br>
                        
                    </div>
                 
                    <Link
                      to={`/customer/issue/bill/booking/${booking.id}`}
                      className="nav-link active  btn-lg"
                      aria-current="page"
                    >
                      <b ><button type="button" class="btn btn-primary btn-lg">Pay amount</button> </b>
                      <ToastContainer />
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div> 
  );
};
export default AddPayment;
