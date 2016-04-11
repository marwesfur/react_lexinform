import React from 'react';

export default React.createClass({

	getInitialState() {
		return {query: ''}
	},

	onQueryChanged(e) {
		this.setState({query: e.target.value})
	},

	render: function() {
		return (
			<div>
				<input type="text" value={this.state.query} onChange={this.onQueryChanged} />
				<button>Suchen</button>
				{this.state.query}
			</div>
		);
	}
});
