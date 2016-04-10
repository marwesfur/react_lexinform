import React from 'react';

export default React.createClass({

	render: function() {
		const {hit} = this.props;

		return (
			<div>
				<h4>{hit.title}</h4>
				<p>{hit.preview}</p>
			</div>
		);
	}
});
