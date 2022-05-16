import React from "react";

import { secondsToHms } from "../helpers/data";

import DataWidget from "../components/DataWidget";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

import "./Dashboard.scss";

function App(props) {
  const { tripsData } = props;

  const totalTrips = tripsData.length.toLocaleString();

  const averageTripMins =
    tripsData.reduce((prev, curr) => {
      return prev + curr.tripduration;
    }, 0) / tripsData.length;

  const bikes = [];
  const genderDistribution = [0, 0, 0];

  // Process info
  tripsData.forEach((ride) => {
    if (!bikes.find((bike) => bike.id === ride.bikeid)) {
      bikes.push({
        id: ride.bikeid,
        usertype: ride.usertype,
        birth_year: ride.birth_year,
        gender: ride.gender,
      });
      genderDistribution[ride.gender] = genderDistribution[ride.gender] + 1;
    }
  });

  const bikesTotal = bikes.length.toLocaleString();

  const genderDistributionData = [
    { name: "Female", value: genderDistribution[0] },
    { name: "Male", value: genderDistribution[1] },
    { name: "Other", value: genderDistribution[2] },
  ];

  const COLORS = ["#00C49F", "#0088FE", "#FFBB28", "#FF8042"];

  // trips per hour
  const tripsPerHour = tripsData.reduce((prev, curr) => {
    const tripHour = new Date(curr.starttime).getHours();
    const counter = prev[tripHour] !== undefined ? prev[tripHour] + 1 : 0;

    const newArray = prev;
    newArray[tripHour] = counter;
    return newArray;
  }, []);

  const tripDayHour = tripsPerHour.map((item, index) => {
    return {
      name: index + "h",
      count: item,
    };
  });

  return (
    <div className="dashboard">
      <div className="info-widgets">
        <DataWidget title="Total Trips" info={totalTrips} />
        <DataWidget
          title="Average Duration"
          info={secondsToHms(averageTripMins)}
        />
        <DataWidget title="Bikes Total" info={bikesTotal} />
      </div>
      <div className="charts">
        <div className="pie-chart">
          <div className="title">Gender Distribution</div>
          <ResponsiveContainer width="100%" height="90%">
            <PieChart width={400} height={400}>
              <Legend verticalAlign="top" height={36} />
              <Pie
                dataKey="value"
                isAnimationActive={true}
                data={genderDistributionData}
                cx="50%"
                cy="50%"
                outerRadius={110}
                fill="#8884d8"
                label
              >
                {genderDistributionData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bar-chart">
          <div className="title">Trips Start / Hour of the day</div>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart width={200} height={250} data={tripDayHour}>
              <XAxis dataKey="name" />
              <YAxis tickCount={8} />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
