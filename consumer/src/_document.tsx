import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocumment extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&family=Preahvihear&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <main>
            <Main />
            <NextScript />
          </main>
        </body>
      </Html>
    );
  }
}
