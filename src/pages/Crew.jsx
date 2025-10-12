import { useState } from "react";
import DouglasHurley from "../_components/Crew/DouglasHurley";
import Header from "../_components/Header";
import "../css/crew/CrewPage.css";
import MarkShuttleworth from "../_components/Crew/MarkShuttleworth";
import VictorGlover from "../_components/Crew/VictorGlover";
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
        {tabs === 1 && <MarkShuttleworth tabs={tabs} setTabs={setTabs} />}
        {tabs === 2 && <VictorGlover tabs={tabs} setTabs={setTabs} />}
      </div>
    </div>
  );
};

export default Crew;
