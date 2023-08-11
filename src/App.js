import React from "react";
import HomePage from "./pages/HomePage";
import ReactHelmet from "react-helmet";
const App = () => {
  return (
    <div>
      <ReactHelmet>
        <script src="assets/js/main.js"></script>
      </ReactHelmet>
      <HomePage />
    </div>
  );
};

export default App;
