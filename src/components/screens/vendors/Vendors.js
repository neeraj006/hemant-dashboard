import React, { Component } from "react";
import Card from "../../card/Card";
import Box from "@material-ui/core/Box";
import Table from "../../table/Table";
import Modal from "../../modal/Modal";
import VendorForm from "../../forms/VendorForm";

const columns = [
  {
    id: "1",
    label: "ORDER ID",
    fieldName: "id",
  },
  {
    id: "2",
    label: "Name",
    fieldName: "name",
  },
  {
    id: "3",
    label: "Description",
    fieldName: "description",
  },
  {
    id: "4",
    label: "Status",
    fieldName: "status",
  },
  {
    id: "5",
    label: "Open Time",
    fieldName: "openTime",
  },
  {
    id: "6",
    label: "Close Time",
    fieldName: "closeTime",
  },
  {
    id: "7",
    label: "Offday",
    fieldName: "offDay",
  },
  {
    id: "8",
    label: "Vendor Image",
    fieldName: "vendorImage",
  },
];

const rows = [
  {
    id: 1,
    name: "General Store",
    description:
      "Cardiff is a city and the capital of Wales. It is the United Kingdom's eleventh-largest city.	",
    status: "Active",
    openTime: { isTimePicker: true, value: new Date().getTime() },
    closeTime: { isTimePicker: true, value: new Date().getTime() },
    offDay: "Sunday",
    latitude: "22.1234",
    longitude: "45.451",
    radius: "33",
    vendorImage: {
      isImage: true,
      imageUrl:
        "https://i.picsum.photos/id/121/200/200.jpg?hmac=0aiR--xgWy1aIM85HCFMySsuQ7DJJBE6XW_Yv4nqU6s",
    },
  },
  {
    id: 2,
    name: "General Store",
    description:
      "Cardiff is a city and the capital of Wales. It is the United Kingdom's eleventh-largest city.	",
    status: "Active",
    openTime: { isTimePicker: true, value: new Date().getTime() },
    closeTime: { isTimePicker: true, value: new Date().getTime() },
    offDay: "Sunday",
    latitude: "22.1234",
    longitude: "45.451",
    radius: "33",

    vendorImage: {
      isImage: true,
      imageUrl:
        "https://i.picsum.photos/id/121/200/200.jpg?hmac=0aiR--xgWy1aIM85HCFMySsuQ7DJJBE6XW_Yv4nqU6s",
    },
  },
  {
    id: 3,
    name: "General Store",
    description:
      "Cardiff is a city and the capital of Wales. It is the United Kingdom's eleventh-largest city.	",
    status: "Active",
    openTime: { isTimePicker: true, value: new Date().getTime() },
    closeTime: { isTimePicker: true, value: new Date().getTime() },
    offDay: "Sunday",
    latitude: "22.1234",
    longitude: "45.451",
    radius: "33",

    vendorImage: {
      isImage: true,
      imageUrl:
        "https://i.picsum.photos/id/121/200/200.jpg?hmac=0aiR--xgWy1aIM85HCFMySsuQ7DJJBE6XW_Yv4nqU6s",
    },
  },
  {
    id: 4,
    name: "General Store",
    description:
      "Cardiff is a city and the capital of Wales. It is the United Kingdom's eleventh-largest city.	",
    status: "Active",
    openTime: { isTimePicker: true, value: new Date().getTime() },
    closeTime: { isTimePicker: true, value: new Date().getTime() },
    offDay: "Sunday",
    latitude: "22.1234",
    longitude: "45.451",
    radius: "33",

    vendorImage: {
      isImage: true,
      imageUrl:
        "https://i.picsum.photos/id/121/200/200.jpg?hmac=0aiR--xgWy1aIM85HCFMySsuQ7DJJBE6XW_Yv4nqU6s",
    },
  },
  {
    id: 5,
    name: "General Store",
    description:
      "Cardiff is a city and the capital of Wales. It is the United Kingdom's eleventh-largest city.	",
    status: "Active",
    openTime: { isTimePicker: true, value: new Date().getTime() },
    closeTime: { isTimePicker: true, value: new Date().getTime() },
    offDay: "Sunday",
    latitude: "22.1234",
    longitude: "45.451",
    radius: "33",

    vendorImage: {
      isImage: true,
      imageUrl:
        "https://i.picsum.photos/id/121/200/200.jpg?hmac=0aiR--xgWy1aIM85HCFMySsuQ7DJJBE6XW_Yv4nqU6s",
    },
  },
  {
    id: 6,
    name: "General Store",
    description:
      "Cardiff is a city and the capital of Wales. It is the United Kingdom's eleventh-largest city.	",
    status: "Active",
    openTime: { isTimePicker: true, value: new Date().getTime() },
    closeTime: { isTimePicker: true, value: new Date().getTime() },
    offDay: "Sunday",
    latitude: "22.1234",
    longitude: "45.451",
    radius: "33",

    vendorImage: {
      isImage: true,
      imageUrl:
        "https://i.picsum.photos/id/121/200/200.jpg?hmac=0aiR--xgWy1aIM85HCFMySsuQ7DJJBE6XW_Yv4nqU6s",
    },
  },
  {
    id: 7,
    name: "General Store",
    description:
      "Cardiff is a city and the capital of Wales. It is the United Kingdom's eleventh-largest city.	",
    status: "Active",
    openTime: { isTimePicker: true, value: new Date().getTime() },
    closeTime: { isTimePicker: true, value: new Date().getTime() },
    offDay: "Sunday",
    latitude: "22.1234",
    longitude: "45.451",
    radius: "33",

    vendorImage: {
      isImage: true,
      imageUrl:
        "https://i.picsum.photos/id/121/200/200.jpg?hmac=0aiR--xgWy1aIM85HCFMySsuQ7DJJBE6XW_Yv4nqU6s",
    },
  },
];

