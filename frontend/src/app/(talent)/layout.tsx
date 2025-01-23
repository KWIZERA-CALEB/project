import React from "react";
import SideNav from "@/components/ui/SideNav";
import AdminNav from "@/components/ui/AdminNav";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideNav />

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* Top Admin Navigation */}
        <AdminNav />

        {/* Page Content */}
        <div className="flex-grow overflow-y-auto bg-gray-100">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
