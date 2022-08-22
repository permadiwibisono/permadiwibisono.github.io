import * as React from "react";
import { Link, HeadFC } from "gatsby";
import Layout from "../components/Layout";

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  borderRadius: 4,
};

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold">Page not found</h1>
        <p className="text-lg">
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link
            to="/"
            className="border border-black dark:border-white px-4 py-2"
          >
            Go home
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
