import TechImg from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import "../../css/technology/TechAllPage.css";
const LaunchVehicle = () => {
  return (
    <div className="tech-inform">
      <div className="left-bar">
        <div className="left-bar-content">
          <div className="left-content">
            <div className="item">
              <span>1</span>
            </div>
            <div className="item bar-active">
              <span>2</span>
            </div>
            <div className="item ">
              <span>3</span>
            </div>
          </div>
          <div className="right-content">
            <div className="content-titles">
              <span>THE TERMINOLOGY…</span>
              <p>LAUNCH VEHICLE</p>
            </div>
            <p className="content-text">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
      </div>
      <div className="right-bar">
        <img src={TechImg} alt="vehicle" />
      </div>
    </div>
  );
};

export default LaunchVehicle;
