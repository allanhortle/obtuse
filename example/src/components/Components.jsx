import React from 'react';
import {Link} from 'react-router';
import loremIpsum from 'lorem-ipsum';

import * as Components from '../../../lib/index';

const Wrapper = Components.Wrapper;
const Box = Components.Box;

export default (props) => {
    const components = Object
        .keys(Components)
        .map(cc => {
            const Comp = Components[cc];
            return <Box key={cc}>
                <h2>{cc}</h2>
                <Comp>{loremIpsum()}</Comp>
            </Box>;
        })

    return <Wrapper>
        <h1>Obtuse</h1>
        {components}
    </Wrapper>
}
