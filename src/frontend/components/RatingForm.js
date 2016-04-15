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
        authors: PropTypes.array.isRequired,
        spot: PropTypes.string.isRequired,
    };

    render() {
        const {
            authors,
            spot,
            ratingBar,
            yyActions,
        } = this.props;

        return (
            <div style={Styles.form}>
                <h1> {spot} </h1>
                <label> Author </label>
                <select>
                    {authors && authors.map((author, i) => (
                        <option key={i}>
                            {author}
                        </option>
                    ))}
                </select>
                <label> Rating {ratingBar} </label>
                <input
                    type="range"
                    min="0"
                    max="5"
                    step=".25"
                    onChange={(e) =>
                        yyActions.updateRatingBar({
                            rating: e.target.value,
                        })
                    }
                />
                <label> Description </label>
                <textarea/>
                <button> Submit </button>
            </div>
        );
    }
}

export default RatingForm;
