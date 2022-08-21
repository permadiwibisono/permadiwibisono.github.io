import * as React from "react";
import { Link, HeadFC } from "gatsby";

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  borderRadius: 4,
};

const NotFoundPage = () => {
  return (
    <main className="p-8 w-full md:w-3/4 lg:w-2/3 xl:w-3/6 mx-auto min-h-screen justify-center flex flex-1 flex-col">
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
        <Link to="/" className="border border-white px-4 py-2">
          Go home
        </Link>
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
