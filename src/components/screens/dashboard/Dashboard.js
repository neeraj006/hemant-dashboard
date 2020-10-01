import React, { Component } from "react";
import Card from "../../card/Card";
import Box from "@material-ui/core/Box";
import Table from "../../table/Table";

const headCells = [
  {
    id: "1",
    label: "Id",
  },
  {
    id: "2",
    label: "Name",
  },
  {
    id: "3",
    label: "Address",
  },
  {
    id: "4",
    label: "Open time",
  },
  {
    id: "5",
    label: "Off days",
  },
];

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  {
    id: 1,
    name: "Neeraj",
    address: "Delhi",
    openTime: "8:00 AM",
    offDay: "Monday",
  },
  {
    id: 2,
    name: "Dheeraj",
    address: "Delhi",
    openTime: "8:00 AM",
    offDay: "Monday",
  },
  {
    id: 3,
    name: "Neeraj",
    address: "Delhi",
    openTime: "8:00 AM",
    offDay: "Monday",
  },
  {
    id: 4,
    name: "Dheeraj",
    address: "Delhi",
    openTime: "8:00 AM",
    offDay: "Monday",
  },
  {
    id: 5,
    name: "Neeraj",
    address: "Delhi",
    openTime: "8:00 AM",
    offDay: "Monday",
  },
];

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: rows,
      headCells: headCells,
    };
  }

  onRowDeleted = (selectedRows) => {
    const newRows = this.state.rows.filter(
      (row) => selectedRows.includes(row.id) === false
    );
    this.setState({ rows: newRows });
  };

  handleRowChange = (e, rowId, columnName) => {
    const rows = this.state.rows;
    const row = rows.filter((row) => row.id === rowId);

    if (row.length) {
      row[0][columnName] = e.target.value;
    }
    this.setState({ rows });
  };

  render() {
    return (
      <div>
        <h3>Dashboard</h3>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
          <Box m={5}>
            <Card title="Total Orders" value="100" />
          </Box>
          <Box m={5}>
            <Card title="Total Orders" value="100" />
          </Box>
          <Box m={5}>
            <Card title="Total Orders" value="100" />
          </Box>
          <Box m={5}>
            <Card title="Total Orders" value="100" />
          </Box>
        </Box>
        <Table
          headCells={this.state.headCells}
          rows={this.state.rows}
          onRowDeleted={this.onRowDeleted}
          handleRowChange={this.handleRowChange}
        />
      </div>
    );
  }
}
