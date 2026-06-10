import "./globals.css";
import Footer from "./CommonComp/Footer";

export const metadata = {
  title: "Kodanda Investments",
  description: "Investing in India's Next Leaders",
  icons: {
    icon: "/k-logo.png",
  },
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
