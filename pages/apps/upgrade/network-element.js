import { Fragment, useState } from "react";
import Layout from "../../../components/Layout/layout";
import {
  Grid,
  Button,
  Paper,
  TextField,
  TableHead,
  TableContainer,
  TableBody,
  Table,
  TableRow,
  TableCell,
  Checkbox,
  Chip,
  Avatar,
} from "@material-ui/core";

import FormDialog from "../../../components/Dialogs/form-dialog";

const headCells = [
  // {id:"checkbox",numeric:false,disablePadding:true,label:""},
  { id: "server-ip", numeric: false, disablePadding: true, label: "Server-IP" },
  {
    id: "server-username",
    numeric: false,
    disablePadding: true,
    label: "Server-Username",
  },
  {
    id: "server-password",
    numeric: false,
    disablePadding: true,
    label: "Server-Password",
  },
  {
    id: "software-location",
    numeric: false,
    disablePadding: true,
    label: "Software-Location",
  },
  {
    id: "chassis-ip",
    numeric: false,
    disablePadding: true,
    label: "Chassis-IP",
  },
  {
    id: "chassis-username",
    numeric: false,
    disablePadding: true,
    label: "Chassis-Username",
  },
  {
    id: "chassis-password",
    numeric: false,
    disablePadding: true,
    label: "Chassis-Password",
  },
];

