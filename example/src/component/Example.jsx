import React from 'react';
import {Box, Column, Grid} from 'goose-css';

export default function Example({children, containerModifier = 'exampleHighlight', modifierName = 'no modifiers'}) {
    return <Box modifier={`marginBottom`}>
        <Grid>
            <Column modifier="3 gutter">
                {modifierName}
            </Column>
            <Column modifier="gutter">
                <Box spruceName="Example_container" modifier={containerModifier}>
                    {children}
                </Box>
            </Column>
        </Grid>
    </Box>;
}
