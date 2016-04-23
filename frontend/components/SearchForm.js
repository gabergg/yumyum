import React, {Component, PropTypes} from 'react';
import {throttle} from 'lodash/function'; //Where to throttle this shit?

import AutocompleteDropdown from './AutocompleteDropdown';

const Styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        height: "100%",
    },
    input: {
        padding: '20px',
        fontSize: '20px',
        border: '1px solid black',
    },
    label: {
        padding: '20px',
        fontSize: '20px',
    },
};

export default class SearchForm extends Component {

    static propTypes = {
        suggestions: PropTypes.array,
    };

    handleSuggestionSelected(suggestion) {
        const {yyActions} = this.props;

        yyActions.suggestionSelected(suggestion);
        yyActions.fetchSpotRatings(suggestion);
    }

    handleInputClick(e) {
        e.stopPropagation();
    }

    render() {
        const {
            suggestions,
            yyActions,
        } = this.props;

        const autocompleteProps = {
            suggestions,
            onClick: this.handleSuggestionSelected.bind(this),
        };

        return (
            <div style={Styles.form}>
                <label style={Styles.label}>
                    Wat restaurant broke da mouf?
                </label>
                <input
                    style={Styles.input}
                    onClick={this.handleInputClick}
                    onKeyUp={(e) =>
                        yyActions.fetchAutocompleteSuggestions(
                            {input: e.target.value}
                        )}
                />
                { suggestions && (
                    <AutocompleteDropdown {...autocompleteProps}/>
                )}
            </div>
        );
    }
}
