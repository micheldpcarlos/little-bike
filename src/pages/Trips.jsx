import React, { useState, useLayoutEffect, useRef } from "react";
import { Table } from "antd";

import genderTypes from "../constants/gender";
import { secondsToHms } from "../helpers/data";

import "./Trips.scss";

function App(props) {
  const { tripsData } = props;

  const [pageSize, setPageSize] = useState(50);
  const [scrollYSize, setScrollYSize] = useState(0);

  function onPageSizeChange(current, size) {
    setPageSize(size);
  }

  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const wrapperHeight = elementRef.current?.clientHeight;

    const TABLE_HEADER_HEIGHT = 55;
    const PAGINATOR_HEIGHT = 64;
    const WRAPPER_PADDING = 46;

    // Calculate the possible height of the table body
    setScrollYSize(
      wrapperHeight - WRAPPER_PADDING - TABLE_HEADER_HEIGHT - PAGINATOR_HEIGHT
    );
  }, [elementRef]);

  // bikeIDs non repeating
  const bikeIds = [...new Set(tripsData.map((trip) => trip.bikeid))].sort(
    function (a, b) {
      return a - b;
    }
  );

  const tableColums = [
    {
      title: "Bike ID",
      dataIndex: "bikeid",
      key: "bikeid",
      sorter: (a, b) => a.bikeid - b.bikeid,
      filters: bikeIds.map((bikeId) => {
        return { text: bikeId, value: bikeId };
      }),
      onFilter: (value, record) => record.bikeid === value,
      width: 150,
    },
    {
      title: "User Type",
      dataIndex: "usertype",
      key: "usertype",
      sorter: (a, b) => {
        return a.usertype.localeCompare(b.usertype);
      },
      width: 150,
    },
    {
      title: "Birth Year",
      dataIndex: "birth_year",
      key: "birth_year",
      sorter: (a, b) => a.birth_year - b.birth_year,
      width: 150,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      sorter: (a, b) => a.gender - b.gender,
      render: (text) => genderTypes[text],
      width: 100,
    },
    {
      title: "Start Station",
      dataIndex: "start_station_name",
      key: "start_station_name",
      sorter: (a, b) =>
        a.start_station_name.localeCompare(b.start_station_name),
      width: 450,
    },
    {
      title: "Start Coord",
      dataIndex: "start_station_latitude",
      key: "start_station_latitude",
      sorter: (a, b) => a.start_station_latitude - b.start_station_latitude,
      render: (text, object) =>
        `${object.start_station_latitude}, ${object.start_station_longitude}`,
      width: 200,
    },
    {
      title: "End Station",
      dataIndex: "end_station_name",
      key: "end_station_name",
      sorter: (a, b) => a.end_station_name.localeCompare(b.end_station_name),
      width: 450,
    },
    {
      title: "End Coord",
      dataIndex: "end_station_latitude",
      key: "end_station_latitude",
      sorter: (a, b) => a.end_station_latitude - b.end_station_latitude,
      render: (text, object) =>
        `${object.end_station_latitude}, ${object.end_station_longitude}`,
      width: 200,
    },
    {
      title: "Trip Duration",
      dataIndex: "tripduration",
      key: "tripduration",
      sorter: (a, b) => a.tripduration - b.tripduration,
      render: (text) => secondsToHms(text),
      width: 150,
    },
    {
      title: "Start Time",
      dataIndex: "starttime",
      key: "starttime",
      sorter: (a, b) => a.starttime - b.starttime,
      render: (text) => new Date(text).toLocaleString(),
    },
    {
      title: "Stop Time",
      dataIndex: "stoptime",
      key: "stoptime",
      sorter: (a, b) => a.stoptime - b.stoptime,
      render: (text) => new Date(text).toLocaleString(),
    },
  ];

  return (
    <div ref={elementRef} className="trips">
      <Table
        dataSource={tripsData}
        columns={tableColums}
        bordered
        pagination={{ pageSize: pageSize, onShowSizeChange: onPageSizeChange }}
        scroll={{ x: "max-content", y: scrollYSize }}
        rowKey="id"
      />
    </div>
  );
}

export default App;
