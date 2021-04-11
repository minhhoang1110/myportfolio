import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import routes from "./constants/routes";
import NavBar from "./components/NavBar";
const MainLayout = (props) => {
    const showLayout = () => {
        var html = null;
        if (routes.length > 0) {
            html = routes.map((route,index) => {
                return (
                    <Route key={index} path={route.path} component={route.component}/>
                )
            })
        }
        return html;
    }
    return (
        <Router>
            <NavBar />
            <Switch>
                {showLayout()}
            </Switch>
        </Router>
    )
}
export default MainLayout;