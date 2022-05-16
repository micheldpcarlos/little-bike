import { BarChartOutlined, UnorderedListOutlined } from "@ant-design/icons";

import { Link, useLocation } from "react-router-dom";

import { Layout, Menu } from "antd";

import "./Sidebar.scss";

const { Sider } = Layout;

function Sidebar() {
  const location = useLocation();

  return (
    <Sider theme="light" className="sider-layout">
      <div className="logo"> BIKE TRIPS </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
        <Menu.Item key="/">
          <Link to="/">
            <BarChartOutlined />
            <span>Dashboard</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/trips">
          <Link to="/trips">
            <UnorderedListOutlined />
            <span>Trips</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
