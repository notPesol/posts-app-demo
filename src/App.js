import React from "react";
import AddPostForm from "./components/AddPostForm/AddPostForm";

import Layout from "./components/Layout/Layout";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div className="App">
      <Layout>
        <AddPostForm />
        <Posts />
      </Layout>
    </div>
  );
}

export default App;
