import React from "react";
import "./Home.css";
import Product from "./Product";
import leanStartUp from "./pictures/lean-start-up.png";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1934_SVOD_DXGY_5dollar/Amazon_GW_DesktopTallHero_RB-1934_SVOD_DXGY_5dollar_1500x600._CB420640874_.jpg"
          className="home__image"
        />
        <div className="home__row">
          <Product
            title={"The lean startup"}
            price={29.99}
            image={leanStartUp}
            rating={5}
          />
          <Product
            title={"The lean startup"}
            price={49.99}
            image={leanStartUp}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            title={"The lean startup"}
            price={29.99}
            image={leanStartUp}
            rating={5}
          />
          <Product
            title={"The lean startup"}
            price={29.99}
            image={leanStartUp}
            rating={4}
          />
          <Product
            title={"The lean startup"}
            price={29.99}
            image={leanStartUp}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            title={"The lean startup"}
            price={29.99}
            image={leanStartUp}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
