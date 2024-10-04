import AppLayout from "@/components/Layout/AppLayout";
import "./globals.css";
import "swiper/css";
import { SidebarProvider } from "@/context/SidebarContext";

export const metadata = {
  title: "Tail Admin",
  description: "Stock Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppLayout>{children}</AppLayout>
        </SidebarProvider>
      </body>
    </html>
  );
}
