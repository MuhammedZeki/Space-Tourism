import "../css/destination/moon/DestinationPageMoon.css";
import DescMoonImg from "../assets/destination/image-moon.png";
const DestinationMoon = () => {
  return (
    <div className="moon-content">
      <div className="destination-img">
        <img src={DescMoonImg} alt="moon" />
      </div>
      <div className="explanation">
        <div className="cover">
          <div className="destination-tabs">
            <div className="tab active">MOON</div>
            <div className="tab">MARS</div>
            <div className="tab">EUROPA</div>
            <div className="tab">TITAN</div>
          </div>
          <div className="destination-text">
            <p className="moon-title">MOON</p>
            <p className="moon-text">
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
          </div>
          <div className="destination-statistics">
            <div className="distance">
              <p className="distance-avg">AVG. DISTANCE</p>
              <p className="distance-km">384.400 KM</p>
            </div>
            <div className="travel">
              <p className="travel-time">EST. TRAVEL TIME</p>
              <p className="travel-day">3 DAYS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationMoon;
