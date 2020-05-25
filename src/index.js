import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({
	realtime: true
});

const store = createStore(
  rootReducer,
  composeEnhancers(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reduxFirestore(fbConfig),
      ),
  );

const rrfConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  useFirestoreForProfile: true
};

const rrfProps = {
  firebase: fbConfig,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
      <Provider store={store}> 
         <ReactReduxFirebaseProvider  {...rrfProps}>
           <App />
         </ReactReduxFirebaseProvider>
      </Provider>, document.getElementById('root')
);

serviceWorker.unregister();


