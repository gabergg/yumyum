import {Component, PropTypes} from React;

import YYBodyContainer from './YYBodyContainer'


module.exports = class YumYum extends Component {

    static propTypes = {
        authors: PropTypes.array.required
    }

    render() {
        return (
            <YYBodyContainer {...this.props}/>
        );
    }
}
