import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  Paper,
  Typography,
  Grid,
} from "@material-ui/core";
import TextFieldBasic from "../FormElements/TextField/text-field-basic";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
// import "./mui.css";
import classnames from "./dialog.module.css";

import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paperWidthSm: {
    maxWidth: "80% !important",
  },
});

export default function FormDialog({ onClose }) {
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const formFieldsServerInitialValue = [
    {
      id: 1,
      label: "Server-IP",
      autoFocus: true,
      type: "text",
      required: true,
      defaultValue: "",
      regexToMatch: `^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$`,
      errorMessage: "Please enter valid address",
    },
    {
      id: 2,
      label: "Server-Username",
      type: "text",
      defaultValue: "",
      required: true,
      errorMessage: "Mandatory to fill Server-Username",
    },
    {
      id: 3,
      label: "Server-Password",
      type: "text",
      defaultValue: "",
      required: true,
      errorMessage: "Mandatory to fill Server-Password",
    },
    {
      id: 4,
      label: "Software-Location",
      type: "text",
      defaultValue: "",
      required: true,
      helperText: "Please enter location with file-name",
      errorMessage: "Mandatory to fill Software-Location present on server",
    },
  ];

  const formFieldsChassisInitialValue = [
    {
      id: 1,
      label: "Chassis-IP",
      type: "text",
      defaultValue: "",
      required: true,
      regexToMatch: `^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$`,
      errorMessage: "Please enter valid address",
    },
    {
      id: 2,
      label: "Chassis-Username",
      type: "text",
      defaultValue: "",
      required: true,
      errorMessage: "Mandatory to fill Chassis-Username",
    },
    {
      id: 3,
      label: "Chassis-Password",
      type: "text",
      defaultValue: "",
      required: true,
      errorMessage: "Mandatory to fill Password",
    },
  ];

  const [formFieldsServer, setFormFieldsServer] = useState(
    formFieldsServerInitialValue
  );
  const [formFieldsChassis, setFormFieldsChassis] = useState(
    formFieldsChassisInitialValue
  );
  const handleClose = () => {
    setOpen(false);
    onClose(false);
  };

  const onSubmit = () => {};
  const onServerFieldChange = (fieldDetail) => {
    const formObjectArry = formFieldsServer.filter(
      (field) => field.id == fieldDetail.id
    );
    //Find index of specific object using findIndex method.
    const objIndex = formFieldsServer.findIndex(
      (obj) => obj.id == fieldDetail.id
    );
    formFieldsServer[objIndex].value = fieldDetail.value;
    const updatedForm = formFieldsServer.slice();
    setFormFieldsServer(updatedForm);
    console.log("After update", formFieldsServer);
  };
  const onChassisFieldChange = (fieldDetail) => {
    const formObjectArry = formFieldsChassis.filter(
      (field) => field.id == fieldDetail.id
    );
    //Find index of specific object using findIndex method.
    const objIndex = formFieldsChassis.findIndex(
      (obj) => obj.id == fieldDetail.id
    );
    formFieldsChassis[objIndex].value = fieldDetail.value;
    const updatedForm = formFieldsChassis.slice();
    setFormFieldsServer(updatedForm);
    console.log("After update", formFieldsChassis);
  };
  return (
    // <div style={{ width: "930px" }}>
    <Dialog
      id="kaushik"
      classes={{ paperWidthSm: !fullScreen ? classes.paperWidthSm : "" }}
      open={open}
      fullScreen={fullScreen}
    >
      <DialogTitle id="form-dialog-title">Upgrade Details</DialogTitle>
      <DialogContent>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12}>
            <DialogContentText>
              Please Enter Server and Network-Element Details to upgrade the NE.
            </DialogContentText>
          </Grid>
          <Grid item md={6}>
            <Typography>Server Details</Typography>
            <Paper elevation={5} style={{ padding: "30px" }}>
              {formFieldsServer.map((formField) => (
                <TextFieldBasic
                  key={formField.id}
                  {...formField}
                  handleChange={onServerFieldChange}
                />
              ))}
            </Paper>
          </Grid>

          {/* <div style={{ height: "30px" }}></div> */}
          <Grid item md={6}>
            <Typography>Network-Element Details</Typography>
            <Paper elevation={5} style={{ padding: "30px" }}>
              {formFieldsChassis.map((formField) => (
                <TextFieldBasic
                  key={formField.id}
                  {...formField}
                  handleChange={onChassisFieldChange}
                />
              ))}
            </Paper>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="primary">
          Add Detail
        </Button>
      </DialogActions>
    </Dialog>
    // </div>
  );
}
