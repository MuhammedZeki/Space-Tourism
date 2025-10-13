import { useState } from "react";
import Header from "../_components/Header";
import "../css/technology/TechnologyPage.css";
import LaunchVehicle from "../_components/tech/LaunchVehicle";
const Technology = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <div className="tech-page">
      <Header />
      <div className="tech-content">
        <div className="tech-title">
          <span>03</span>
          <p>SPACE LAUNCH 101</p>
        </div>
        {tabs === 0 && <LaunchVehicle tabs={tabs} setTabs={setTabs} />}
      </div>
    </div>
  );
};

export default Technology;
