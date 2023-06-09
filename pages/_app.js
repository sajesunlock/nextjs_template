import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../styles/theme"
import store from "../store/index";
import "../styles/globals.css"
import Layout from "../compoments/layouts/Layout"

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 2,
  color: "#f26522",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Layout>
        <Container maxWidth="xl">
          <Component {...pageProps} />
        </Container>
      </Layout>
      </ThemeProvider>
    </Provider>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
    </Provider>
  )
}


MyApp.propTypes = {
   Component: PropTypes.element,
   pageProps: PropTypes.object,
}

export default MyApp
