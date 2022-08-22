/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <main className="p-8 w-full md:w-3/4 lg:w-2/3 xl:w-3/6 mx-auto min-h-screen justify-center flex flex-1 flex-col relative">
        <Header />
        {children}
      </main>
    </>
  );
};

export default Layout;
