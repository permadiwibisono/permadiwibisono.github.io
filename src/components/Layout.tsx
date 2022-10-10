/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react";
import clsx from "clsx";

import Header from "./Header";
import useWindowHeight from "./hooks/use-window-height";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { height } = useWindowHeight();

  useEffect(() => {
    if (!height) return;
    window.document.documentElement.style.setProperty("--vh", `${height}px`);
  }, [height]);

  return (
    <>
      <main
        className={clsx(
          "p-8 w-full md:w-3/4 lg:w-2/3 xl:w-3/6 mx-auto justify-center flex flex-1 flex-col relative",
          {
            "min-h-[calc(var(--vh,1vh)*100)]": height != null,
            "min-h-screen": height == null,
          }
        )}
      >
        <Header />
        {children}
      </main>
    </>
  );
};

export default Layout;
