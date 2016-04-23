import React, {Component, PropTypes} from 'react';

import YYBodyContainer from './YYBodyContainer'

const Styles = {
    yumyum: {
        display: 'flex',
        justifyContent: 'center',
    },
}

class YumYum extends Component {

    static propTypes = {
        authors: PropTypes.array.isRequired
    }

    render() {
        const {yyActions} = this.props;

        return (
            <div
                style={Styles.yumyum}
                onClick={yyActions.clearAutocompleteSuggestions}
            >
                <YYBodyContainer {...this.props}/>
            </div>
        );
    }
}

export default YumYum;
