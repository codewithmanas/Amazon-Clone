
import AuthProvider from "@components/AuthProvider";
import ReduxProvider from "@components/ReduxProvider";
import "@styles/globals.css";
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
        <ReduxProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
