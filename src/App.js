import "./App.css";
import Main from "./pages/Main";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import { Fragment } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Travel from "./pages/Travel";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/travels/:number" element={<Travel/>} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
