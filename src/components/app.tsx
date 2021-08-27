import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Forecast from '../routes/forecast';
import Home from '../routes/home';
import NotFoundPage from '../routes/notfound';
import Header from './header';

const App: FunctionalComponent = () => {
    return (
        <div id="preact_root">
            <Header />
            <Router>
                <Route path="/" component={Home} />
                <Route path="/forecast" component={Forecast} />
                <NotFoundPage default />
            </Router>
        </div>
    );
};

export default App;
