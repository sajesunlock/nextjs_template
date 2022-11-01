import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../styles/theme"
import store from "../store/index";
import "../styles/globals.css"
import Layout from "../compoments/layouts/Layout"

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
