// import "./scss/styles.scss";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
import configureStore from "./store/store";

//pages
import Homepage from './pages/homepage/Homepage'

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="app">
      <ReduxProvider store={configureStore}>
        <Homepage />
        {/* <Router>
            <MainLayout>
              <Suspense fallback={<Loader />}>
                <Switch>
                  <Route path="/" component={Homepage} exact />
                  <Route path="/author/:uid" component={AuthorPage} exact />
                  <Route
                    path="/articles/:uid"
                    component={SingleArticlePage}
                    exact
                  />
                  <Route path="/articles" component={AllArticlesPage} exact />
                  <Route component={ErrorPage} />
                </Switch>
              </Suspense>
            </MainLayout>
          </Router> */}
      </ReduxProvider>
      {/* <HelmetProvider context={helmetContext}>
      </HelmetProvider> */}
    </div>
  );
};

export default App;
