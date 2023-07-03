import React from "react";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  dialog: {
    "& .MuiDialogTitle-root": {
      backgroundColor: "white",
      color: "black",
    },
    "& .MuiDialogContent-root": {
      backgroundColor: "white",
    },
    "& .MuiDialogActions-root": {
      backgroundColor: "white",
    },
    "& .MuiButton-textPrimary": {
      color: "black",
    },
    "& .MuiButton-textSecondary": {
      color: "black",
    },
  },
}));

export default function EditData({ open, onCancel, rowData }) {
    const classes = useStyles();
  const [ORDER_CURRENCY, setOrderCurrency] = React.useState("");
  const [COMPANY_CODE, setCompanyCode] = React.useState("");
  const [DISTRIBUTION_CHANNEL, setDistributionChannel] = React.useState("");
    const [selected, setSelected] = React.useState(false);
  const handleOrderCurrencyChange = (event) => {
    setOrderCurrency(event.target.value);
  };

  const handleCompanyCodeChange = (event) => {
    setCompanyCode(event.target.value);
  };

  const handleDistributionChannelChange = (event) => {
    setDistributionChannel(event.target.value);
  };
//   const handleSelectedChange = (event) => {
//     setSelected(event.target.checked);
  const handleSave = () => {
    console.log(rowData['Sl_no'])
    const editedRowData = {
      Sl_no: rowData['Sl_no'],
      ORDER_CURRENCY: ORDER_CURRENCY,
      COMPANY_CODE: COMPANY_CODE,
      DISTRIBUTION_CHANNEL: DISTRIBUTION_CHANNEL,
    };
    console.log("Edited data")
    console.log(editedRowData)
    axios
      .post(
        `http://localhost:8181/h2h_milestone_3/Edit?`,
        editedRowData
      )

      .then((response) => {
        // Handle the success response
        console.log("Data updated successfully");
        //setRefresh(!refresh);
        // You can perform any additional actions, such as refreshing the table
      })
      .catch((error) => {
        // Handle the error response
        console.error("Error updating data:", error);
        // You can display an error message or handle the error in any other way
      });
  };

  return (
    <Dialog open={open} onClose={onCancel} className={classes.dialog}>
      <DialogTitle>Edit</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Order Currency"
              variant="filled"
              value={ORDER_CURRENCY}
              onChange={handleOrderCurrencyChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Company Code"
              variant="filled"
              value={COMPANY_CODE}
              onChange={handleCompanyCodeChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Distribution Channel"
              variant="filled"
              value={DISTRIBUTION_CHANNEL}
              onChange={handleDistributionChannelChange}
              fullWidth
              margin="normal"
              style={{ backgroundColor: "white", color: "black" }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="fc7500"
            onClick={handleSave}
            style={{ backgroundColor: "white", color: "black" }}
            fullWidth
          >
            Edit
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="secondary"
            onClick={onCancel}
            style={{ backgroundColor: "white", color: "black" }}
            fullWidth
          >
            Cancel
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
