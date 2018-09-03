// @flow
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Label from 'stampy/lib/component/Label';

import Text from '../component/Text';

import goose from 'goose-css';
const {Box} = goose;

class FieldRow extends PureComponent {
    render(): React.Element<any> {
        const {
            field: {
                value,
                onChange,
                errorValue
            },
            label,
            children
        } = this.props;

        const childrenWithProps: React.Element<any> = React.Children
            .map(children, kid => React.cloneElement(kid, {value, onChange}));

        return <Box>
            {label && <Label>{label}</Label>}
            {childrenWithProps}
            {errorValue && <Text modifier="failure">{errorValue}</Text>}
        </Box>;
    }
}

FieldRow.propTypes = {
    field: PropTypes.shape({
        value: PropTypes.any,
        onChange: PropTypes.func,
        errorValue: PropTypes.string
    }).isRequired,
    label: PropTypes.string
};

export default FieldRow;
