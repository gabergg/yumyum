import React, {Component, PropTypes} from 'react';
import {map} from 'lodash/collection';
import {Style} from '../utils';

const Styles = {
    form: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        marginTop: "-250px",
    },
    formSection: {
        ...Style.flex1,
        display: "flex",
        justifyContent: "center",
        margin: "10px 0",
        fontSize: "20px",
    },
    authors: {
        ...Style.flex1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    authorButton: {
        cursor: "pointer",
        border: "1px solid black",
        width: "60px",
        height: "30px",
    },
    description: {
        boxSizing: "border-box",
        width: "100%",
        height: "100px",
    },
    submitButton: {
        width: "180px",
        height: "67px",
        fontSize: "20px",
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

        const selectedAuthorStyle = {
            ...Styles.authorButton,
            border: "3px solid red",
        };

        const descriptionStyle = {
            ...Styles.formSection,
            ...Style.flex2,
        };

        return (
            <div style={Styles.form}>
                <div style={Styles.formSection}>
                    <span> {spot.name} </span>
                </div>
                <div style={Styles.formSection}>
                    <div style={Styles.authors}>
                        {authors && authors.map((author, i) => (
                            <div
                                key={i}
                                style={author === rating.author ?
                                    selectedAuthorStyle : Styles.authorButton
                                }
                                onClick={this.updateRatingAuthor.bind(this)}
                                >
                                {author}
                            </div>
                        ))}
                    </div>
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
                <div style={descriptionStyle}>
                    <textarea
                        style={Styles.description}
                        onChange={this.updateRatingDescription.bind(this)}
                    />
                </div>
                <div style={Styles.formSection}>
                    <button
                        style={Styles.submitButton}
                        onClick={this.submitRatingForm.bind(this)}
                    > Submit </button>
                </div>
            </div>
        );
    }
}

export default RatingForm;
