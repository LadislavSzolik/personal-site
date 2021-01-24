import '../styles/index.css'

import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import MDXComponents from '@/components/MDXComponents';

export default function App({ Component, pageProps }) {

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />          
        </Head>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}
