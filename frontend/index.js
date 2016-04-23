import {render} from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import YYConnector from './redux/YYConnector';
import YYReducer from './redux/YYReducer';
import {yyActions} from './redux/yyActions';
import {fetchInitialData} from './YYApi';


function renderYumYum(data) {

    const YYStore = applyMiddleware(thunk)(createStore)(YYReducer);

    YYStore.dispatch({
        type: yyActions.INITIAL_PAGE_LOAD,
        payload: data,
    });

    const ui = (
        <Provider store={YYStore}>
            <YYConnector/>
        </Provider>
    );

    render(ui, document.getElementById('root'));

}

fetchInitialData().then(renderYumYum);
