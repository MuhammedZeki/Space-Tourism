import Header from "../_components/Header";
import "../css/home/HomePage.css";
const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <div className="heros">
          <div className="hero">
            <div className="texts">
              <p className="text-title">SO, YOU WANT TO TRAVEL TO</p>
              <p className="text-space">SPACE</p>
              <p className="text-content">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
            <div className="button">
              <div className="btn">EXPLORE</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
