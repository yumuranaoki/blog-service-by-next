import * as React from 'react';
import App from 'next/app';
import { Container } from 'next/app'
import { Provider } from 'react-redux';
import { Grommet } from 'grommet';
import store from '../store/index';

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Grommet plain>
            <Component {...pageProps} />
          </Grommet>
        </Provider>
      </Container>
    )
  }
}

export default MyApp;
