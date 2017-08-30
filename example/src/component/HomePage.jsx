import React from 'react';
import Example from './Example';
import ExampleComponent from './ExampleComponent';
import {Box, Button, Text} from 'obtuse';

export default () => {
    return <Box modifier="padding">
        <Text element="h1" modifier="sizeGiga marginGiga">Obtuse</Text>

        <ExampleComponent name="Button">
            <Example>
                <Button>Button</Button>
            </Example>
            <Example modifier="primary">
                <Button modifier="primary">Button-primary</Button>
            </Example>
            <Example modifier="clear">
                <Button modifier="clear">Button-clear</Button>
            </Example>
            <Example modifier="inline">
                <Button modifier="inline">Button-inline</Button>
            </Example>
        </ExampleComponent>

        <ExampleComponent name="Text">
            <Example modifier="sizeGiga marginGiga">
                <Text element="p" modifier="sizeGiga marginGiga">sizeGiga</Text>
            </Example>
            <Example modifier="sizeGiga marginGiga">
                <Text element="p" modifier="sizeMega marginMega">sizeMega</Text>
            </Example>
            <Example modifier="sizeGiga marginGiga">
                <Text element="p" modifier="sizeKilo marginKilo">sizeKilo</Text>
            </Example>
            <Example modifier="sizeGiga marginGiga">
                <Text element="p" modifier="sizeHecto marginHecto">sizeHecto</Text>
            </Example>
            <Example modifier="sizeGiga marginGiga">
                <Text element="p" modifier="margin">Normal</Text>
            </Example>
            <Example modifier="sizeGiga marginGiga">
                <Text element="p" modifier="sizeMilli marginMilli">sizeMilli</Text>
            </Example>
            <Example modifier="sizeGiga marginGiga">
                <Text element="p" modifier="muted">muted</Text>
            </Example>
            <Example modifier="sizeGiga marginGiga">
                <Text element="p" modifier="emphasis">emphasis</Text>
            </Example>
            <Example modifier="sizeGiga marginGiga">
                <Text element="p" modifier="strong">strong</Text>
            </Example>
        </ExampleComponent>
    </Box>
}
