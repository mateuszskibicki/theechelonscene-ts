import "./scss/styles.scss";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
import configureStore from "./store/store";
import { MainLayout } from "./components/layout/MainLayout";

//pages
import {
  Homepage,
  Clients,
  Founder,
  HowWeWork,
  Levels,
  Location,
  TC,
  FAQ,
  Contact
} from "./pages";

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="app">
      <ReduxProvider store={configureStore}>
        <Router>
          <MainLayout>
            <Switch>
              <Route path="/" component={Homepage} exact />
              <Route path="/clients" component={Clients} exact />
              <Route path="/founder" component={Founder} exact />
              <Route path="/how-we-work" component={HowWeWork} exact />
              <Route path="/levels" component={Levels} exact />
              <Route path="/location" component={Location} exact />
              <Route path="/tc" component={TC} exact />
              <Route path="/faq" component={FAQ} exact />
              <Route path="/contact" component={Contact} exact />
            </Switch>
          </MainLayout>
        </Router>
      </ReduxProvider>
      {/* <HelmetProvider context={helmetContext}>
      </HelmetProvider> */}
    </div>
  );
};

export default App;
