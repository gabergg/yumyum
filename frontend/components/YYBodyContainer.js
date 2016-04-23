import React, {Component, PropTypes} from 'react';

import RatingForm from './RatingForm';
import SearchForm from './SearchForm';

const Styles = {
    bodyContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '350px',
        height: '600px',
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'center',
        // border: '1px solid black',
    },
};

class YYBodyContainer extends Component {

    static propTypes = {
        authors: PropTypes.array.isRequired,
        spot: PropTypes.object
    };

    render() {
        return (
            <div style={Styles.bodyContainer}>
                <SearchForm {...this.props}/>
                {
                    this.props.spot && (
                        <RatingForm {...this.props}/>
                    )
                }
            </div>
        );
    }
}

export default YYBodyContainer;
