import React, { lazy } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import GlobalStyle from './styles/Global';
import PageLoader from './components/PageLoader';
import SuspenseWithChunkError from './components/SuspenseWithChunkError';
import history from './routerHistory';

const Home = lazy(() => import('./views/Home'));
const NotFound = lazy(() => import('./views/NotFound'));

const App: React.FC = () => {
    return (
        <Router history={history}>
            <GlobalStyle />
            <SuspenseWithChunkError fallback={<PageLoader />}>
                <Switch>
                    <Route path="/" component={Home} exact />

                    <Route component={NotFound} />
                </Switch>
            </SuspenseWithChunkError>
        </Router>
    );
};

export default React.memo(App);
