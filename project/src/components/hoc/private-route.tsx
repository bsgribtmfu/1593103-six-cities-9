import { Navigate } from 'react-router-dom';

import { AppRoute } from '../../const';
import { AutorisationStatus } from '../../const';

type PrivateRouteProps = {
  autorisationStatus: AutorisationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { autorisationStatus, children } = props;

  return (
    autorisationStatus === AutorisationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
