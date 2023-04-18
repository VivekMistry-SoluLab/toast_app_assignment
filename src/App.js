import { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { guestRoutes } from './routes';

import 'bootstrap/dist/js/bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

// Custom styles
import './assets/css/dev.css';
import { Loader } from './components';
import Layout from './views/Layout/Layout';

function App() {
  const pathname = window.location.pathname.split('/')[1];

  const redirectHandler = () => {
    const guestRoute = guestRoutes
      .filter(item => item.redirectRoute === undefined)
      .map(item => item.path);
    return !guestRoute.includes(`/${pathname}`) && localStorage.getItem('authToken') == null ? (
      <Redirect to="/special" />
    ) : null;
  };

  return (
    <Suspense fallback={<Loader isFullLoader />}>
      <BrowserRouter>
        <Layout>
          <Switch>
            {guestRoutes.map(
              route =>
                route.redirectRoute === undefined && (
                  <Route key={route.name} path={route.path} exact={route.exact} name={route.name}>
                    <route.component />
                  </Route>
                ),
            )}
            {redirectHandler()}
          </Switch>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
}
export default App;
