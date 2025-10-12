import { useState } from "react";
import DouglasHurley from "../_components/Crew/DouglasHurley";
import Header from "../_components/Header";
import "../css/crew/CrewPage.css";
const Crew = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <div className="crew-page">
      <Header />
      <div className="crew-content">
        <div className="content-title">
          <span>02</span>
          <p>MEET YOUR CREW</p>
        </div>
        {tabs === 0 && <DouglasHurley tabs={tabs} setTabs={setTabs} />}
        {/* {tabs === 1 && <DestinationMars tabs={tabs} setTabs={setTabs} />}
        {tabs === 2 && <DestinationEuropa tabs={tabs} setTabs={setTabs} />}
        {tabs === 3 && <DestinationTitan tabs={tabs} setTabs={setTabs} />} */}
      </div>
    </div>
  );
};

export default Crew;
