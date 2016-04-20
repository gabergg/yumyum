import React, {Component, PropTypes} from 'react';

import RatingForm from './RatingForm';
import SearchForm from './SearchForm';

class YYBodyContainer extends Component {

    static propTypes = {
        authors: PropTypes.array.isRequired,
        spot: PropTypes.object
    };

    ratingForm() {
        return (
            <RatingForm {...this.props}/>
        );
    }

    searchForm() {
        return (
            <SearchForm {...this.props}/>
        );
    }

    render() {
        if(this.props.spot.name)
            return this.ratingForm();
        else
            return this.searchForm();
    }
}

export default YYBodyContainer;
