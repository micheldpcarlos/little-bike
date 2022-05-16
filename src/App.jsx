import React, { useEffect, useState } from "react";
import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getBikeTrips } from "./http/trips";

import { Layout } from "antd";
import Loader from "./components/Loader";
import Sidebar from "./components/Sidebar";

import Trips from "./pages/Trips";
import Dashboard from "./pages/Dashboard";

const { Content } = Layout;

function App() {
  const [loading, setLoading] = useState(true);
  /**
   * This is a small project, let's stick with the simplicity of useState
   */
  const [tripsData, setTripsData] = useState([]);

  useEffect(() => {
    getBikeTrips().then((bikes) => {
      setLoading(false);
      setTripsData(bikes);
    });
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <Layout hasSider>
          <Sidebar />
          <Layout className="main-layout">
            <Content>
              <Routes>
                <Route path="/" element={<Dashboard tripsData={tripsData} />} />
                <Route
                  path="/trips"
                  element={<Trips tripsData={tripsData} />}
                />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      )}
    </BrowserRouter>
  );
}

export default App;
