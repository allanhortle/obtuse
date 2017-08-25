//@flow

import goose from 'goose-css';
import {default as Code} from './component/Code';
import {default as DeadEnd} from './component/DeadEnd';
import {default as Paragraph} from './component/Paragraph';
import {default as Text} from './component/Text';

module.exports = {
    ...goose,
    Code,
    DeadEnd,
    Paragraph,
    Text
};
