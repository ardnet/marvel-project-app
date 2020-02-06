import React from 'react'
// import { render } from '@testing-library/react';

class SearchCharacters extends React.Component {
    constructor(props) {
        super(props);
        this.handleCharChange = this.handleCharChange.bind(this);
    }

    handleCharChange(e) {
        this.props.onSearchCharChange(e.target.value);
    }

    render() {
        let searchtext = this.props.searchtext;
        return (
            <div className="search-characters">
                <input className="mr-sm-2" value={searchtext} onChange={this.handleCharChange} placeholder="Search..." />
            </div>
        )
    }
}

export default SearchCharacters
