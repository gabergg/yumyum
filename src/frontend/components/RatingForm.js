import React, {Component, PropTypes} from 'react';
import {map} from 'lodash/collection';

//let's use flex-box
const Styles = {
    form: {
        width: '150px',
        height: '500px',
        backgroundColor: 'yellow',
    },
}

class RatingForm extends Component {

    static propTypes = {
        authors: PropTypes.array.isRequired
    };

    render() {
        const {
            authors,
        } = this.props;

        return (
            <div style={Styles.form}>
                <label> Author </label>
                <select>
                    {authors && authors.map((author, i) => (
                        <option key={i}>
                            {author}
                        </option>
                    ))}
                </select>
                <label> Rating </label>
                <input/>
                <label> Description </label>
                <textarea/>
                <button> Submit </button>
            </div>
        );
    }
}

export default RatingForm;
