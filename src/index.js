import React from 'react'
import { render } from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import Home from './components/Home/Home'
import User from './components/User/User'
import About from './components/About/About'
import Root from './components/Root'


class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root} >
                    <IndexRoute component={Home} />                    
                    <Route path={"user/:id"} component={User} />
                    <Route path={"home"} component={Home} />
                    <Route path={"about"} component={About}/>
                </Route>
                <Route path={"home-single"} component={Home}/>
            </Router>
        );
    }
}

render(<App />, window.document.getElementById('app'));
	
  
