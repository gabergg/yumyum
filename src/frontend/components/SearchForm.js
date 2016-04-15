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

    componentDidMount() {

        const {
            yyActions,
        } = this.props;

        const input = "house of pancook";

        yyActions.fetchAutocompleteSuggestions({
            input,
        });
    }

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
                <input/>
                { suggestions && (
                    <AutocompleteDropdown {...autocompleteProps}/>
                )}
            </div>
        );
    }
}
