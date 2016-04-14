import React, {Component, PropTypes} from 'react';

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
        authors: PropTypes.array.required
    }

    render() {
        return (
            <div style={Styles.form}>
                <input/> //author
                <input/> //rating
                <input/> //description
                <button/> //submit
            </div>
        );
    }
}

export default RatingForm;
