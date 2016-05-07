import React, {Component, PropTypes} from 'react';

import RatingForm from './RatingForm';
import SearchForm from './SearchForm';

const Styles = {
    header: {
        textAlign: 'center',
        color: 'white',
    },
    bodyContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '420px',
        height: '555px',
        color: 'black',
        textAlign: 'center',
    },
};

class YYBodyContainer extends Component {

    static propTypes = {
        authors: PropTypes.array.isRequired,
        spot: PropTypes.object
    };

    render() {
        return (
            <div>
                <div style={Styles.header}>
                    <h1> YUMYUM </h1>
                </div>
                <div style={Styles.bodyContainer}>
                    <SearchForm {...this.props}/>
                    {
                        this.props.spot && (
                            <RatingForm {...this.props}/>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default YYBodyContainer;
