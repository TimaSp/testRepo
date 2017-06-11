import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk  from 'redux-thunk';
import wilddog from 'wilddog';
import reducers from './reducers';
import Router from './Route'


class App extends Component {
	componentWillMount() {
	    const config = {
	        syncURL: "https://nnkz.wilddogio.com",
	        authDomain: "nnkz.wilddog.com"
	    }
	    wilddog.initializeApp(config);

	}
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
              <Router />
			</Provider>
			);
	}
}

const styles = {
	bodyd: {
	  	alignItems: 'center',
	    justifyContent: 'center',
  	},
}
export default App;
