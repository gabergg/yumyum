import {Component, PropTypes} from React;

import RatingForm from './RatingForm'

module.exports = class YYBodyContainer extends Component {

    static propTypes = {
        authors: PropTypes.array.required
    }

    render() {
        return (
            <RatingForm {...this.props}/>
        );
    }
}
