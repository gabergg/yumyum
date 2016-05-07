import React, {Component, PropTypes} from 'react';

import YYBodyContainer from './YYBodyContainer';

const backgroundImgURL = "/static/main-background.jpg";

const Styles = {
    yumyum: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        background: 'url(' + backgroundImgURL + ') no-repeat center center fixed',
        backgroundSize: 'cover',
    },
}

class YumYum extends Component {

    static propTypes = {
        authors: PropTypes.array.isRequired
    }

    handleClick(e) {
        const {
            yyActions,
            suggestions,
        } = this.props;
        if(suggestions.length > 0)
            yyActions.clearAutocompleteSuggestions()
    }

    handleKeyUp(e) {
        const {
            yyActions,
            suggestions,
        } = this.props;
        if(e.keyCode === 27 && suggestions.length > 0) {
            yyActions.clearAutocompleteSuggestions();
        }
    }

    render() {
        const {yyActions} = this.props;

        return (
            <div
                style={Styles.yumyum}
                onClick={this.handleClick.bind(this)}
                onKeyUp={this.handleKeyUp.bind(this)}
            >
                <YYBodyContainer {...this.props}/>
            </div>
        );
    }
}

export default YumYum;
