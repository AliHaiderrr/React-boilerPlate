import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css';

// __ __ Components/Helpers __ __ //
import { Provider } from 'react-redux';
import { store } from './store/store';
import ErrorBoundary from './hoc/ErrorBoundary';
import * as serviceWorker from "./serviceWorker";
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </ErrorBoundary>

  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// serviceWorker.unregister();
