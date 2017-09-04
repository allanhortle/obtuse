import React from 'react';
import Example from './Example';
import ExampleComponent from './ExampleComponent';
import {Box, Button, Column, Grid, Message, Text} from 'obtuse';

export default () => {
    return <Box modifier="padding">
        <Text element="h1" modifier="sizeGiga marginGiga">Obtuse</Text>

        <ExampleComponent name="Box">
            <Example>
                <Box>Box</Box>
            </Example>
            <Text element="h3" modifier="sizeKilo marginKilo">marginTop</Text>
            {['Giga', 'Mega', 'Kilo', '', 'Milli'].map(ii => {
                return <Example key={ii} modifierName={`marginTop${ii}`}>
                    <Box modifier={`marginTop${ii}`}>marginTop{ii}</Box>
                </Example>;
            })}
            <Text element="h3" modifier="sizeKilo marginKilo">marginBottom</Text>
            {['Giga', 'Mega', 'Kilo', '', 'Milli'].map(ii => {
                return <Example key={ii} modifierName={`marginBottom${ii}`}>
                    <Box modifier={`marginBottom${ii}`}>marginBottom{ii}</Box>
                </Example>;
            })}
            <Text element="h3" modifier="sizeKilo marginKilo">marginRow</Text>
            {['Giga', 'Mega', 'Kilo', '', 'Milli'].map(ii => {
                return <Example key={ii} modifierName={`marginRow${ii}`}>
                    <Box modifier={`marginRow${ii}`}>marginRow{ii}</Box>
                </Example>;
            })}
            <Text element="h3" modifier="sizeKilo marginKilo">padding</Text>
            {['Kilo', ''].map(ii => {
                return <Example key={ii} modifierName={`padding${ii}`}>
                    <Box modifier={`padding${ii}`}>padding{ii}</Box>
                </Example>;
            })}
            <Text element="h3" modifier="sizeKilo marginKilo">other</Text>
            <Example modifierName="hairline">
                <Box modifier="hairline">hairline</Box>
            </Example>
            <Example modifierName="flood">
                <Box modifier="flood">flood</Box>
            </Example>
        </ExampleComponent>

        <ExampleComponent name="Button">
            <Example>
                <Button>Button</Button>
            </Example>
            <Example modifierName="primary">
                <Button modifier="primary">Button-primary</Button>
            </Example>
            <Example modifierName="clear">
                <Button modifier="clear">Button-clear</Button>
            </Example>
            <Example modifierName="inline">
                <Button modifier="inline">Button-inline</Button>
            </Example>
        </ExampleComponent>

        <ExampleComponent name="Grid and Column">
            <Example containerModifier="block">
                <Grid>
                    <Column modifier="exampleHighlight">Column 1</Column>
                    <Column modifier="exampleHighlight">Column 2</Column>
                </Grid>
            </Example>
            <Example containerModifier="block" modifierName="Widths with Column-<number>">
                <Grid>
                    <Column modifier="exampleHighlight 3">Column-3</Column>
                    <Column modifier="exampleHighlight 9">Column-9</Column>
                </Grid>
            </Example>
            <Example containerModifier="block" modifierName="Column-gutter">
                <Grid>
                    <Column modifier="exampleHighlight gutter">Column 1</Column>
                    <Column modifier="exampleHighlight gutter">Column 2</Column>
                </Grid>
            </Example>
            <Example containerModifier="block" modifierName="Column-always">
                <Grid>
                    <Column modifier="exampleHighlight always">Column 1</Column>
                    <Column modifier="exampleHighlight always">Column 2</Column>
                </Grid>
            </Example>
            <Example containerModifier="block" modifierName="Grid-auto with Column-shrink">
                <Grid modifier="auto">
                    <Column modifier="exampleHighlight">Column 1</Column>
                    <Column modifier="exampleHighlight shrink">Shrink</Column>
                </Grid>
            </Example>
            <Example containerModifier="block" modifierName="Column-push and Column-pull">
                <Grid>
                    <Column modifier="exampleHighlight 3 push9">Column 1</Column>
                    <Column modifier="exampleHighlight 9 pull3">Column 2</Column>
                </Grid>
            </Example>
        </ExampleComponent>

        <ExampleComponent name="Message">
            <Example containerModifier="block exampleHighlight">
                <Message>Message</Message>
            </Example>
            <Example containerModifier="block exampleHighlight" modifierName="type='fetch'">
                <Message type="fetch">Fetching</Message>
            </Example>
            <Example containerModifier="block exampleHighlight" modifierName="type='success'">
                <Message type="success">Success</Message>
            </Example>
            <Example containerModifier="block exampleHighlight" modifierName="type='error'">
                <Message type="error">Error</Message>
            </Example>
            <Example containerModifier="block exampleHighlight" modifierName="display='deadEnd' title='Title'">
                <Message display="deadEnd" title="Title">DeadEnd message</Message>
            </Example>
            <Example containerModifier="block exampleHighlight" modifierName="display='block'">
                <Message display="block">Block message</Message>
            </Example>
            <Example containerModifier="block exampleHighlight" modifierName="display='inline'">
                <Message display="inline">Block message</Message>
            </Example>
        </ExampleComponent>

        <ExampleComponent name="Text">
            {['Giga', 'Mega', 'Kilo', 'Hecto', 'Milli'].map(ii => {
                return <Example key={ii} modifierName={`size${ii} margin${ii}`}>
                    <Text element="p" modifier={`size${ii} margin${ii}`}>size{ii}</Text>
                </Example>;
            })}
            <Example modifierName="sizeGiga marginGiga">
                <Text element="p" modifier="margin">Normal</Text>
            </Example>
            <Example modifierName="sizeGiga marginGiga">
                <Text element="p" modifier="sizeMilli marginMilli">sizeMilli</Text>
            </Example>
            <Example modifierName="sizeGiga marginGiga">
                <Text element="p" modifier="muted">muted</Text>
            </Example>
            <Example modifierName="sizeGiga marginGiga">
                <Text element="p" modifier="emphasis">emphasis</Text>
            </Example>
            <Example modifierName="sizeGiga marginGiga">
                <Text element="p" modifier="strong">strong</Text>
            </Example>
        </ExampleComponent>
    </Box>
}
