import "./scss/styles.scss";
import React, { Suspense } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import configureStore from "./store/store";
import { MainLayout } from "./components/layout/MainLayout";

// Homepage by default should be in the bundle file
import { Homepage } from "./pages/homepage/Homepage.page";

// Loader/spinner for lazy and suspense
import { Spinner } from "./components/common/spinner/Spinner";

// Lazy loaded pages
const ClientsPage = React.lazy(() => import("./pages/clients/Clients.page"));
const FounderPage = React.lazy(() => import("./pages/founder/Founder.page"));
const HowWeWorkPage = React.lazy(() =>
  import("./pages/how-we-work/HowWeWorks.page")
);
const LevelsPage = React.lazy(() => import("./pages/levels/Levels.page"));
const LocationsPage = React.lazy(() =>
  import("./pages/locations/Locations.page")
);
const LocationSinglePage = React.lazy(() =>
  import("./pages/location-single/LocationSingle.page")
);
const TCPage = React.lazy(() => import("./pages/tc/TC.page"));
const TestimonialsPage = React.lazy(() =>
  import("./pages/testimonials/Testimonials.page")
);

const App: React.FC = (): JSX.Element => {
  return (
    <div className="app">
      <ReduxProvider store={configureStore}>
        <Router>
          <MainLayout>
            <Switch>
              <Route path="/" component={Homepage} exact />
              <Suspense fallback={<Spinner />}>
                <Route path="/clients" component={ClientsPage} exact />
                <Route path="/founder" component={FounderPage} exact />
                <Route path="/how-we-work" component={HowWeWorkPage} exact />
                <Route path="/levels" component={LevelsPage} exact />
                <Route path="/locations" component={LocationsPage} exact />
                <Route
                  path="/location/:uid"
                  component={LocationSinglePage}
                  exact
                />
                <Route path="/tc" component={TCPage} exact />
                <Route
                  path="/testimonials"
                  component={TestimonialsPage}
                  exact
                />
                {/* <Route path="/contact" component={Contact} exact /> */}
              </Suspense>
            </Switch>
          </MainLayout>
        </Router>
      </ReduxProvider>
    </div>
  );
};

export default App;
