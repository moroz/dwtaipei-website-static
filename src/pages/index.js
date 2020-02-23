import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import CourseCanceled from "../components/courseCanceled";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <CourseCanceled />
    </Layout>
  );
};

export default IndexPage;
