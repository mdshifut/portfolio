import App from "next/app";
import { Provider } from "react-redux";
import withReduxStore from "../lib/with-redux-store";
import Layout from "../components/Layout";
import normalize from "../styles/normalize";
import globalStyle from "../styles/global-style";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <style jsx global>
          {normalize}
        </style>
        <style jsx global>
          {globalStyle}
        </style>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
