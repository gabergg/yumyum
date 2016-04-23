import React, {PropTypes, Component} from 'react';
import {map} from 'lodash/collection';

import AutocompleteSuggestion from './AutocompleteSuggestion';

const Styles = {
    autocomplete: {
        display: "block",
        backgroundColor: "yellow",
    },
};

export default class AutocompleteDropdown extends Component {

    static propTypes = {
        suggestions: PropTypes.array.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    render() {
        const {
            suggestions,
            onClick,
        } = this.props;

        function acSuggestionProps(suggestion, key) {
            return {
                key,
                suggestion,
                onClick,
            }
        }

        return (
            <div style={Styles.autocomplete}>
                {suggestions.map((suggestion, i) => (
                    <AutocompleteSuggestion {...acSuggestionProps(suggestion, i)}/>
                ))}
            </div>
        );
    }


}
