import '../styles/globals.scss';
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
    <DefaultLayout>
        <Component {...pageProps} />
    </DefaultLayout>
);

export default App;
