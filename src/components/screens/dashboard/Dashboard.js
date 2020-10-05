import React, { Component } from "react";
import Card from "../../card/Card";
import Box from "@material-ui/core/Box";
import Table from "../../table/Table";
import DateRangeIcon from "@material-ui/icons/DateRange";
import StoreIcon from "@material-ui/icons/Store";
import PersonIcon from "@material-ui/icons/Person";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const columns = [
  {
    id: "1",
    label: "ORDER ID",
    fieldName: "id",
  },
  {
    id: "2",
    label: "SHOP",
    fieldName: "shop",
  },
  {
    id: "3",
    label: "CUSTOMER",
    fieldName: "customer",
  },
  {
    id: "4",
    label: "PAYMENT",
    fieldName: "payment",
  },
  {
    id: "5",
    label: "DATE",
    fieldName: "date",
  },
  {
    id: "6",
    label: "DELIVERY TYPE",
    fieldName: "deliveryType",
  },
  {
    id: "7",
    label: "PAYMENT GATEWAY",
    fieldName: "paymentGateway",
  },
  {
    id: "5",
    label: "ORDER STATUS",
    fieldName: "orderStatus",
  },
  {
    id: "5",
    label: "PAYMENT STATUS",
    fieldName: "paymentStatus",
  },
];

const rows = [
  {
    id: 1,
    shop: "General Store",
    customer: "Neeraj",
    payment: "1000",
    date: "2020-09-30 | 05:39 PM",
    deliveryType: "delivery",
    paymentGateway: "local",
    orderStatus: {
      isDropdown: true,
      selectedValue: "pending",
      values: ["pending", "complete", "partial", "canceled"],
      disabled: true,
    },

    paymentStatus: "pending",
  },
  {
    id: 2,
    shop: "Seelans Superstore",
    customer: "Test User",
    payment: "2000",
    date: "2020-09-30 | 05:39 PM",
    deliveryType: "delivery",
    paymentGateway: "local",
    orderStatus: {
      isDropdown: true,
      selectedValue: "pending",
      values: ["pending", "complete", "partial", "canceled"],
      disabled: true,
    },
    paymentStatus: "pending",
  },
  {
    id: 3,
    shop: "General Store",
    customer: "Neeraj",
    payment: "1000",
    date: "2020-09-30 | 05:39 PM",
    deliveryType: "delivery",
    paymentGateway: "local",
    orderStatus: {
      isDropdown: true,
      selectedValue: "pending",
      values: ["pending", "complete", "partial", "canceled"],
      disabled: true,
    },
    paymentStatus: "pending",
  },
  {
    id: 4,
    shop: "Seelans Superstore",
    customer: "Test User",
    payment: "2000",
    date: "2020-09-30 | 05:39 PM",
    deliveryType: "delivery",
    paymentGateway: "local",
    orderStatus: {
      isDropdown: true,
      selectedValue: "canceled",
      values: ["pending", "complete", "partial", "canceled"],
      disabled: true,
    },
    paymentStatus: "pending",
  },
  {
    id: 5,
    shop: "General Store",
    customer: "Neeraj",
    payment: "1000",
    date: "2020-09-30 | 05:39 PM",
    deliveryType: "delivery",
    paymentGateway: "local",
    orderStatus: {
      isDropdown: true,
      selectedValue: "pending",
      values: ["pending", "complete", "partial", "canceled"],
      disabled: true,
    },
    paymentStatus: "pending",
  },
  {
    id: 6,
    shop: "Seelans Superstore",
    customer: "Test User",
    payment: "2000",
    date: "2020-09-30 | 05:39 PM",
    deliveryType: "delivery",
    paymentGateway: "local",
    orderStatus: {
      isDropdown: true,
      selectedValue: "partial",
      values: ["pending", "complete", "partial", "canceled"],
      disabled: true,
    },
    paymentStatus: "pending",
  },
  {
    id: 7,
    shop: "General Store",
    customer: "Neeraj",
    payment: "1000",
    date: "2020-09-30 | 05:39 PM",
    deliveryType: "delivery",
    paymentGateway: "local",
    orderStatus: {
      isDropdown: true,
      selectedValue: "complete",
      values: ["pending", "complete", "partial", "canceled"],
      disabled: true,
    },
    paymentStatus: "pending",
  },
];

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: rows,
      columns: columns,
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

  onOrderStatusChange = (selectedValue, rowId) => {
    const rows = this.state.rows;
    const row = rows.find((row) => row.id === rowId);
    row.orderStatus.selectedValue = selectedValue;
    this.setState({ rows });
  };

  handleViewClick = (rowId) => {
    console.log("view  clicked for row id", rowId);
  };

  handleInvoiceClick = (rowId) => {
    console.log("invoice  clicked for row id", rowId);
  };

  render() {
    const actions = [
      {
        action: "View",
        onClick: this.handleViewClick,
      },

      { action: "Invoice", onClick: this.handleInvoiceClick },
    ];
    return (
      <div>
        <h3>Dashboard</h3>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
          <Box m={5}>
            <Card
              title="Total Orders"
              value="100"
              icon={<DateRangeIcon color="secondary" fontSize="large" />}
            />
          </Box>
          <Box m={5}>
            <Card
              title="Vendors"
              value="5"
              icon={<StoreIcon color="secondary" fontSize="large" />}
            />
          </Box>
          <Box m={5}>
            <Card
              title="Customers"
              value="1000"
              icon={<PersonIcon color="secondary" fontSize="large" />}
            />
          </Box>
          <Box m={5}>
            <Card
              title="Amount"
              value="50000"
              icon={<MonetizationOnIcon color="secondary" fontSize="large" />}
            />
          </Box>
        </Box>
        <Table
          columns={this.state.columns}
          rows={this.state.rows}
          onOrderStatusChange={this.onOrderStatusChange}
          actions={actions}
          tableName="Orders"
        />
      </div>
    );
  }
}
