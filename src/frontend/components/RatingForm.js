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
        authors: PropTypes.array.required
    };

    render() {
        console.log(this.props);
        return (
            <div style={Styles.form}>
                <select>
                    {this.props.authors && this.props.authors.map((author, i) => (
                        <option key={i}>
                            {author}
                        </option>
                    ))}
                </select>
                <input/> //rating
                <input/> //description
                <button/> //submit
            </div>
        );
    }
}

export default RatingForm;
