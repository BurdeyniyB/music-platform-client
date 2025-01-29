import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { wrapper } from '@/store';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { store } = wrapper.useWrappedStore({ pageProps });

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
