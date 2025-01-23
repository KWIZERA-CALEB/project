import React from "react";


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">
     {children}
    </div>
      
  );
};

export default Layout;
