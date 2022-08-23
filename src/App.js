import React, { Suspense } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./app/slices/authSlice";

import AddPostForm from "./components/AddPostForm/AddPostForm";
import UpdatePostForm from "./components/UpdatePostForm/UpdatePostForm";
import Loading from "./components/UI/Loading";

const Layout = React.lazy(() => import("./components/Layout/Layout"));
const Posts = React.lazy(() => import("./components/Posts/Posts"));
const SignUp = React.lazy(() => import("./components/SignUp/SignUp"));
const SignIn = React.lazy(() => import("./components/SignIn/SignIn"));

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact>
            <React.Fragment>
              {isLoggedIn && <AddPostForm />}
              <Posts />
            </React.Fragment>
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-in" component={SignIn} />
          <Route path={`/edit-post/:postId`} component={UpdatePostForm} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
