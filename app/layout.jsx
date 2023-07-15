
import "@styles/globals.css";
import Header from "@components/Header";
import Head from "next/head";

export const metadata = {
  title: 'Amazon Clone',
  description: 'Amazon Clone | A NextJs E-Commerce App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
      </Head>
      <body>
        <main className="app">
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
