import CrewImg from "../../assets/crew/image-douglas-hurley.png";
import "../../css/crew/CrewPageAll.css";
const DouglasHurley = ({ tabs, setTabs }) => {
  return (
    <div className="content-inform">
      <div className="crew-leftBar">
        <div className="crew-top">
          <p className="crew-title">COMMANDER</p>
          <p className="crew-name">DOUGLAS HURLEY</p>
          <p className="crew-text">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
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

export default DouglasHurley;
