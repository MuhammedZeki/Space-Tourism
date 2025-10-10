import "../../css/destination/moon/DestinationPageAllComponents.css";
import DescMoonImg from "../../assets/destination/image-europa.png";

const DestinationEuropa = ({ setTabs, tabs }) => {
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
            <p className="moon-title">EUROPA</p>
            <p className="moon-text">
              The smallest of the four Galilean moons orbiting Jupiter, Europa
              is a winter lover’s dream. With an icy surface, it’s perfect for a
              bit of ice skating, curling, hockey, or simple relaxation in your
              snug wintery cabin.
            </p>
          </div>
          <div className="destination-statistics">
            <div className="distance">
              <p className="distance-avg">AVG. DISTANCE</p>
              <p className="distance-km">628 MIL. KM</p>
            </div>
            <div className="travel">
              <p className="travel-time">EST. TRAVEL TIME</p>
              <p className="travel-day">3 YEARS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationEuropa;
