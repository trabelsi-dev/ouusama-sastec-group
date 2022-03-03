import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";
/* becch inbadlhom bil get te3i  */
import { getVideo } from "./actions/video.action";
//import { getUser } from "./actions/user.actions";

const store = createStore(
  // heda fichier regroupera tout le reducer donc qu'il permetrra de tout mettre le store par exemple store utilisateur les messages 
  rootReducer,
  // heda ligne just partie dev bech nijmou inchoufou state te3na 
  composeWithDevTools(applyMiddleware(thunk))
);


// bech irodha bil 5idma te3i inchlah
store.dispatch(getVideo());
//store.dispatch(getUser());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
