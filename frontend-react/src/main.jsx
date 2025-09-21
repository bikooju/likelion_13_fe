import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StyledButton from "../week2/StyledButton";
import Profile from "../week2/App_profile";
import CountUp from "../week2/countup";
import App from "../week2/TodoList/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
