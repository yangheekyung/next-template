import React from 'react';
import App from 'next/app';
import {appWithTranslation} from '../i18n';
import {wrapper} from '../store';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../public/static/style/reset.css';
import '../public/static/style/global.css';
import Layout from '../components/layout';

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {pageProps}
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
        <Component {...pageProps} />
    )
  }
}

const translationApp = appWithTranslation(MyApp);
const reduxApp = wrapper.withRedux(translationApp);
export default reduxApp;