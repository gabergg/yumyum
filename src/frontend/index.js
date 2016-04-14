import {render} from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import YYConnector from './redux/YYConnector';
import YYReducer from './redux/YYReducer';
import {fetchInitialData} from './YYApi';


function renderYumYum(data) {

    console.log(data);

    const YYStore = createStore(YYReducer);

    YYStore.dispatch({
        type: 'INITIAL_PAGE_LOAD',
        payload: data,
    });

    const ui = (
        <Provider store={YYStore}>
            <div style={{
                display: 'flex',
                height: '100%',
            }}>
                <YYConnector/>
            </div>
        </Provider>
    );

    render(ui, document.getElementById('root'));

}

// renderYumYum({});

fetchInitialData().then(renderYumYum);

// renderYumYum();
