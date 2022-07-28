import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import AddPostForm from "./components/AddPostForm/AddPostForm";
import UpdatePostForm from "./components/UpdatePostForm/UpdatePostForm";

import Layout from "./components/Layout/Layout";
import Posts from "./components/Posts/Posts";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <React.Fragment>
            <AddPostForm />
            <Posts />
          </React.Fragment>
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path={`/edit-post/:postId`} component={UpdatePostForm} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
