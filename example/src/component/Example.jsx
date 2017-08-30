import React from 'react';
import {Box, Column, Grid} from 'goose-css';

export default function Example({children, modifier = 'no modifiers'}) {
    return <Box modifier="marginBottom">
        <Grid>
            <Column modifier="3 gutter">
                {modifier}
            </Column>
            <Column modifier="gutter">
                <Box spruceName="Example_container">
                    {children}
                </Box>
            </Column>
        </Grid>
    </Box>;
}
