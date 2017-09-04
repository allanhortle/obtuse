// @flow
import React from 'react';
import PropTypes from 'prop-types';
import SpruceClassName from 'stampy/lib/util/SpruceClassName';
import Text from '../component/Text';

export default function Message(props: Object): React.Element<any> {
    var {
        children,
        className,
        code,
        appearance,
        modifier,
        peer,
        spruceName = 'Message',
        style,
        title,
        state
    } = props;

    var colorModifier = '';
    modifier = `${modifier || ''} ${appearance}`;

    if(state === "fetch") {
        colorModifier = "muted";
        modifier = `${modifier} fetch`;
    }

    if(state === "error") {
        colorModifier = "failure";
        modifier = `${modifier} failure`;
    }

    if(state === "success") {
        colorModifier = "success";
        modifier = `${modifier} success`;
    }

    if(appearance === "inline") {
        return <span className={SpruceClassName({name: spruceName, modifier, className, peer})} style={style}>
            {children && <Text element="span" modifier={colorModifier}>{children}</Text>}
        </span>;
    }

    if(appearance === "block") {
        return <div className={SpruceClassName({name: spruceName, modifier, className, peer})} style={style}>
            {children && <Text element="span" modifier={colorModifier}>{children}</Text>}
        </div>;
    }

    if(appearance === "deadEnd") {
        return <div className={SpruceClassName({name: spruceName, modifier, className, peer})} style={style}>
            {title && <Text modifier="sizeGiga" element="div">{title}</Text>}
            {children && <Text element="div" className={`${spruceName}_message`}>{children}</Text>}
            {code && <Text modifier="monospace muted" element="div">{code}</Text>}
        </div>;
    }

    throw new Error(`"${appearance}"" is not a valid option for "appearance" on <Message />`);
}

Message.propTypes = {
    className: PropTypes.string,
    code: PropTypes.string,
    appearance: PropTypes.oneOf([
        "block",
        "deadEnd",
        "inline"
    ]),
    migrate: PropTypes.bool,
    modifier: PropTypes.string,
    peer: PropTypes.string,
    spruceName: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
    state: PropTypes.oneOf([
        "error",
        "fetch",
        "success"
    ])
};

Message.defaultProps = {
    appearance: "deadEnd",
    migrate: false,
    state: ""
};
