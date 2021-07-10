import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../component/login';
import Signup from '../component/signup';
import Home from '../component/Home';


function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/user/:id" component={Home} />
            </Switch>
        </Router>
    )
}

export default AppRouter;
