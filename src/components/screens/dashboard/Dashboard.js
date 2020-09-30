import React, { Component } from "react";
import Card from "../../card/Card";
import Box from "@material-ui/core/Box";

export default class Dashboard extends Component {
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
      </div>
    );
  }
}
