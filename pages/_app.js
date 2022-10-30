import PropTypes from "prop-types";
import { Provider } from "react-redux";
import store from "../store/index";
import "../styles/globals.css"
import Layout from "../compoments/layouts/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}


MyApp.propTypes = {
   Component: PropTypes.element,
   pageProps: PropTypes.object,
}

export default MyApp
