import { AppRoute } from '../../const';
import { AutorisationStatus } from '../../const';

import Main from '../pages/main';
import Login from '../pages/login';
import Favorites from '../pages/favorites';
import Offer from '../pages/offer';
import Error from '../error/error';
import PrivateRoute from '../hoc/private-route';

import { Route, BrowserRouter, Routes } from 'react-router-dom';

type Props = {
  amount: number,
  locations: string[]
}

function App(props: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main { ...props} />}
        />

        <Route
          path={AppRoute.Login}
          element={<Login />}
        />

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute autorisationStatus={AutorisationStatus.NoAuth}>
              <Favorites />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.Offer}
          element={<Offer />}
        />

        <Route
          path={AppRoute.Error}
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
