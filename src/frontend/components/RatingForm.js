import {Component, PropTypes} from React;

//let's use flex-box
Styles = {
    form: {
        width: '150px',
        height: '500px',
        backgroundColor: 'yellow',
    },
}

module.exports = class RatingForm extends Component {

    static propTypes = {
        authors: PropTypes.array.required
    }

    render() {
        return (
            <div style={Styles.form>
                <input/> //author
                <input/> //rating
                <input/> //description
                <button/> //submit
            </div>
        );
    }
}
