import React, {Component, PropTypes} from 'react';
import {throttle} from 'lodash/function'; //Where to throttle this shit?

import AutocompleteDropdown from './AutocompleteDropdown';

const Styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        height: "100%",
        background: 'transparent',
    },
    input: {
        padding: '20px',
        fontSize: '20px',
        border: '1px solid black',
    },
    label: {
        padding: '20px',
        fontSize: '20px',
        color: 'white',
        textTransform: 'uppercase',
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

    handleInputKeyUp(e) {
        const {yyActions} = this.props;
        if(e.keyCode !== 27) {
            yyActions.fetchAutocompleteSuggestions(
                {input: e.target.value}
            );
        }
    }

    handleInputFocus(e) {
        e.target.select();
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
                    placeholder="e.g. house of pancakes"
                    style={Styles.input}
                    onClick={this.handleInputClick}
                    onKeyUp={this.handleInputKeyUp.bind(this)}
                    onFocus={this.handleInputFocus}
                />
                { suggestions && (
                    <AutocompleteDropdown {...autocompleteProps}/>
                )}
            </div>
        );
    }
}