const initialTableData = [
  {
    id: "chassis-ip-1",
    cellData: [
      {
        isCheckboxCell: true,
      },
      {
        name: "server-ip",
        value: "192.168.1.1",
      },
      {
        name: "server-username",
        value: "bgf",
      },
      {
        name: "server-password",
        value: "bgf",
      },
      {
        name: "software-location",
        value: "/sdlog/var/NPT-1800.gz",
      },
      {
        name: "chassis-ip",
        value: "1.1.1.1",
      },
      {
        name: "chassis-username",
        value: "admin",
      },
      {
        name: "chassis-password",
        value: "admin1",
      },
      {
        status: "pass",
      },
    ],
  },
  {
    id: "chassis-ip-2",
    cellData: [
      {
        isCheckboxCell: true,
      },
      {
        name: "server-ip",
        value: "192.168.1.1",
      },
      {
        name: "server-username",
        value: "bgf",
      },
      {
        name: "server-password",
        value: "bgf",
      },
      {
        name: "software-location",
        value: "/sdlog/var/NPT-1800.gz",
      },
      {
        name: "chassis-ip",
        value: "1.1.1.1",
      },
      {
        name: "chassis-username",
        value: "admin",
      },
      {
        name: "chassis-password",
        value: "admin1",
      },
      {
        status: "pass",
      },
    ],
  },
  {
    id: "chassis-ip-3",
    cellData: [
      {
        isCheckboxCell: true,
      },
      {
        name: "server-ip",
        value: "192.168.1.1",
      },
      {
        name: "server-username",
        value: "bgf",
      },
      {
        name: "server-password",
        value: "bgf",
      },
      {
        name: "software-location",
        value: "/sdlog/var/NPT-1800.gz",
      },
      {
        name: "chassis-ip",
        value: "1.1.1.1",
      },
      {
        name: "chassis-username",
        value: "admin",
      },
      {
        name: "chassis-password",
        value: "admin1",
      },
      {
        status: "pass",
      },
    ],
  },
  {
    id: "chassis-ip-4",
    cellData: [
      {
        isCheckboxCell: true,
      },
      {
        name: "server-ip",
        value: "192.168.1.1",
      },
      {
        name: "server-username",
        value: "bgf",
      },
      {
        name: "server-password",
        value: "bgf",
      },
      {
        name: "software-location",
        value: "/sdlog/var/NPT-1800.gz",
      },
      {
        name: "chassis-ip",
        value: "1.1.1.1",
      },
      {
        name: "chassis-username",
        value: "admin",
      },
      {
        name: "chassis-password",
        value: "admin1",
      },
      {
        status: "pass",
      },
    ],
  },
  {
    id: "chassis-ip-5",
    cellData: [
      {
        isCheckboxCell: true,
      },
      {
        name: "server-ip",
        value: "192.168.1.1",
      },
      {
        name: "server-username",
        value: "bgf",
      },
      {
        name: "server-password",
        value: "bgf",
      },
      {
        name: "software-location",
        value: "/sdlog/var/NPT-1800.gz",
      },
      {
        name: "chassis-ip",
        value: "1.1.1.1",
      },
      {
        name: "chassis-username",
        value: "admin",
      },
      {
        name: "chassis-password",
        value: "admin1",
      },
      {
        status: "pass",
      },
    ],
  },
];
export default function NetworkElement() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [tableData, setTableData] = useState(initialTableData);
  const handleFormTransition = (transition) => {
    setShowForm(transition);
  };

  return (
    <Layout mainHeader={false} navBarTitle={`Upgrade Network-Element`}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={2}
        style={{ flexGrow: 1 }}
        style={{ height: "100%" }}
      >
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  handleFormTransition(true);
                }}
              >
                Add Details
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} style={{ height: "500px" }}>
          <Grid container justify="center">
            <Grid item style={{ width: "90%" }}>
              <Paper>
                <TableContainer>
                  <Table
                    stickyHeader={true}
                    // className={classes.table}
                    aria-labelledby="tableTitle"
                    // size={dense ? "small" : "medium"}
                    aria-label="enhanced table"
                  >
                    <caption>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => {
                          alert("Upgrade Started");
                        }}
                      >
                        Start Upgrade
                      </Button>
                    </caption>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" padding="checkbox">
                          <Checkbox
                            // indeterminate={
                            //   numSelected > 0 && numSelected < rowCount
                            // }
                            // checked={rowCount > 0 && numSelected === rowCount}
                            // onChange={onSelectAllClick}
                            inputProps={{ "aria-label": "select all desserts" }}
                          />
                        </TableCell>
                        {headCells.map((headCell) => (
                          <TableCell
                            align="center"
                            key={headCell.id}
                            // align={headCell.numeric ? "right" : "left"}
                            // padding={headCell.disablePadding ? "none" : "default"}
                          >
                            <strong>{headCell.label}</strong>
                          </TableCell>
                        ))}
                        <TableCell align="center">
                          <strong>Status</strong>
                        </TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {tableData.map((row, index) => {
                        // const isItemSelected = isSelected(row.name);
                        const isItemSelected = false;
                        const labelId = `enhanced-table-checkbox-${index}`;
                        return (
                          <TableRow
                            hover
                            onClick={(event) => {
                              console.log("row clicked");
                              // handleClick(event, row.id);
                            }}
                            // role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.id}
                            selected={isItemSelected}
                          >
                            {row.cellData.map((cell, index) => {
                              return (
                                <Fragment key={index}>
                                  {cell.isCheckboxCell ? (
                                    <TableCell padding="checkbox">
                                      <Checkbox
                                        // checked={isItemSelected}
                                        // indeterminate={true}
                                        inputProps={{
                                          "aria-labelledby": labelId,
                                        }}
                                      />
                                    </TableCell>
                                  ) : null}
                                  {cell.status ? (
                                    <TableCell align="center">
                                      <Chip
                                        avatar={<Avatar>P</Avatar>}
                                        label="Pass"
                                        component="a"
                                        href="#chip"
                                        clickable
                                        color="primary"
                                      />
                                    </TableCell>
                                  ) : null}
                                  {cell.value ? (
                                    <TableCell align="center">
                                      {cell.value}
                                    </TableCell>
                                  ) : null}
                                </Fragment>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        {/* <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item>
              <div>Hello</div>
            </Grid>
          </Grid>
        </Grid> */}
      </Grid>
      {showForm && <FormDialog onClose={handleFormTransition} />}
    </Layout>
  );
}
