import React from 'react';
import {Box, Text} from 'goose-css';

export default function ExampleComponent({children, name}) {
    const childrenWithProps = React.Children.map(children, (child) => React.cloneElement(child, {name}));
    return <Box modifier="marginBottom">
        <Text element="h2" modifier="sizeMega marginMega">{name}</Text>
        <Box>
            {childrenWithProps}
        </Box>
    </Box>;
}
