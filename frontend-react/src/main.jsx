import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StyledButton from "../week2/StyledButton";
import Profile from "../week2/App_profile";
import App from "../week2/InputHandling";
import CountUp from "../week2/countup";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountUp />
  </StrictMode>
);
