import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({
  values,
  onChange,
  selectedValue,
  disabled = false,
}) {
  const classes = useStyles();
  // const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    // setAge(event.target.value);
    onChange(event.target.value);
  };

  return (
    <FormControl className={classes.formControl} disabled={disabled}>
      <Select
        value={selectedValue}
        onChange={handleChange}
        displayEmpty
        className={classes.selectEmpty}
        inputProps={{ "aria-label": "Without label" }}
      >
        {/* <MenuItem value="">
          <em>None</em>
        </MenuItem> */}
        {values.map((value) => (
          <MenuItem value={value}>{value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
