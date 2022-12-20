import { useState } from "react";
import Style from "./Travel.module.scss";
import TRAVEL from "../../data/Travel.js";
import { Autocomplete, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { DatePicker } from "jalali-react-datepicker";
import Traveler from "./../../assets/images/Traveler.svg";

function Travel() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={Style["travel"]}>
      <div className={Style["travel__info"]}>
        <h3>جزئیات بلیط</h3>
        <div className={Style["travel__info--details"]}>
          <span>مشهد به تهران </span>
          <span>ساعت 9:35</span>
          <span>تاریخ 15/10/1401</span>
          <span>پرواز اکونومی</span>
          <span>فرودگاه مهراباد</span>
          <span>مقدار بار مجاز 20 کیلوگرم</span>
        </div>
        <img src={Traveler}></img>
      </div>

      <form className={Style["travel__submit"]}>
        <TextField
          sx={{
            direction: "rtl",
            borderRadius: 2,
            "& fieldset": { border: "none" },
          }}
          id="outlined-basic"
          label="نام"
          variant="outlined"
          className={Style["travel__submit--textfield"]}
        />
        <TextField
          sx={{
            direction: "rtl",
            borderRadius: 2,
            "& fieldset": { border: "none" },
          }}
          id="outlined-basic"
          label="نام خانوادگی"
          variant="outlined"
          className={Style["travel__submit--textfield"]}
        />
        <TextField
          sx={{
            direction: "rtl",
            borderRadius: 2,
            "& fieldset": { border: "none" },
          }}
          id="outlined-basic"
          label="کد ملی"
          variant="outlined"
          className={Style["travel__submit--textfield"]}
        />
        <TextField
          sx={{
            direction: "rtl",
            borderRadius: 2,
            "& fieldset": { border: "none" },
          }}
          id="outlined-basic"
          label="شماره تلفن"
          variant="outlined"
          className={Style["travel__submit--textfield"]}
        />
        <FormControl className={Style["travel__submit--select"]}>
          <InputLabel id="demo-simple-select-label">جنسیت</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="جنسیت"
            onChange={handleChange}
            sx={{
              direction: "rtl",
              borderRadius: 2,
              "& fieldset": { border: "none" },
            }}
            className={Style["travel__submit--select__option"]}
          >
            <MenuItem value={"man"}>مرد</MenuItem>
            <MenuItem value={"woman"}>زن</MenuItem>
          </Select>
        </FormControl>
        <div className={Style["travel__submit--date"]}>
          <span></span>
          <DatePicker
            timePicker={false}
            modalZIndex={50}
            theme={IDatePickerTheme}
            className={Style["travel__submit--date__picker"]}
          />
        </div>
        <button type="submit" className={Style["travel__submit--submit"]}>
          ثبت اطلاعات
        </button>
      </form>
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

export default Travel;
