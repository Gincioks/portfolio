import React, { Suspense, useEffect } from "react";
import Layout from "./components/Layout";
import { Redirect, Route, Switch } from "react-router";
import { useDispatch } from "react-redux";
import { CheckLangState } from "./store/actions/LanguageActions";

type Props = {};

const App: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CheckLangState());
  });
  let routes = (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route path="/" exact component={Layout} />
        <Redirect to="/" />
      </Suspense>
    </Switch>
  );

  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
};

export default App;
