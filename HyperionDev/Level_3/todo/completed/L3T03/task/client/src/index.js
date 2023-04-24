import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Provider } from "react-redux"
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  	<React.StrictMode>
    	<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
    	</BrowserRouter>
  	</React.StrictMode>
);

/* 
^ Here i am wrapping the App component in a <Provider/>
^ componet from Redux which is then wrapped in a 
^ <BrowserRoute/> compoenent from React routing libary.
*/

