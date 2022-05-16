import React, { useState, useLayoutEffect, useRef } from "react";

import DataWidget from "../components/DataWidget";

import "./Dashboard.scss";

function App(props) {
  const { tripsData } = props;

  const [pageSize, setPageSize] = useState(50);
  const [scrollYSize, setScrollYSize] = useState(0);

  // Widgets data
  const totalTrips = tripsData.length.toLocaleString();

  const averageTripMins =
    tripsData.reduce((prev, curr) => {
      return prev + curr.tripduration;
    }, 0) / tripsData.length;

  const bikesTotal = [
    ...new Set(tripsData.map((trip) => trip.bikeid)),
  ].length.toLocaleString();

  

  return (
    <div className="dashboard">
      <div className="info-widgets">
        <DataWidget title="Total Trips" info={totalTrips} />
        <DataWidget
          title="Average Duration"
          info={averageTripMins.toFixed(2) + "min"}
        />
        <DataWidget title="Bikes Total" info={bikesTotal} />
      </div>
      <div className="charts"></div>
    </div>
  );
}

export default App;
