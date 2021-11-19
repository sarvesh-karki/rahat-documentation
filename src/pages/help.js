<p>this is all version page</p>;
import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function HelpPage() {
  return (
    <Layout title={`Help`} description="Help Page">
      <main>
        <div className="container">
          <div>
            <h3 id="latest" style={{ marginTop: "25px" }}>
              Help Page | Coming Soon !!!
            </h3>
            <p>This page in under contruction.</p>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              <Translate>Documentation</Translate>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
