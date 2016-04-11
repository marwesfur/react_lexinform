import React from 'react';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';
import request from "superagent"

const searchApi = 'https://www.datev.de/dnlexom/api/v40/search';

export default React.createClass({

	startSearch(query) {
		const _body = {
			attributes: ["Datum", "Autor", "Titel", "Preview", "RelevantFuer"],
			maxDocumentCount: 20,
			offset: 0,
			searchTerm: query,
			similarSearch: false,
			suppressTree: false
		};

		request
			.post(searchApi)
			.send(_body)
			.end((err, res) => {
				const result = {
					hitCount: res.totalCount,
					hits: res.documents.map(doc => ({title: doc.attributes.Titel, preview: doc.attributes.Preview}))
				};
				this.setState({result, query});
			});
	},

	getInitialState() {
		return {
			query: '',
			result: {
				hitCount: 0,
				hits: []
			}
		};
	},

	render: function() {
		return (
			<div>
				<SearchBox startSearch={this.startSearch} currentQuery={this.state.query}/>
				<hr/>
				<SearchResult result={this.state.result} />
			</div>
		);
	}
});
