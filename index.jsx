require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';

import SearchPage from './components/SearchPage';

export class App extends React.Component {
	render() {
		return (
			<SearchPage />
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
