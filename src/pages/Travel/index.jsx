import { useState } from "react";
import Style from "./Travel.module.scss";
import TRAVEL from "../../data/Travel.js";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { DatePicker } from "jalali-react-datepicker";
import Traveler from "./../../assets/images/Traveler.svg";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetails, getPassenger, reservation } from "../../api";
import { display, flexbox } from "@mui/system";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import OfflinePinRoundedIcon from "@mui/icons-material/OfflinePinRounded";

function Travel() {
  const [gender, setGender] = useState("");
  const { number } = useParams();
  const [detail, setDetail] = useState({});
  const [IsLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationalCode, setNationalCode] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [token, setToken] = useState();

  const [isSubmit, setIsSubmit] = useState(-1);

  const [isReserved, setIsReserved] = useState(-1);

  const [trackingCode, setTrackingCode] = useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    getDetails(number)
      .then((data) => {
        setDetail(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(true);
      });
  }, []);

  const handleSubmitPassenger = (e) => {
    e.preventDefault();
    setIsSubmit(0);
    getPassenger(name, lastName, nationalCode, gender, birthDate)
      .then((data) => {
        setToken(data);
        setIsSubmit(1);
      })
      .catch((error) => {
        console.log(error);
        setIsSubmit(0);
      });
  };

  const handleReserveTicket = (e) => {
    e.preventDefault();
    setIsReserved(0);
    reservation(token, number)
      .then((data) => {
        setTrackingCode(data);

        console.log(data);
        setIsReserved(1);
      })
      .catch((error) => {
        setIsReserved(0);
        console.log(error);
      });
  };

  return (
    <div className={Style["root"]}>
      <div className={Style["travel"]}>
        <div className={Style["travel__info"]}>
          <h3>جزئیات بلیط</h3>
          {IsLoading ? (
            <CircularProgress size={100} />
          ) : (
            <div className={Style["travel__info--details"]}>
              <span>
                {detail.origin === undefined ? "" : detail.origin} به{" "}
                {detail.destination === undefined ? "" : detail.destination}{" "}
              </span>
              <span>
                ساعت {detail.travelTime === undefined ? "" : detail.travelTime}
              </span>
              <span>
                تاریخ {detail.travelDate === undefined ? "" : detail.travelDate}
              </span>
              <span>
                {" "}
                {detail.terminal === undefined
                  ? ""
                  : detail.terminal} فرودگاه{" "}
              </span>
              <span>مقدار بار مجاز 20 کیلوگرم</span>
            </div>
          )}
          <img src={Traveler}></img>
        </div>

        <form className={Style["travel__submit"]}>
          {isSubmit === 1 && (
            <div className={Style["success"]}>
              <HowToRegRoundedIcon fontSize="large" color="success" />
              <span className={Style["success_detail"]}>
                اطلاعات شما با موفقیت ثبت شد برای رزرو بلیط بروی دکمه رزرو و
                پرداخت کلیک کنید
              </span>
            </div>
          )}
          {isSubmit === 0 && <CircularProgress size={100} />}
          {isSubmit === -1 && (
            <>
              <TextField
                sx={{
                  direction: "rtl",
                  borderRadius: 2,
                  "& fieldset": { border: "none" },
                }}
                type="text"
                id="outlined-basic"
                label="نام"
                variant="outlined"
                className={Style["travel__submit--textfield"]}
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                sx={{
                  direction: "rtl",
                  borderRadius: 2,
                  "& fieldset": { border: "none" },
                }}
                type="text"
                id="outlined-basic"
                label="نام خانوادگی"
                variant="outlined"
                className={Style["travel__submit--textfield"]}
                onChange={(event) => setLastName(event.target.value)}
              />
              <TextField
                sx={{
                  direction: "rtl",
                  borderRadius: 2,
                  "& fieldset": { border: "none" },
                }}
                type="number"
                id="outlined-basic"
                label="کد ملی"
                variant="outlined"
                className={Style["travel__submit--textfield"]}
                onChange={(event) => setNationalCode(event.target.value)}
              />
              <TextField
                sx={{
                  direction: "rtl",
                  borderRadius: 2,
                  "& fieldset": { border: "none" },
                }}
                type="number"
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
                  value={gender}
                  label="جنسیت"
                  onChange={handleChange}
                  sx={{
                    direction: "rtl",
                    borderRadius: 2,
                    "& fieldset": { border: "none" },
                  }}
                  className={Style["travel__submit--select__option"]}
                >
                  <MenuItem value={"male"}>مرد</MenuItem>
                  <MenuItem value={"female"}>زن</MenuItem>
                </Select>
              </FormControl>
              <div className={Style["travel__submit--date"]}>
                <span></span>
                <DatePicker
                  timePicker={false}
                  modalZIndex={50}
                  theme={IDatePickerTheme}
                  className={Style["travel__submit--date__picker"]}
                  onClickSubmitButton={({ value }) =>
                    setBirthDate(new Date(value).toISOString().slice(0, 10))
                  }
                />
              </div>
              <button
                onClick={handleSubmitPassenger}
                className={Style["travel__submit--submit"]}
              >
                ثبت اطلاعات
              </button>
            </>
          )}
          <div className={Style["travel__submit--reserve"]}>
            {isReserved === -1 && (
              <button
                className={Style["travel__submit--reserve__button"]}
                onClick={handleReserveTicket}
              >
                رزرو و پرداخت
              </button>
            )}
            {isReserved === 0 && <CircularProgress size={100} />}
            {isReserved === 1 && (
              <div className={Style["reserved"]}>
                <OfflinePinRoundedIcon fontSize="large" color="success" />
                <span>بلیط با موفقیت ثبت شد</span>
                <span> :کد رهگیری </span>
                <span className={Style["reserved__track"]}>{trackingCode}</span>
              </div>
            )}
          </div>
        </form>
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

export default Travel;
