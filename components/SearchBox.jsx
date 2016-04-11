import React from 'react';

export default React.createClass({

	getInitialState() {
		return {query: ''}
	},

	onQueryChanged(e) {
		this.setState({query: e.target.value})
	},

	render: function() {
		const {startSearch, currentQuery} = this.props;
		return (
			<div>
				<input type="text" value={this.state.query} onChange={this.onQueryChanged} />
				<button onClick={() => startSearch(this.state.query)} disabled={currentQuery == this.state.query}>Suchen</button>
			</div>
		);
	}
});
