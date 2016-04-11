import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import yyActionCreators from './yyActionCreators';
import YumYum from '../components/YumYum';


function mapStateToProps(storeState, props) {

    // do whatever manipulation
    return storeState
}

function mapDispatchToProps(dispatch) {
    return {
        yyActions: bindActionCreators(yyActionCreators, dispatch),
    };
}

const YYConnector = connect(
    mapStateToProps,
    mapDispatchToProps,
)(YumYum);

export default YYConnector;
