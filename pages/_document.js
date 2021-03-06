import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta charSet="utf-8" />
          {process.env.NODE_ENV === "production" && (
            <script async data-api="/_hive" src="/bee.js"></script>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
