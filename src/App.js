import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./page/AboutUs";
import ContactUs from "./page/ContactUs";
import Header from "./NavbarComponent/Header";
import HomePage from "./page/HomePage";
import AddLocation from "./LocationComponent/AddLocation";
import AddFacility from "./FacilityComponent/AddFacility";
import AddHotelForm from "./HotelComponent/AddHotelForm";
import UserRegister from "./UserComponent/UserRegister";
import Hotel from "./HotelComponent/Hotel";
import AddHotelFacilities from "./FacilityComponent/AddHotelFacilities";
import AddHotelReview from "./HotelReviewComponent/AddHotelReview";
import UserLoginForm from "./UserComponent/UserLoginForm";
import ViewAllBooking from "./BookingComponent/ViewAllBooking";
import ViewMyBooking from "./BookingComponent/ViewMyBooking";
import AddStaff from "./ManagerComponent/AddStaff";
import ViewMyHotelBookings from "./BookingComponent/ViewMyHotelBookings";
import VerifyBooking from "./BookingComponent/VerifyBooking";
import AddPayment from "./BookingComponent/AddPayment";
import IssueBill from "./BookingComponent/IssueBill";
import SaveAllStaff from "./ManagerComponent/SaveAllStaff";
import ViewPage from "./BookingComponent/ViewPage";
import ListHotel from "./HotelComponent/ListHotel";
function App() {
  return (
   <div className="All">
    <div className="headerApp">
      <Header />
    </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/all/hotel/location" element={<HomePage />} />
        <Route
          path="/home/hotel/location/:locationId/:locationName"
          element={<HomePage />}
        />

        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="admin/add-location" element={<AddLocation />} />
        <Route path="admin/add-facility" element={<AddFacility />} />
        <Route path="admin/hotel/register" element={<AddHotelForm />} />
        
        <Route path="admin/manager/register" element={<AddHotelForm />} />
        <Route path="user/manager/add/staff" element={<AddStaff/>}/>
        <Route path="user/hotel/register" element={<UserRegister />} />
        <Route path="user/customer/register" element={<UserRegister />} />
        <Route path="user/admin/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route
          path="/home/hotel/location/:locationId/:locationName"
          element={<HomePage />}
        />
        <Route
          path="hotel/:hotelId/add/facility"
          element={<AddHotelFacilities />}
        />
        <Route path="listhotel" element={<ListHotel/>}/>
        <Route
          path="hotel/:hotelId/location/:locationId/add/review"
          element={<AddHotelReview />}
        />
        <Route
          path="/hotel/:hotelId/location/:locationId"
          element={<Hotel />}
        />
         <Route path="/hotel/:hotelId/location/:locationId/viewpage/booking/:bookingId" element={<ViewPage/>}/>
         <Route
          path="/customer/add/payment/booking/:bookingId"
  
          element={<AddPayment />}
        />
        <Route
          path="/customer/Issue/bill/booking/:bookingId"
          element={<IssueBill />}/>
        <Route path="user/admin/booking/all" element={<ViewAllBooking />} />
        <Route path="user/manager/booking/all" element={<ViewAllBooking />} />
        <Route path="manager/save/all" element={<SaveAllStaff/>} />
      
        <Route path="user/hotel/bookings" element={<ViewMyBooking />} />
        <Route
          path="user/hotel/bookings/all"
          element={<ViewMyHotelBookings />}
        />
         
        <Route
          path="/hotel/verify/booking/:bookingId"
          element={<VerifyBooking />}
        />
        
        
      </Routes>
    </div>
  );
}

export default App;
