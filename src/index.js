//@flow

import goose from 'goose-css';
import {default as Text} from './component/Text';
import {default as DeadEnd} from './component/DeadEnd';

module.exports = {
    ...goose,
    DeadEnd,
    Text
};
