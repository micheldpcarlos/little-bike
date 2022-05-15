import React from "react";
import "./App.scss";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Layout, Menu } from "antd";
import { VideoCameraOutlined } from "@ant-design/icons";
const { Header, Content, Sider } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout hasSider>
        <Sider
          theme="light"
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
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
        <Layout
          className="site-layout"
          style={{
            marginLeft: "200px",
            height: "100vh",
            display: "flex",
          }}
        >
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          />
          <Content
            style={{
              margin: "24px 16px",
              flex: "1",
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                height: "100%",
              }}
            >
              <Routes>
                <Route path="/" element={<div>DASHBOARD</div>} />
                <Route path="/rides" element={<div>RIDES BRO</div>} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
