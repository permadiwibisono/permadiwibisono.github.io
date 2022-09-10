/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react";

import Header from "./Header";
import useWindowHeight from "./hooks/use-window-height";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { height } = useWindowHeight();

  useEffect(() => {
    window.document.documentElement.style.setProperty("--vh", `${height}px`);
  }, [height]);

  return (
    <>
      <main className="p-8 w-full md:w-3/4 lg:w-2/3 xl:w-3/6 mx-auto min-h-[calc(var(--vh,1vh)*100)] justify-center flex flex-1 flex-col relative">
        <Header />
        {children}
      </main>
    </>
  );
};

export default Layout;
