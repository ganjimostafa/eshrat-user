import Path from "../../assets/icon/Path.svg";
import Clock from "../../assets/icon/Clock.svg";
import Date from "../../assets/icon/Date.svg";

import { Link } from "react-router-dom";
import Style from "./TravelCard.module.scss";
function TravelCard({
  id,
  origin,
  destination,
  date,
  time,
  companyLogo,
  price,
  href = "/",
}) {
  return (
    <div className={Style["travelCard"]} key={id}>
      <div className={Style["travelCard__path"]}>
        <span>{origin}</span>
        <img className={Style["travelCard__path--logo"]} src={Path} />
        <span>{destination}</span>
      </div>

      <img className={Style["travelCard__company"]} src={companyLogo} />

      <div className={Style["travelCard__time"]}>
        <div>
          <span className={Style["travelCard__time--clock"]}>{time}</span>
          <img src={Clock} />
        </div>
        <div>
          <span>{date}</span>
          <img src={Date} />
        </div>
      </div>

      <Link to={href} className={Style["travelCard__button"]}>انتخاب</Link>

      <div className={Style["travelCard__price"]}>{price}</div>
    </div>
  );
}
export default TravelCard;
