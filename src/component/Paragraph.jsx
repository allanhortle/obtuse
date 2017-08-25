// @flow
import React from 'react';
import Text from './Text';

export default function Paragraph(props: Object): React.Element<any> {
    return <Text element="p" modifier="margin" {...props} />;
}
