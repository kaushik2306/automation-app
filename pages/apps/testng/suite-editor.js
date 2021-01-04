import React from "react";
import Layout from "../../../components/Layout/layout";
import { Paper, Grid } from "@material-ui/core";
export default function SuiteEditor() {
  return (
    <Layout mainHeader={false} navBarTitle={`TestNG <suite/> Editor`}>
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
              <Paper>IN PROGRESS</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
