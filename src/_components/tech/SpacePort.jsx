import TechImg from "../../assets/technology/image-spaceport-portrait.jpg";
import TechLand from "../../assets/technology/image-spaceport-landscape.jpg";
import "../../css/technology/TechAllPage.css";
const SpacePort = ({ tabs, setTabs }) => {
  return (
    <div className="tech-inform">
      <div className="left-bar">
        <div className="left-bar-content">
          <div className="left-content">
            <div
              className={`item ${tabs === 0 ? "bar-active" : ""}`}
              onClick={() => setTabs(0)}
            >
              <span>1</span>
            </div>
            <div
              className={`item ${tabs === 1 ? "bar-active" : ""}`}
              onClick={() => setTabs(1)}
            >
              <span>2</span>
            </div>
            <div
              className={`item ${tabs === 2 ? "bar-active" : ""}`}
              onClick={() => setTabs(2)}
            >
              <span>3</span>
            </div>
          </div>
          <div className="right-content">
            <div className="content-titles">
              <span>THE TERMINOLOGY…</span>
              <p>SPACEPORT</p>
            </div>
            <p className="content-text">
              A spaceport or cosmodrome is a site for launching -or receiving-
              spacecraft, by analogy to the seaport for ships or airport for
              aircraft. Based in the famous Cape Canaveral, our spaceport is
              ideally situated to take advantage of the Earth’s rotation for
              launch.
            </p>
          </div>
        </div>
      </div>
      <div className="right-bar">
        <picture>
          <source media="(max-width:900px)" srcSet={TechLand} />
          <img src={TechImg} alt="vehicle" />
        </picture>
      </div>
    </div>
  );
};

export default SpacePort;
