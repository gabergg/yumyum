import {render} from 'react-dom';
import React from 'react';
import Simple from './components/Simple';
// import {Provider} from 'react-redux';

// import YYConnector from './redux/YYConnector';
// import {fetchInitialData} from './YYApi';

render(
    <Simple/>, document.getElementById('root')
);

// function renderYumYum(data) {

    // const YYStore = createStore(YYReducers);

    // YYStore.dispatch({
    //     type: 'INITIAL_PAGE_LOAD',
    //     payload: data,
    // });

    // const ui = (
    //     <Provider store={YYStore}>
    //         <div style={{
    //             display: 'flex',
    //             height: '100%',
    //         }}>
    //             <YYConnector hotelSearchId={res.search.search_token} />
    //         </div>
    //     </Provider>
    // );



//     render(ui, document.getElementById('root'));

// }

// fetchInitialData().then(renderYumYum);

// renderYumYum();
