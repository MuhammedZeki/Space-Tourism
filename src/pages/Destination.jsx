import { useState } from "react";
import Header from "../_components/Header";
import "../css/destination/DestinationPage.css";
import DestinationMoon from "../_components/Destination/DestinationMoon";
import DestinationMars from "../_components/Destination/DestinationMars";
import DestinationEuropa from "./../_components/Destination/DestinationEuropa";
import DestinationTitan from "../_components/Destination/DestinationTitan";

const Destination = () => {
  const [tabs, setTabs] = useState(0);
  return (
    <div className="destination-page">
      <Header />
      <div className="destination-content">
        <div className="page-title">
          <span>01</span>
          <p>PICK YOUR DESTINATION</p>
        </div>
        {tabs === 0 && <DestinationMoon tabs={tabs} setTabs={setTabs} />}
        {tabs === 1 && <DestinationMars tabs={tabs} setTabs={setTabs} />}
        {tabs === 2 && <DestinationEuropa tabs={tabs} setTabs={setTabs} />}
        {tabs === 3 && <DestinationTitan tabs={tabs} setTabs={setTabs} />}
      </div>
    </div>
  );
};

export default Destination;
