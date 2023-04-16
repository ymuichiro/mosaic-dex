import '@/assets/css/global.css';
import AppBar from '@/components/atom/AppBar';
import ErrorBoundary from '@/components/atom/ErrorBoundary';
import theme from '@/services/SystemTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider } from '@mui/material/styles';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ErrorBoundary>
            <AppBar />
            <Toolbar />
            <Component {...pageProps} />
          </ErrorBoundary>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
