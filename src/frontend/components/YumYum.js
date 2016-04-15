import React, {Component, PropTypes} from 'react';

import YYBodyContainer from './YYBodyContainer'


class YumYum extends Component {

    static propTypes = {
        authors: PropTypes.array.isRequired
    }

    render() {
        return (
            <YYBodyContainer {...this.props}/>
        );
    }
}

export default YumYum;
