import * as React from "react";
import {
  Envelope,
  Linkedin,
  Github,
  Dash,
  Instagram,
} from "react-bootstrap-icons";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <div className="mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold">Permadi Wibisono</h1>
        <h3 className="text-lg sm:text-3xl">
          <Dash className="inline-block" width={32} height={32} /> Software
          Engineer
        </h3>
        <div className="mt-4">
          <p className="text-md sm:text-lg mb-2">Let's get in touch</p>
          <ul className="text-2xl w-64 flex justify-between">
            <li>
              <a href="https://instagram.com/permadiwibisono" title="Instagram">
                <Instagram />
              </a>
            </li>
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
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Permadi Wibisono | @permadiwibisono</title>
);
