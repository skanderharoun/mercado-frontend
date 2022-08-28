import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import OutsideLayout from '../layouts/OutsideLayout';

function PublicRoute({ component: Component, ...rest }) {
    const isAuth  = useSelector(state => state.user.isAuth);
    return (
        <Route
            {...rest}
            component={(props) => (
                isAuth
                    ? <Redirect to='/items' />
                    : <OutsideLayout><Component {...props} /></OutsideLayout>
            )}
        />
    )
}

export default PublicRoute;