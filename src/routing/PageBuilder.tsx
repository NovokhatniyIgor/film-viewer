import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { routes } from 'src/routing';

const PageBuilder = () => (
    <Route
        render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
                <Switch location={location} key={location.pathname}>
                    {routes.map((item) => {
                        const { id, path, exact, Component } = item;
                        return <Route key={id} exact={exact} path={path} component={Component} />;
                    })}
                </Switch>
            </AnimatePresence>
        )}
    />
);

export { PageBuilder };
