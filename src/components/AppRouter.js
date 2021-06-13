import React, {useContext, useEffect} from 'react';
import {Route, Switch, Redirect, useHistory} from 'react-router-dom';
import {privateRoutes, publicRoutes} from "../routes";
import {HOME_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";


const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    const history = useHistory()

    useEffect(() => {
        if(user) {  
            history.push(HOME_ROUTE)
        }
    }, [user])

    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, component}) =>
                    <Route key={path} path={path} component={component} exact={path === '/'} />
                )}
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
                <Redirect to={LOGIN_ROUTE}/>
            </Switch>
        )
};

export default AppRouter;
