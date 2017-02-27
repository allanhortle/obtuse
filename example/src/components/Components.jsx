import React from 'react';
import {Link} from 'react-router';
import loremIpsum from 'lorem-ipsum';
import spruce from '../../spruce.json';

import * as Components from '../../../lib/index';

const Wrapper = Components.Wrapper;
const Box = Components.Box;

export default (props) => {
    const components = Object
        .keys(Components)
        .map(cc => {
            const Comp = Components[cc];
            console.log(spruce[cc]);
            return <Box key={cc}>
                <h2>{cc}</h2>
                <Comp>{loremIpsum()}</Comp>

                {spruce[cc] && spruce[cc].modifiers.map(mm => {
                    return <div className="marginTop2">
                        <h3>{cc}-{mm}</h3>
                        <Comp modifier={mm} key={mm}>{loremIpsum()}</Comp>
                    </div>
                })}
            </Box>;
        })

    return <Wrapper>
        <h1>Obtuse</h1>
        {components}
    </Wrapper>
}
