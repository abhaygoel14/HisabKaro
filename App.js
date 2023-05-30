import React from "react";
import ReactDOM from "react-dom/client";
const HeaderComponent = function () {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
