import React, {Component, PropTypes} from 'react';

import AutocompleteDropdown from './AutocompleteDropdown';

const Styles = {
    form: {
        height: "300px",
        backgroundColor: "green",
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
                <label> Wat restaurant broke da mouf? </label>
                <input
                    onKeyUp={(e) =>
                        yyActions.fetchAutocompleteSuggestions(
                            {
                                input: e.target.value,
                            }
                        )}
                />
                { suggestions && (
                    <AutocompleteDropdown {...autocompleteProps}/>
                )}
            </div>
        );
    }
}
