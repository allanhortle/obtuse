// @flow
import React from 'react';
import Text from './Text';

export default function Code(props: Object): React.Element<any> {
    return <Text element="code" modifier="code" {...props} />;
}
