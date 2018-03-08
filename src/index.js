import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import App from './App';
import Login from './Login';
import Logout from './Logout';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function verificaAutenticacao(next) {
    if (localStorage.getItem('auth-token') != null) {
        return true;
    }
}

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/timeline" render={next => (
                verificaAutenticacao(next) ? (<App />) : (<Redirect to="/?msg=Você precisa estar logado para acessar a Timeline!" />)
            )} />
            <Route path="/logout" component={Logout} />
        </Switch>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
