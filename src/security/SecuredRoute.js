import React  from "react";
import { Route, Redirect } from "react-router-dom";
import Cookie from 'js-cookie';

const SecuredRoute = ({ component: Component, ...rest }) => {

    return(
       
        <Route {...rest} render ={
            
            props => {
                if(Cookie.get("jwt") !== undefined){
                    return <Component {...props} />
                } else {
                    return  <Redirect to={{
                            pathname: '/login',
                            state: {from: props.location}
                        }} />
                }
            }
        }/>
    )
}

export default SecuredRoute;