import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer"


const middleware=[thunk]

const store=createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));



ReactDOM.render(
<Provider store={store}>
<React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
 </Provider>
     ,document.getElementById('root'));
