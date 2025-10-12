import CrewImg from "../../assets/crew/image-mark-shuttleworth.png";
import "../../css/crew/CrewPageAll.css";

const MarkShuttleworth = ({ tabs, setTabs }) => {
  return (
    <div className="content-inform">
      <div className="crew-leftBar">
        <div className="crew-top">
          <p className="crew-title">Mission Specialist </p>
          <p className="crew-name">MARK SHUTTLEWORTH</p>
          <p className="crew-text">
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the
            company behind the Linux-based Ubuntu operating system. Shuttleworth
            became the first South African to travel to space as a space
            tourist.
          </p>
        </div>
        <div className="crew-bottom">
          <div
            onClick={() => setTabs(0)}
            className={`crew-tab ${tabs === 0 && "active"}`}
          ></div>
          <div
            onClick={() => setTabs(1)}
            className={`crew-tab ${tabs === 1 && "active"}`}
          ></div>
          <div
            onClick={() => setTabs(2)}
            className={`crew-tab ${tabs === 2 && "active"}`}
          ></div>
          <div
            onClick={() => setTabs(3)}
            className={`crew-tab ${tabs === 3 && "active"}`}
          ></div>
        </div>
      </div>
      <div className="crew-rightBar">
        <img src={CrewImg} alt="crew" />
      </div>
    </div>
  );
};

export default MarkShuttleworth;
