import React, {Component, PropTypes} from 'react';

import RatingForm from './RatingForm';
import SearchForm from './SearchForm';

class YYBodyContainer extends Component {

    static propTypes = {
        authors: PropTypes.array.isRequired,
        spot: PropTypes.object
    };

    render() {
        return (
            <div>
                <SearchForm {...this.props}/>
                {
                    this.props.spot && (
                        <RatingForm {...this.props}/>
                    )
                }
            </div>
        );
    }
}

export default YYBodyContainer;
