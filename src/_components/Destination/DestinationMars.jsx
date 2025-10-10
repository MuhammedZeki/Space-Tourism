import "../../css/destination/moon/DestinationPageAllComponents.css";
import DescMoonImg from "../../assets/destination/image-mars.png";

const DestinationMars = ({ setTabs, tabs }) => {
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
            <p className="moon-title">MARS</p>
            <p className="moon-text">
              Don’t forget to pack your hiking boots. You’ll need them to tackle
              Olympus Mons, the tallest planetary mountain in our solar system.
              It’s two and a half times the size of Everest!
            </p>
          </div>
          <div className="destination-statistics">
            <div className="distance">
              <p className="distance-avg">AVG. DISTANCE</p>
              <p className="distance-km">225 MIL. KM</p>
            </div>
            <div className="travel">
              <p className="travel-time">EST. TRAVEL TIME</p>
              <p className="travel-day">9 MONTHS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationMars;
