import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Redirect, Route, Link} from 'react-router-dom'

import Layout from 'component/layout/index.jsx';
// 页面
import Home from 'page/home/index.jsx';
import Footer from "component/footer/index.jsx";

class App extends React.Component {
    render() {
        let LayoutRouter = (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </Layout>
        );
        return (
            <div id="page-container">
                <div id="content-wrap">
                    <Router>
                        <Switch>
                            <Route path="/" render={props => LayoutRouter}/>
                        </Switch>
                    </Router>
                </div>
                <Footer/>
            </div>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('app')
);