import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Wrapepd) => {
    return (props) => {
        return (
            <RestoServiceContext.Consumer>
                {
                    (RestoService) => {
                        return <Wrapepd {...props} RestoService={RestoService}/>
                    }
                }
            </RestoServiceContext.Consumer>
        )
    };
};

export default WithRestoService;