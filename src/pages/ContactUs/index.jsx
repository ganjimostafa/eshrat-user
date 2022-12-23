import React, { useState } from "react";
import CallCenter from "../../assets/images/CallCenter.svg";
import Style from "./ContactUs.module.scss";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import { useEffect } from "react";
import { getSupporter } from "../../api/support";

function ContactUs() {
  const [supporter, setSupporter] = useState([]);
  useEffect(() => {
    getSupporter()
      .then((data) => {
        setSupporter(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(supporter);

  return (
    <div className={Style["contact"]}>
      <img src={CallCenter}></img>
      <div className={Style["contact__info"]}>
        <a
          href={supporter.telegram === undefined ? "" : supporter.telegram}
          target="_blank"
        >
          پشتیبانی تلگرام
          <TelegramIcon />
        </a>
        <a
          href={supporter.whatsapp === undefined ? "" : supporter.whatsapp}
          target="_blank"
        >
          پشتیبانی واتساپ
          <WhatsAppIcon />
        </a>
        <a
          href={
            supporter.phoneNumber1 === undefined ? "" : supporter.phoneNumber1
          }
        >
          09137676703
          <CallIcon />
        </a>
        <a
          href={
            supporter.phoneNumber2 === undefined ? "" : supporter.phoneNumber2
          }
        >
          09338393348
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
