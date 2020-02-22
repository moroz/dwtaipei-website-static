import React, { useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <SEO title="Home" />
      <p>Count: {count}</p>
      <button className="button" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      {count > 4 ? <h1>La papo mortis!</h1> : <h1>La papo vivas!</h1>}
    </Layout>
  );
};

export default IndexPage;
