import React  from "react";
import { Route as ReactRout} from 'react-router-dom'

const Route = ({
    path, 
    exact,
    Layout,
    secure, 
    component
}) => {
    return(
        <Layout>
            <ReactRout
                path={path}
                component = {component}
                exact={exact}
                private={secure}
                />
        </Layout>
    )
}
export default Route