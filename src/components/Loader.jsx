import { LoadingOutlined } from "@ant-design/icons";

import "./Loader.scss";

function Loader() {
  return (
    <div className="full-screen-loader">
      <LoadingOutlined className="spin-icon"/>
      Loading...
    </div>
  );
}

export default Loader;
