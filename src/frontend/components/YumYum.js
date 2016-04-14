import React, {Component, PropTypes} from 'react';

import YYBodyContainer from './YYBodyContainer'


class YumYum extends Component {

    static propTypes = {
        authors: PropTypes.array.required
    }

    render() {
        return (
            <YYBodyContainer {...this.props}/>
        );
    }
}

export default YumYum;
