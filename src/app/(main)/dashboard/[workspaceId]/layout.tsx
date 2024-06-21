import Sidebar from "@/components/sidebar/sidebar";
import React, { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  params: any;
}

const Layout: FC<LayoutProps> = ({ children, params }) => {
  return (
    <main className="flex overflow-hidden h-screen w-screen">
      <Sidebar params={params} />
      <div
        className="dark:boder-Neutrals-12/70
        border-l-[1px]
        w-full
        relative
        overflow-scroll
      "
      >
        {children}
      </div>
    </main>
  );
};

export default Layout;
