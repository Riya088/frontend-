import { Link } from "react-router-dom";

const LocationNavigator = (location) => {
  console.log(location);
  return (
    <div >
    <Link
      to={`/home/hotel/location/${location.item.id}/${location.item.city}`}
      style={{
        textDecoration: "none",
      }}
      className="text-color"
    >
      <b>
        {" "}
        <i>{location.item.city}</i>
      </b>
    </Link>
   </div>
  );
};

export default LocationNavigator;
