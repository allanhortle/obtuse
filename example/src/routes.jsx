import React from 'react';
import {Route, IndexRoute} from 'react-router';

import AppHandler from 'components/AppHandler';
import ErrorHandler from 'components/ErrorHandler';
import ContentsPage from 'components/ContentsPage';
import Components from 'components/Components';

const routes = <Route component={AppHandler} path="/">
    <IndexRoute component={Components} />
    <Route path="*" component={ErrorHandler}/>
</Route>;

export default routes;
