import type { AppProps } from 'next/app';
import QueryProvider from '@/providers/queryProvider';
import '@/app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryProvider>
            <Component {...pageProps} />
        </QueryProvider>
    );
}

export default MyApp;
