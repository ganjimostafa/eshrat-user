import { createTheme } from "@mui/material";
import VazirRegularWOFF2 from "./assets/fonts/Vazir-Regular-FD.woff2";
import VazirRegularEOT from "./assets/fonts/Vazir-Regular-FD.eot";
import VazirRegularTTF from "./assets/fonts/Vazir-Regular-FD.ttf";
import VazirRegularWOFF from "./assets/fonts/Vazir-Regular-FD.woff";
import FarHamidTTF from "./assets/fonts/Far.Hamid.ttf";
import { RttOutlined } from "@mui/icons-material";

//START:variable:It contain the vazir-regular font to use in app
const vazir_regular = {
  fontFamily: "Vazir-regular",
  fontStyle: "normal",
  src: `
    local(Vazir-Regular),
    local(Vazir-Regular-FD),
    url(${VazirRegularWOFF2} format('woff2')),
    url(${VazirRegularEOT} format('eot')),
    url(${VazirRegularWOFF} format('woff')),
    url(${VazirRegularTTF} format('ttf')),
  `,
};
const hamid = {
  fontFamily: "hamid",
  fontStyle: "normal",
  src: `
    local(Far.Hamid),
    url(${FarHamidTTF} format('ttf')),
  `,
};
//END
//START:variable:It will change the font of the app with the help of App.css
const theme = createTheme({
  typography: {
    direction: 'rtl',
    fontFamily: [hamid, vazir_regular],
  },
});

export default theme;