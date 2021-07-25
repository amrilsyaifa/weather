import React, { lazy, useContext } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import GlobalStyle from './styles/Global';
import PageLoader from './components/PageLoader';
import SuspenseWithChunkError from './components/SuspenseWithChunkError';
import history from './routerHistory';

import { ThemeContext } from 'contexts/ThemeContext';

const Home = lazy(() => import('./views/Home'));
const Detail = lazy(() => import('./views/Detail'));
const NotFound = lazy(() => import('./views/NotFound'));

const App: React.FC = () => {
    const { themeMatch } = useContext(ThemeContext);
    return (
        <Router history={history}>
            <GlobalStyle themeMatch={themeMatch} />
            <SuspenseWithChunkError fallback={<PageLoader />}>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/detail" component={Detail} />

                    <Route component={NotFound} />
                </Switch>
            </SuspenseWithChunkError>
        </Router>
    );
};

export default React.memo(App);
