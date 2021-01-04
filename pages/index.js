import React, { Fragment } from "react";
import Layout from "../components/Layout/layout";
import { Grid, Paper, Container, Button } from "@material-ui/core";
import AppThumbnail from "../components/AppThumbnail/thumbnail";
import { useState } from "react";

export default function Home() {
  const initialState = [
    {
      title: "Upgrade Network-Element",
      description: `Upgrade the next-generation packet transport technology device. Currently supported devices are 1. Neptune Packet System`,
      actions: [
        {
          buttontitle: "Upgrade Now",
          onclick_route: "apps/upgrade/network-element",
        },
      ],
      image: "/images/networkelements/Neptune-1800.jpg",
      descriptionUIcomponent: (
        <Fragment>
          <h2>
            Upgrade the next-generation packet transport technology device
          </h2>
          <ul>
            <li style={{ color: "#6200ee" }}>{`Neptune Packet System`}</li>
          </ul>
        </Fragment>
      ),
    },
    {
      title: "Automation API Docs",
      description: `Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`,
      descriptionUIcomponent: (
        <Fragment>
          <h2>Automation API Docs</h2>
          <p>
            Detail information on usage of Automation API's. It helps identify
            correct set of API's to implement Feature
          </p>
        </Fragment>
      ),
      image: "/images/apidocs/apithedoc.png",
      actions: [
        {
          buttontitle: "Know More",
          onclick_route: "apps/docs/api-docs",
        },
      ],
    },
    {
      title: `TestNG < suite /> Editor`,
      description: `Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`,
      image: "/images/testng/TESTNG.png",
      descriptionUIcomponent: (
        <Fragment>
          <h2>{`TestNG <suite/> Editor`}</h2>
          <p>Easy to edit any attribute of a TestNG suite.xml</p>
          <ul>
            <li style={{ color: "#6200ee" }}>{`Paramter values`}</li>
            <li style={{ color: "#6200ee" }}>{`Class names`}</li>
            <li style={{ color: "#6200ee" }}>{`API names`}</li>
          </ul>
        </Fragment>
      ),
      actions: [
        {
          buttontitle: "Edit Now",
          onclick_route: "apps/testng/suite-editor",
        },
      ],
    },
  ];
  const [appData, setAppData] = useState(initialState);

  return (
    <Layout mainHeader={true} navBarTitle={`Automation App`}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={2}
        style={{ flexGrow: 1 }}
      >
        <Grid item xs={12}>
          <Grid container justify="space-evenly" spacing={2}>
            {appData.map((appdetail) => (
              <Grid key={appdetail.title} item>
                <AppThumbnail
                  title={appdetail.title}
                  description={appdetail.description}
                  route={appdetail.route}
                  image={appdetail.image}
                  descriptionUIcomponent={appdetail.descriptionUIcomponent}
                  actions={appdetail.actions}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
