import Head from "next/head";
import Nav from "@/components/Nav";

export default function Layout({
  children,
  title = "This is the default title",
}) {
  return (
    <>
      <Head>
        <title>Ladislav's site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Nav />
      </header>
      {children}
    </>
  );
}
