import AppLayout from "@/components/Layout/AppLayout";
import "./globals.css";
import "swiper/css";

export const metadata = {
  title: "Tail Admin",
  description: "Stock Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
