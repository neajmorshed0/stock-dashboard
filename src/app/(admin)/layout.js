import { SidebarProvider } from "@/context/SidebarContext";
import AppLayout from "@/components/Layout/AppLayout";

export const metadata = {
  title: "TailAdmin",
  description: "Stock Management",
};

export default function AdminLayout({ children }) {
  return (
    <div>
      <SidebarProvider>
        <AppLayout>{children}</AppLayout>
      </SidebarProvider>
    </div>
  );
}
