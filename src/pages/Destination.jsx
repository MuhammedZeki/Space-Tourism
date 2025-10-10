import DestinationMoon from "../_components/DestinationMoon";
import Header from "../_components/Header";
import "../css/destination/DestinationPage.css";

const Destination = () => {
  return (
    <div className="destination-page">
      <Header />
      <div className="destination-content">
        <div className="page-title">
          <span>01</span>
          <p>PICK YOUR DESTINATION</p>
        </div>
        <DestinationMoon />
      </div>
    </div>
  );
};

export default Destination;
