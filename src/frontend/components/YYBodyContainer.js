import React, {Component, PropTypes} from 'react';

import RatingForm from './RatingForm'

class YYBodyContainer extends Component {

    static propTypes = {
        authors: PropTypes.array.required
    }

    render() {
        return (
            <RatingForm {...this.props}/>
        );
    }
}

export default YYBodyContainer;
