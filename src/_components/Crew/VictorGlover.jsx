import CrewImg from "../../assets/crew/image-victor-glover.png";
import "../../css/crew/CrewPageAll.css";

const VictorGlover = ({ tabs, setTabs }) => {
  return (
    <div className="content-inform">
      <div className="crew-leftBar">
        <div className="crew-top">
          <p className="crew-title">PILOT</p>
          <p className="crew-name">Victor Glover</p>
          <p className="crew-text">
            Pilot on the first operational flight of the SpaceX Crew Dragon to
            the International Space Station. Glover is a commander in the U.S.
            Navy where he pilots an F/A-18.He was a crew member of Expedition
            64, and served as a station systems flight engineer.
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

export default VictorGlover;
