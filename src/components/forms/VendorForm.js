import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Select from "../select/Select";
import { MenuItem } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    width: "100%",
    padding: "10%",
    background: "#f8f9fe",
  },
  textFieldContainerSmall: {
    width: "45%",
    marginRight: "5%",
    marginBottom: 20,
  },
  textFieldContainerLarge: {
    width: "95%",
    marginRight: "5%",
    marginBottom: 20,
  },
});

const statuses = ["Active", "Deactive"];
const offDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

class VendorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        latitude: "",
        longitude: "",
        radius: "",
        description: "",
        status: "",
        openTime: "",
        closeTime: "",
        offDay: "",
        vendorImage: "",
      },
      errors: {
        name: "",
        latitude: "",
        longitude: "",
        radius: "",
        description: "",
        status: "",
        openTime: "",
        closeTime: "",
        offDay: "",
        vendorImage: "",
      },
    };
  }

  componentDidMount() {
    const { fields } = this.props;
    this.setState({
      fields,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.fields !== this.state.fields) {
      this.setState({ fields: this.props.fields });
    }
  }

  onFieldChange = (event, fieldName, type) => {
    const { fields } = this.state;
    if (type && type === "date") {
      fields[fieldName].value = event.getTime();
    } else {
      fields[fieldName] = event.target.value;
    }
    this.setState({ fields });
  };

  validateForm = () => {
    console.log("validting form");
    const fields = this.state.fields;
    const errors = this.state.errors;
    const keys = Object.keys(fields);
    let isValid = true;

    for (let key of keys) {
      if (
        fields[key] === "" ||
        (typeof fields[key] === "object" && fields[key].value === null)
      ) {
        console.log("insede for key", key);
        errors[key] = "This field is required.";
        isValid = false;
      } else {
        errors[key] = "";
      }
    }
    console.log({ isValid: isValid });
    this.setState({ errors: errors });
    return isValid;
  };

  handleFormSubmit = () => {
    if (this.validateForm()) {
      this.props.handleFormSave(this.state.fields);
    }
  };

  render() {
    const { classes } = this.props;
    const { fields } = this.state;

    return (
      <Box display="flex" width="100%">
        <form className={classes.root} noValidate autoComplete="off">
          <Box display="flex" flexWrap="wrap" width="100%">
            <Box className={classes.textFieldContainerLarge}>
              <TextField
                id="Name"
                label="Name"
                value={fields.name}
                onChange={(e) => this.onFieldChange(e, "name")}
                variant="outlined"
                fullWidth
                error={this.state.errors.name}
                helperText={this.state.errors.name}
              />
            </Box>
            <Box className={classes.textFieldContainerSmall}>
              <TextField
                id="Latitude"
                label="Latitude"
                value={fields.latitude}
                onChange={(e) => this.onFieldChange(e, "latitude")}
                variant="outlined"
                fullWidth
                error={this.state.errors.latitude}
                helperText={this.state.errors.latitude}
              />
            </Box>
            <Box className={classes.textFieldContainerSmall}>
              <TextField
                id="Longitude"
                label="Longitude"
                value={fields.longitude}
                onChange={(e) => this.onFieldChange(e, "longitude")}
                variant="outlined"
                fullWidth
                error={this.state.errors.longitude}
                helperText={this.state.errors.longitude}
              />
            </Box>
            <Box className={classes.textFieldContainerLarge}>
              <TextField
                id="Radius"
                label="Radius"
                value={fields.radius}
                onChange={(e) => this.onFieldChange(e, "radius")}
                variant="outlined"
                fullWidth
                error={this.state.errors.radius}
                helperText={this.state.errors.radius}
              />
            </Box>
            <Box className={classes.textFieldContainerLarge}>
              <TextField
                id="Description"
                label="Description"
                multiline
                value={fields.description}
                onChange={(e) => this.onFieldChange(e, "description")}
                variant="outlined"
                fullWidth
                error={this.state.errors.description}
                helperText={this.state.errors.description}
              />
            </Box>
            <Box className={classes.textFieldContainerLarge}>
              <TextField
                id="Status"
                select
                label="Staus"
                value={fields.status}
                onChange={(e) => this.onFieldChange(e, "status")}
                fullWidth
                error={this.state.errors.status}
                helperText={this.state.errors.status}
              >
                {statuses.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box className={classes.textFieldContainerSmall}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  margin="normal"
                  id="Open Time"
                  label="Open Time"
                  defaultValue={null}
                  value={
                    fields.openTime.value
                      ? new Date(fields.openTime.value)
                      : null
                  }
                  onChange={(e) => this.onFieldChange(e, "openTime", "date")}
                  KeyboardButtonProps={{
                    "aria-label": "change time",
                  }}
                  error={this.state.errors.openTime}
                  helperText={this.state.errors.openTime}
                />
              </MuiPickersUtilsProvider>
            </Box>
            <Box className={classes.textFieldContainerSmall}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  margin="normal"
                  id="Close Time"
                  label="Close Time"
                  value={
                    fields.closeTime.value
                      ? new Date(fields.closeTime.value)
                      : null
                  }
                  onChange={(e) => this.onFieldChange(e, "closeTime", "date")}
                  KeyboardButtonProps={{
                    "aria-label": "change time",
                  }}
                  error={this.state.errors.closeTime}
                  helperText={this.state.errors.closeTime}
                />
              </MuiPickersUtilsProvider>
            </Box>
            <Box className={classes.textFieldContainerSmall}>
              <TextField
                id="Off Day"
                label="Off Day"
                value={fields.offDay}
                onChange={(e) => this.onFieldChange(e, "offDay")}
                variant="outlined"
                fullWidth
                select
                error={this.state.errors.offDay}
                helperText={this.state.errors.offDay}
              >
                {offDays.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box className={classes.textFieldContainerSmall}>
              <TextField
                id="Vendor Image"
                label="Vendor Image"
                // value={fields.vendorImage}
                // onChange={(e) => this.onFieldChange(e, "vendorImage")}
                fullWidth
                type="file"
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleFormSubmit()}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    );
  }
}

export default withStyles(styles, { withTheme: true })(VendorForm);
