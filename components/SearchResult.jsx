import React from 'react';
import SearchHit from './SearchHit';

export default React.createClass({

	render: function() {
		const {result} = this.props;
		const list = result.hits.map(hit => (<SearchHit hit={hit}/>));

		return (
			<div>
				<p>{result.hitCount} Treffer</p>
				{list}
			</div>
		);
	}
});
