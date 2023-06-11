import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Button } from 'reactstrap';

export default function ListHotel() {
  const deleteHotel = (id) => {
    axios
      .delete(`http://localhost:8080/staffMembers/${id}`)
      .then((response) => {
        toast.success('Hotel deleted successfully');
      })
      .catch((error) => {
        toast.error('Something went wrong!');
      });
  };

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchAllHotels = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/hotel/fetch');
        setHotels(response.data.hotels);
      } catch (error) {
        console.log(error);
        toast.error('Error retrieving hotels');
      }
    };
    fetchAllHotels();
  }, []);

  if (!Array.isArray(hotels)) {
    return <div>Error: Failed to fetch hotels</div>;
  }

  return (
    <div className="margin">
      <br />
      <h2 className="text-center">Hotel List</h2>
      <div>
        <Link to="/admin/hotel/register" aria-current="page">
          <button className="btn btn-primary">Add Hotel</button>
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-hover text-color text-center">
          <thead className="table-bordered border-color bg-color custom-bg-text">
            <tr>
              <th scope="col">Hotel Name</th>
              <th scope="col">Description</th>
              <th scope="col">City</th>
              <th scope="col">Location Description</th>
              <th scope="col">Street</th>
              <th scope="col">Pincode</th>
              <th scope="col">Email</th>
              <th scope="col">Price Per Day</th>
              <th scope="col">Total Room</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel) => (
              <tr key={hotel.id}>
                <td>{hotel.name}</td>
                <td>{hotel.description}</td>
                <td>{hotel.location.city}</td>
                <td>{hotel.location.description}</td>
                <td>{hotel.street}</td>
                <td>{hotel.pincode}</td>
                <td>{hotel.emailId}</td>
                <td>{hotel.pricePerDay}</td>
                <td>{hotel.totalRoom}</td>
                <td>
                  <Link
                    to={`/admin/hotel/register`}
                    aria-current="page"
                  >
                    <button className="btn btn-success">Update</button>
                  </Link>
                  <Button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteHotel(hotel.id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
