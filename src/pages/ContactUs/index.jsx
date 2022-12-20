import React from "react";
import CallCenter from "../../assets/images/CallCenter.svg";
import Style from "./ContactUs.module.scss";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";

function ContactUs() {
  return (
    <div className={Style["contact"]}>
      <img src={CallCenter}></img>
      <div className={Style["contact__info"]}>
        <a href="https://telegram.me/mostafa_gs" target="_blank">
          پشتیبانی تلگرام
          <TelegramIcon />
        </a>
        <a href="https://wa.me/+989137676703" target="_blank">
          پشتیبانی واتساپ
          <WhatsAppIcon />
        </a>
        <a href="tel:+989137676703">
          09137676703  <CallIcon />
        </a>
        <a href="tel:+989338393348">
          09338393348  <CallIcon />
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
