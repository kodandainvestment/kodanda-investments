import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "Kodanda Investments",
  description: "Investing in India's Next Leaders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
