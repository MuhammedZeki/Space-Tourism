import CrewImg from "../../assets/crew/image-anousheh-ansari.png";
import "../../css/crew/CrewPageAll.css";

const AnoushehAnsari = ({ tabs, setTabs }) => {
  return (
    <div className="content-inform">
      <div className="crew-leftBar">
        <div className="crew-top">
          <p className="crew-title">Flight Engineer</p>
          <p className="crew-name">Anousheh Ansari</p>
          <p className="crew-text">
            Anousheh Ansari is an Iranian American engineer and co-founder of
            Prodea Systems. Ansari was the fourth self-funded space tourist, the
            first self-funded woman to fly to the ISS, and the first Iranian in
            space.
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

export default AnoushehAnsari;
