import React, {Component, PropTypes} from 'react';

import YYBodyContainer from './YYBodyContainer'

const Styles = {
    yumyum: {
        display: 'flex',
    },
}

class YumYum extends Component {

    static propTypes = {
        authors: PropTypes.array.isRequired
    }

    render() {
        return (
            <div style={Styles.yumyum}>
                <YYBodyContainer {...this.props}/>
            </div>
        );
    }
}

export default YumYum;
