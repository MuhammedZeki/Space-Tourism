import "../../css/destination/moon/DestinationPageAllComponents.css";
import DescMoonImg from "../../assets/destination/image-titan.png";
const DestinationTitan = ({ setTabs, tabs }) => {
  return (
    <div className="moon-content">
      <div className="destination-img">
        <img src={DescMoonImg} alt="mars" />
      </div>
      <div className="explanation">
        <div className="cover">
          <div className="destination-tabs">
            <div
              onClick={() => setTabs(0)}
              className={`tab ${tabs === 0 && "active"}`}
            >
              MOON
            </div>
            <div
              onClick={() => setTabs(1)}
              className={`tab ${tabs === 1 && "active"}`}
            >
              MARS
            </div>
            <div
              onClick={() => setTabs(2)}
              className={`tab ${tabs === 2 && "active"}`}
            >
              EUROPA
            </div>
            <div
              onClick={() => setTabs(3)}
              className={`tab ${tabs === 3 && "active"}`}
            >
              TITAN
            </div>
          </div>
          <div className="destination-text">
            <p className="moon-title">TITAN</p>
            <p className="moon-text">
              The only moon known to have a dense atmosphere other than Earth,
              Titan is a home away from home (just a few hundred degrees
              colder!). As a bonus, you get striking views of the Rings of
              Saturn.
            </p>
          </div>
          <div className="destination-statistics">
            <div className="distance">
              <p className="distance-avg">AVG. DISTANCE</p>
              <p className="distance-km">1.6 BIL. KM</p>
            </div>
            <div className="travel">
              <p className="travel-time">EST. TRAVEL TIME</p>
              <p className="travel-day">7 YEARS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationTitan;
