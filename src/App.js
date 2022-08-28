import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { useDispatch } from 'react-redux';

import CreateItem from './pages/CreateItem';
import Home from './pages/Home';
import ItemDetails from './pages/ItemDetails';
import Items from './pages/Items';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Register from './pages/Register';
import UpdateItem from './pages/UpdateItem';

import GlobalLoading from './components/GlobalLoading';
import { login } from './redux/actions/userActionCreators';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import CustomRoute from './routes/CustomRoute';

function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user'))
  if (token && user) {
    dispatch(login(user, token))
  }
  return (
    <>
      <GlobalLoading />
      <Router>
        <Switch>

          <PublicRoute exact path='/' component={Home} />
          <PublicRoute path='/login' component={Login} />
          <PublicRoute path='/register' component={Register} />

          <PrivateRoute path='/profile' component={Profile} />
          <PrivateRoute exact path='/items' component={Items} />
          <PrivateRoute path='/create-item' component={CreateItem} />
          <PrivateRoute path='/update-item/:id' component={UpdateItem} />

          <CustomRoute path='/items/:id' component={ItemDetails} />
          <CustomRoute component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
