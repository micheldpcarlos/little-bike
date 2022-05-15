import React, { useEffect, useState } from "react";
import "./App.scss";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { getBikeRides } from "./http/rides";

import { Layout, Menu } from "antd";
import { VideoCameraOutlined } from "@ant-design/icons";
import Loader from "./components/Loader";

const { Content, Sider } = Layout;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBikeRides().then((bikes) => setLoading(false));
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <Layout hasSider>
          <Sider theme="light" className="sider-layout">
            <div className="logo"> BIKE RIDES </div>
            <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/">
                  <VideoCameraOutlined />
                  <span>Dashboard</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/rides">
                  <VideoCameraOutlined />
                  <span>Rides</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
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
