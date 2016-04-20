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
        flexDirection: "row",
        width: "100%",
    },
    authorButton: {
        cursor: "pointer",
        border: "1px solid black",
        width: "60px",
        height: "30px",
    },
    selectedAuthorButton: {
        cursor: "pointer",
        border: "3px solid red",
        width: "60px",
        height: "30px",
    },
    description: {
        boxSizing: "border-box",
        width: "100%",
    },
};

class RatingForm extends Component {

    static propTypes = {
        authors: PropTypes.array.isRequired,
        spot: PropTypes.object.isRequired,
    };

    updateRatingAuthor(e) {
        const {yyActions} = this.props;
        yyActions.updateRatingAuthor({
            author: e.target.innerText,
        });
    }

    updateRatingScore(e) {
        const {yyActions} = this.props;
        const score = parseFloat(e.target.value);
        yyActions.updateRatingBar({
            score,
        });
        yyActions.updateRatingScore({
            score,
        });
    }

    updateRatingDescription(e) {
        const {yyActions} = this.props;
        yyActions.updateRatingDescription({
            description: e.target.value,
        });
    }

    submitRatingForm() {
        const {
            rating,
            spot,
            yyActions,
        } = this.props;
        yyActions.submitRatingForm({
            spot,
            rating,
        });
    }

    render() {
        const {
            authors,
            spot,
            ratingBar,
            rating,
        } = this.props;

        console.log(this.props.rating);

        return (
            <div style={Styles.form}>
                <div style={Styles.formSection}>
                    <span> {spot.name} </span>
                </div>
                <div style={Styles.authors}>
                    {authors && authors.map((author, i) => (
                        <div
                            key={i}
                            style={author === rating.author ?
                                Styles.selectedAuthorButton : Styles.authorButton
                            }
                            onClick={this.updateRatingAuthor.bind(this)}
                            >
                            {author}
                        </div>
                    ))}
                </div>
                <div style={Styles.formSection}>
                    <input
                        type="range"
                        min="0"
                        max="5"
                        step=".25"
                        value={rating.score}
                        onChange={this.updateRatingScore.bind(this)}
                    />
                    <label> {ratingBar} </label>
                </div>
                <div style={Styles.formSection}>
                    <textarea
                        style={Styles.description}
                        onChange={this.updateRatingDescription.bind(this)}
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
