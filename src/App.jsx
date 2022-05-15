import React, { useEffect, useState } from "react";
import "./App.scss";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { getBikeRides } from "./http/rides";

import { Layout, Menu } from "antd";

import Loader from "./components/Loader";
import Sidebar from "./components/Sidebar";

const { Content, Sider } = Layout;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBikeRides().then((bikes) => {
      setLoading(false);
      console.log(bikes);
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
                <Route path="/" element={<div>DASHBOARD</div>} />
                <Route path="/rides" element={<div>RIDES BRO</div>} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      )}
    </BrowserRouter>
  );
}

export default App;
