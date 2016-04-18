import React, {Component, PropTypes} from 'react';
import {map} from 'lodash/collection';
import {debounce} from 'lodash/function';

const Styles = {
    form: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    formSection: {
        height: "40px",
        flex: 1,
        textAlign: "center",
    },
    authors: {
        width: "100%",
    },
    description: {
        boxSizing: "border-box",
        width: "100%",
    },
};

class RatingForm extends Component {

    static propTypes = {
        authors: PropTypes.array.isRequired,
        spot: PropTypes.string.isRequired,
    };

    updateFormAuthor(e) {
        const {yyActions} = this.props;
        yyActions.updateFormAuthor({
            author: e.target.value,
        });
    }

    updateRatingValue(e) {
        const {yyActions} = this.props;
        const ratingValue = parseFloat(e.target.value);
        yyActions.updateRatingBar({
            rating: ratingValue,
        });
        yyActions.updateFormRating({
            rating: ratingValue,
        });
    }

    updateFormDescription(e) {
        const {yyActions} = this.props;
        yyActions.updateFormDescription({
            description: e.target.value,
        });
    }

    submitRatingForm() {
        const {
            form,
            yyActions,
        } = this.props;
        yyActions.submitRatingForm({
            form: form,
        });
    }

    render() {
        const {
            authors,
            spot,
            ratingBar,
        } = this.props;

        return (
            <div style={Styles.form}>
                <div style={Styles.formSection}>
                    <span> {spot} </span>
                </div>
                <div style={Styles.formSection}>
                    <select
                        style={Styles.authors}
                        onChange={this.updateFormAuthor.bind(this)}
                    >
                        {authors && authors.map((author, i) => (
                            <option key={i}>
                                {author}
                            </option>
                        ))}
                    </select>
                </div>
                <div style={Styles.formSection}>
                    <input
                        type="range"
                        min="0"
                        max="5"
                        step=".25"
                        onChange={this.updateRatingValue.bind(this)}
                    />
                    <label> {ratingBar} </label>
                </div>
                <div style={Styles.formSection}>
                    <textarea
                        style={Styles.description}
                        onChange={this.updateFormDescription.bind(this)}
                    />
                </div>
                <div style={Styles.formSection}>
                    <button
                        style={Styles.authors}
                        onClick={this.submitRatingForm.bind(this)}
                    > Submit </button>
                </div>
            </div>
        );
    }
}

export default RatingForm;
