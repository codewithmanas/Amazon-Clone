
import "@styles/globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: 'Amazon Clone',
  description: 'Amazon Clone | A NextJs E-Commerce App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  )
}
