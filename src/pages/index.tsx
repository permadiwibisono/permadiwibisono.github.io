import * as React from "react";
import { Envelope, Linkedin, Github, Dash } from "react-bootstrap-icons";
import type { HeadFC } from "gatsby";

const IndexPage = () => {
  return (
    <main className="p-8 w-full md:w-3/4 lg:w-2/3 xl:w-3/6 mx-auto min-h-screen justify-center flex flex-1 flex-col">
      <div className="mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold">Permadi Wibisono</h1>
        <h3 className="text-lg sm:text-3xl">
          <Dash className="inline-block" width={32} height={32} /> Software
          Engineer
        </h3>
        <div className="mt-4">
          <p className="text-md sm:text-lg mb-2">Let's get in touch</p>
          <ul className="text-2xl w-32 flex justify-between">
            <li>
              <a href="mailto:mbapewe@gmail.com" title="Email">
                <Envelope />
              </a>
            </li>
            <li>
              <a
                href="https://id.linkedin.com/in/permadi-wibisono-85669680"
                title="Linkedin"
              >
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/permadiwibisono" title="Github">
                <Github />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Permadi Wibisono | @permadiwibisono</title>
);
