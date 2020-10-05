import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Select from "../select/Select";
import Menu from "../menu/Menu";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function StickyHeadTable({
  rows,
  columns,
  onOrderStatusChange,
  actions,
  tableName,
  addNewRecordLabel = null,
  openNewRecordModal,
}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <Box>
          <Typography variant="h5" component="h5">
            {tableName}
          </Typography>
        </Box>
        {addNewRecordLabel && (
          <Box onClick={openNewRecordModal}>
            <Button variant="contained" color="primary">
              {addNewRecordLabel}
            </Button>
          </Box>
        )}
      </Box>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  // align={column.align}
                  // style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell key={"action"}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.fieldName];
                      console.log(column.fieldName, row[column.fieldName]);
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value.isDropdown && (
                            <Select
                              values={value.values}
                              onChange={(selectedValue) =>
                                onOrderStatusChange(selectedValue, row.id)
                              }
                              selectedValue={value.selectedValue}
                              disabled={value.disabled}
                            />
                          )}
                          {value.isImage && (
                            <a href={value.imageUrl}>Vendor Image</a>
                          )}
                          {value.isTimePicker && (
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                              <KeyboardTimePicker
                                margin="normal"
                                id={`Time Picker-${index}`}
                                value={
                                  value.value ? new Date(value.value) : null
                                }
                                onChange={(e) => console.log(e)}
                                disabled
                                KeyboardButtonProps={{
                                  "aria-label": "change time",
                                }}
                              />
                            </MuiPickersUtilsProvider>
                          )}
                          {!value.isImage &&
                            !value.isDropdown &&
                            !value.isTimePicker &&
                            value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                      <Menu actions={actions} row={row} />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
