import TechImg from "../../assets/technology/image-space-capsule-portrait.jpg";
import TechLand from "../../assets/technology/image-space-capsule-landscape.jpg";
import "../../css/technology/TechAllPage.css";

const SpaceCapsule = ({ tabs, setTabs }) => {
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
              <p>SPACE CAPSULE</p>
            </div>
            <p className="content-text">
              A space capsule is an often-crewed spacecraft that uses a
              blunt-body reentry capsule to reenter the Earth's atmosphere
              without wings. Our capsule is where you'll spend your time during
              the flight. It includes a space gym, cinema, and plenty of other
              activities to keep you entertained.
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

export default SpaceCapsule;
