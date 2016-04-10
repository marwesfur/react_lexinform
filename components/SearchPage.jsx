import React from 'react';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';

export default React.createClass({

	render: function() {
		const result = {
			hitCount: 2,
			hits: [
				{title: 'Wellen vor Seychellen', preview: 'Beliebtester (nicht mehr existierender) Text'},
				{title: 'EStG', preview: 'Riesending mit vielen Paragraphen'}
			]
		};

		return (
			<div>
				<SearchBox />
				<hr/>
				<SearchResult result={result} />
			</div>
		);
	}
});
