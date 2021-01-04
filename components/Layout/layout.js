import React, { Component } from "react";
import Head from "next/head";
// import { AppBar, Typography, Toolbar, Grid } from "@material-ui/core";
import NavBar from "./NavBar/navbar";
export default class Layout extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Automation App</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href={`https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap`}
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
        </Head>
        <header>
          <NavBar
            mainHeader={this.props.mainHeader}
            navBarTitle={this.props.navBarTitle}
          />
        </header>
        <main>{this.props.children}</main>
        {/* <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <img src="/vercel.svg" alt="Vercel Logo" />
          </a>
        </footer> */}
      </div>
    );
  }
}
