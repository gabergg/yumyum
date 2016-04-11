function actionCreator1({input1}) {
    return {
        type: 'YY_ACTION',
        payload: {
            input1,
        },
    };
}

yyActionCreators = {
    actionCreator1,
}

export default yyActionCreators;
