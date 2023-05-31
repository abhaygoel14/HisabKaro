import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./js/Pages/LandingPage";
const HeaderComponent = function () {
  return (
    <div>
        <LandingPage/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
