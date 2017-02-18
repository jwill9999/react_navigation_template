import React from 'react';
import Nav from './Nav/Nav';
import Home from './Home/Home'
import About from './About/About'
import User from './User/User'
import '../main.scss'

class Root extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Nav />
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Root;