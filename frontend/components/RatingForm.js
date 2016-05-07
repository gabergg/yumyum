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
        backgroundColor: "white",
        paddingBottom: "20px",
    },
    formSection: {
        ...Style.flex1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "94%",
        margin: "0 3%",
        fontSize: "20px",
        position: "relative",
    },
    ratingLabel: {
        position: "absolute",
        width: "50px",
        border: "1px solid black",
        top: "-35px",
    },
    ratingLegend: {
        display: "flex",
        justifyContent: "space-between",
    },
    authors: {
        ...Style.flex1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    authorButton: {
        cursor: "pointer",
        border: "1px solid black",
        width: "180px",
        height: "40px",
    },
    description: {
        width: "100%",
        height: "100px",
    },
    submitButton: {
        width: "180px",
        height: "50px",
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
            backgroundColor: "black",
            color: "white",
        };

        const descriptionStyle = {
            ...Styles.formSection,
            ...Style.flex2,
            marginBottom: "10px",
        };

        const labelStyle = {
            ...Styles.ratingLabel,
            left: `${100*ratingBar/5}%`,
        };

        const ratingSectionStyle = {
            ...Styles.formSection,
            marginBottom: "40px",
        };

        const authorSectionStyle = {
            ...Styles.formSection,
            marginBottom: "60px",
        };

        const submitSectionStyle = {
            ...Styles.formSection,
            flexDirection: "row",
        };

        return (
            <div style={Styles.form}>
                <div style={Styles.formSection}>
                    <span> {spot.name} </span>
                </div>
                <div style={authorSectionStyle}>
                    <div style={Styles.authors}>
                        {authors && authors.map((author, i) => (
                            <div key={i}>
                                <div
                                    style={author === rating.author ?
                                        selectedAuthorStyle : Styles.authorButton
                                    }
                                    onClick={this.updateRatingAuthor.bind(this)}
                                    >
                                    {author}
                                </div>
                                <div>
                                    {
                                        (this.props.ratings && this.props.ratings[author]) && (
                                            <span key={author}> {this.props.ratings[author].score} </span>
                                        )
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={ratingSectionStyle}>
                    <label style={labelStyle}> {ratingBar} </label>
                    <input
                        name="rating"
                        type="range"
                        min="0"
                        max="5"
                        step=".25"
                        value={rating.score}
                        onChange={this.updateRatingScore.bind(this)}
                        style={{width: "100%"}}
                    />
                    <div style={Styles.ratingLegend}>
                        <div>
                            <div>0</div>
                            <div>Blehg</div>
                        </div>
                        <div>
                            <div>5</div>
                            <div>Mind blowing</div>
                        </div>
                    </div>
                </div>
                <div style={descriptionStyle}>
                    <textarea
                        style={Styles.description}
                        onChange={this.updateRatingDescription.bind(this)}
                    />
                </div>
                <div style={submitSectionStyle}>
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
