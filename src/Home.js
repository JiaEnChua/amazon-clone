import React, { Fragment } from "react";
import "./Home.css";
import Product from "./Product";
import leanStartUp from "./pictures/lean-start-up.png";
import { useStateValue } from "./StateProvider";

function Home() {
  const [{ notif }, dispatch] = useStateValue();

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__containerNotifs">
          {notif?.map((item) => (
            <div className="home__containerNotif">
              {item?.title} been added!
            </div>
          ))}
        </div>

        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1934_SVOD_DXGY_5dollar/Amazon_GW_DesktopTallHero_RB-1934_SVOD_DXGY_5dollar_1500x600._CB420640874_.jpg"
          className="home__image"
        />
        <div className="home__row">
          <Product
            id={"00001"}
            title={"The lean startup"}
            price={29.99}
            image={leanStartUp}
            rating={5}
          />
          <Product
            id={"00002"}
            title={
              "Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide, Metal Black (C305B-200UN)"
            }
            price={278.99}
            image={
              "https://m.media-amazon.com/images/I/81Wt3h7-V2L._AC_UL320_.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={"00003"}
            title={"Apple iPad mini (Wi-Fi, 64GB) - Silver (Latest Model)"}
            price={349.99}
            image={
              "https://m.media-amazon.com/images/I/71Ha06XS-VL._AC_UY218_.jpg"
            }
            rating={5}
          />
          <Product
            id={"00004"}
            title={
              "Classic Accessories Veranda Water-Resistant 21 Inch Pyramid Torch Patio Heater Cover"
            }
            price={40.0}
            image={
              "https://m.media-amazon.com/images/I/31SbgUYlwkL._AC_SY200_.jpg"
            }
            rating={4}
          />
          <Product
            id={"00005"}
            title={
              "Downy Ultra Cool Cotton Liquid Fabric Conditioner (Fabric Softener) 51 Fl Oz (Pack of 2)"
            }
            price={14.82}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81%2BQq0tgU4L._AC_SX466_PIbundle-2,TopRight,0,0_SH20_.jpg"
            }
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id={"00006"}
            title={
              "All-New Insignia NS-50DF710NA21 50-inch Smart 4K UHD - Fire TV Edition, Released 2020"
            }
            price={349.99}
            image={
              "https://m.media-amazon.com/images/I/61+OhM4LEUL._AC_UY218_.jpg"
            }
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
