import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import { Button } from 'reactstrap';


const IssueBill = () => {
    const handlePrint = () => {
      window.print();
    };
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
    <div className='margin'>
      <h2 className="text-center">Issue bill</h2>
      <br></br>
      {booking && (
      <div className="card-body text-color">
            <form className="row g-3">
              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">
                  <b>Booking Id</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={booking.bookingId}
                  required
                  readOnly
                />
              </div>
              

              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">
                  <b>Customer Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={booking.customerName}
                  required
                  readOnly
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">
                  <b>Custome Contact</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={booking.customerContact}
                  required
                  readOnly
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">
                  <b>Check In</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={booking.checkIn}
                  required
                  readOnly
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">
                  <b>Check Out</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={booking.checkOut}
                  required
                  readOnly
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">
                  <b>Total Room</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={booking.totalRoom}
                  required
                  readOnly
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">
                  <b>Total Amount</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={"Rs " + booking.totalAmount}
                  required
                  readOnly
                />
              </div>
              <div className="d-flex aligns-items-center justify-content-center" >
                 <button onClick={handlePrint}>Issue Bill</button>
              </div>
              </form>
              </div>
           )}
    </div>
  )
}
export default IssueBill;