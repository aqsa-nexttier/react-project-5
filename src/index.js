import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StartRating";

function Test() {
  const [movieRating, setMovieRating] = useState();
  return (
    <div>
      <StarRating color="pink" maxRating={7} onSetRating = {setMovieRating} />
      <p>This movie was rated {movieRating} stars </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={10}
      color="red"
      size={24}
      className="test"
      defaultRating={5}
    />
    < Test />
  </React.StrictMode>
);
