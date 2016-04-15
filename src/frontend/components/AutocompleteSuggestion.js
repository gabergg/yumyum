import React, {PropTypes, Component} from 'react';

const Styles = {
    suggestion: {
        border: "1px solid black",
    },
};

export default class AutocompleteSuggestion extends Component {

    static propTypes = {
        suggestion: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    render() {
        const {
            onClick,
            suggestion,
        } = this.props;

        return (
            <div
                style={Styles.suggestion}
                onClick={() => onClick({suggestion})}
                >
                <span> {suggestion} </span>
            </div>
        );
    }


}
