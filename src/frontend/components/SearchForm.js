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

    render() {
        console.log(this.props);
        const {
            selectedSuggestion,
            suggestions,
            yyActions,
        } = this.props;

        const autocompleteProps = {
            suggestions,
            onClick: yyActions.suggestionSelected,
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
                    onKeyDown={yyActions.clearSelectedSuggestion}
                    value={selectedSuggestion}
                />
                { suggestions && (
                    <AutocompleteDropdown {...autocompleteProps}/>
                )}
            </div>
        );
    }
}