export default class Vendors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: rows,
      columns: columns,
      currentVendorFields: {},
      currentRowId: null,
    };
  }

  handleEditRow = (rowId) => {
    console.log("Edit  clicked for row id", rowId);
    const row = this.state.rows.find((r) => r.id === rowId);
    this.setState({
      isVendorModalOpen: true,
      currentVendorFields: row,
      currentRowId: rowId,
    });
  };

  handleAddNewVendor = () => {
    const newRecord = this.getNewEmptyRecord();
    this.setState({
      isVendorModalOpen: true,
      currentVendorFields: newRecord,
    });
  };

  getNewId = () => {
    let max = -1;
    const rows = this.state.rows;

    for (let row of rows) {
      if (row.id > max) {
        max = row.id;
      }
    }
    return max + 1;
  };

  getNewEmptyRecord = () => {
    const id = this.getNewId();
    return {
      id,
      name: "",
      description: "",
      status: "",
      openTime: { isTimePicker: true, value: null },
      closeTime: { isTimePicker: true, value: null },
      offDay: "",
      latitude: "",
      longitude: "",
      radius: "",

      vendorImage: {
        isImage: true,
        imageUrl:
          "https://i.picsum.photos/id/121/200/200.jpg?hmac=0aiR--xgWy1aIM85HCFMySsuQ7DJJBE6XW_Yv4nqU6s",
      },
    };
  };

  handleDeleteRow = (rowId) => {
    console.log("Delete clicked for row id", rowId);
    const rows = this.state.rows.filter((r) => r.id !== rowId);
    this.setState({ rows });
  };

  handleModalClose = () => {
    console.log("Modal closed");
    this.setState({ isVendorModalOpen: false });
  };

  handleFormSave = (fields) => {
    console.log("Modal closed");
    const rows = this.state.rows;
    const index = rows.findIndex((r) => r.id === this.state.currentRowId);

    if (index === -1) {
      const rows = this.state.rows;
      rows.splice(0, 0, fields);
    } else {
      rows[index] = fields;
    }
    console.log("rows", rows);
    this.setState({ isVendorModalOpen: false, rows });
  };

  render() {
    const actions = [
      {
        action: "Edit",
        onClick: this.handleEditRow,
      },

      { action: "Delete", onClick: this.handleDeleteRow },
    ];
    return (
      <div>
        <h3>Vendors</h3>
        <Table
          columns={this.state.columns}
          rows={this.state.rows}
          onRowDeleted={this.handleDeleteRow}
          handleRowChange={this.handleEditRow}
          actions={actions}
          tableName="Vendors"
          addNewRecordLabel="Add New Vendor"
          openNewRecordModal={() => this.handleAddNewVendor()}
        />
        <Modal
          open={this.state.isVendorModalOpen}
          onClose={this.handleModalClose}
          onSave={this.handleFormSave}
          modalTitle="Vendor Form"
        >
          <VendorForm
            fields={this.state.currentVendorFields}
            handleFormSave={this.handleFormSave}
          />
        </Modal>
      </div>
    );
  }
}
