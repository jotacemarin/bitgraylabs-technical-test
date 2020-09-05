/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

// Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Canina
import HandlerAlerts from 'containers/modals/HandlerAlerts';

// Routes
import routes from './routes';

// General styles
import GlobalStyle from '../../global-styles';

/**
 * @author Julio Marin
 * @file app\containers\App\index.jsx
 * @description App container
 */
export default function App() {
  return (
    <div>
      <Switch>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
      <GlobalStyle />
      <HandlerAlerts />
    </div>
  );
}
