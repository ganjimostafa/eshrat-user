import React, { Fragment, useState } from "react";
import landing from "../../assets/images/landing.jpg";
import { DatePicker } from "jalali-react-datepicker";
import Style from "./Main.module.scss";
import { ToggleButton } from "@mui/material";
import { ToggleButtonGroup } from "@mui/material";
import Header from "../../components/Header";
import TravelCard from "../../components/TravelCard";
import { Autocomplete, TextField } from "@mui/material";
import { CITY_LIST } from "../../data/City";
import TRAVEL from "../../data/Travel.js";

function Main() {
  const [isSearched, setIsSearched] = useState(true);
  const [alignment, setAlignment] = useState("airplane");
  console.log(alignment);
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <div className={Style["landing"]}>
      <form className={Style["landing__search"]}>
        <ToggleButtonGroup
          size="large"
          color="primary"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="Platform"
          className={Style["landing__search--toggle"]}
          sx={{
            "& fieldset": { border: "none" },
          }}
        >
          <ToggleButton
            className={Style["landing__search--toggle--button"]}
            value="bus"
          >
            اتوبوس
          </ToggleButton>
          <ToggleButton
            className={Style["landing__search--toggle--button"]}
            value="train"
          >
            قطار
          </ToggleButton>
          <ToggleButton
            className={Style["landing__search--toggle--button"]}
            value="airplane"
          >
            هواپیما
          </ToggleButton>
        </ToggleButtonGroup>
        <Autocomplete
          sx={{
            direction: "rtl",
            borderRadius: 2,
            "& fieldset": { border: "none" },
          }}
          disablePortal
          id="combo-box-demo"
          options={CITY_LIST}
          renderInput={(params) => <TextField {...params} label="مبدا" />}
          className={Style["landing__search--autocomplete"]}
        />
        <Autocomplete
          sx={{
            direction: "rtl",
            borderRadius: 2,
            "& fieldset": { border: "none" },
          }}
          disablePortal
          id="combo-box-demo"
          options={CITY_LIST}
          renderInput={(params) => <TextField {...params} label="مقصد" />}
          className={Style["landing__search--autocomplete"]}
        />

        <button type="submit" className={Style["landing__search--submit"]}>
          جست و جو
        </button>
        <div className={Style["landing__search--date"]}>
          <span></span>
          <DatePicker
            timePicker={false}
            modalZIndex={50}
            theme={IDatePickerTheme}
            className={Style["landing__search--date__picker"]}
          />
        </div>
      </form>
      <div className={Style["landing__items"]}>
        {isSearched ? (
          TRAVEL.map((item, index) => (
            <TravelCard
              
              origin={item.origin}
              destination={item.destination}
              date={item.date}
              time={item.time}
              companyLogo={item.companyLogo}
              price={item.price}
              href={`/travels/${item.id}`}
            />
          ))
        ) : (
          <img className={Style["landing__items--img"]} src={landing} />
        )}
      </div>
    </div>
  );
}

const IDatePickerTheme = {
  backColor: "#FFFFFF",
  // head
  headBackColor: "#260A45",
  headTitleColor: "#aeaeae",
  headTimeTitleColor: "#617fdf",
  headArrowColor: "#000",
  headRangeBackColor: "#E8F0FF",
  headRangeColor: "#000",

  // weekdays color
  weekDaysColor: "#3F3F3F",

  // days
  daysColor: "#000",
  daysBackColor: "#FFFFFF",
  holidaysColor: "#edb53b",
  holidaysBackColor: "#FFFFFF",
  daysRound: "20%",

  selectDayColor: "#fff",
  selectDayBackColor: "#260A45",

  // buttons
  submitBackColor: "#D6D6D6",
  submitHoverBackColor: "#f3f3f3",
  submitColor: "#000",
  submitHoverColor: "#000",
  cancelBackColor: "#fff",
  cancelHoverBackColor: "#D6D6D6",
  cancelColor: "#000",
  cancelHoverColor: "#000",
  changeViewButtonBackColor: "#D6D6D6",
  changeViewButtonHoverBackColor: "#fff",
  changeViewButtonColor: "#000",
  changeViewButtonHoverColor: "#617fdf",
  // time
  timeBackColor: "#f0f0f0",
  timeNumberColor: "#000",
  handBackColor: "#617fdf",
  handCircleColor: "#617fdf",
  selectedNumberColor: "#fff",
};

export default Main;
