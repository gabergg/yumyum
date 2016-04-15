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

        const {
            suggestions,
            yyActions,
        } = this.props;

        const autocompleteProps = {
            suggestions,
            onClick: yyActions.suggestionSelected,
        };

        return (
            <div style={Styles.form}>
                <label> What restaurant? </label>
                <input onKeyUp={(e) =>
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
