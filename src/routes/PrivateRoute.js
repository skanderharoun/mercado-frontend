import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import InsideLayout from '../layouts/InsideLayout';

function PrivateRoute({ component: Component, ...rest }) {
    // const { isAuth } = useSelector(state => state.user);
    const isAuth = useSelector(state => state.user.isAuth);
    return (
        <Route
            {...rest}
            component={(props) => (
                isAuth
                    ? <InsideLayout><Component {...props} /></InsideLayout>
                    : <Redirect to='/login' />
            )}
        />
    )
}

export default PrivateRoute;