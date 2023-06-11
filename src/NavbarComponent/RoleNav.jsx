import AdminHeader from "./AdminHeader";
import CustomerHeader from "./CustomerHeader";
import HotelHeader from "./HotelHeader";
import ManagerHeader from "./ManagerHeader";
import NormalHeader from "./NormalHeader";

const RoleNav = () => {
  const user = JSON.parse(sessionStorage.getItem("active-customer"));
  const admin = JSON.parse(sessionStorage.getItem("active-admin"));
  const manager=JSON.parse(sessionStorage.getItem("active-manager"));
  const hotel = JSON.parse(sessionStorage.getItem("active-hotel"));

  if (user != null) {
    return <CustomerHeader />;
  } else if (admin != null) {
    return <AdminHeader />;
  } else if (manager != null) {
    return <ManagerHeader />;
  }else if (hotel != null) {
    return <HotelHeader />;
  } else {
    return <NormalHeader />;
  }
};

export default RoleNav;
