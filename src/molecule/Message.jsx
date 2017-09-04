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
        display,
        modifier,
        peer,
        spruceName = 'Message',
        style,
        title,
        type
    } = props;

    var colorModifier = '';
    modifier = `${modifier || ''} ${display}`;

    if(type === "fetch") {
        colorModifier = "muted";
        modifier = `${modifier} fetch`;
    }

    if(type === "error") {
        colorModifier = "failure";
        modifier = `${modifier} failure`;
    }

    if(type === "success") {
        colorModifier = "success";
        modifier = `${modifier} success`;
    }

    if(display === "inline") {
        return <span className={SpruceClassName({name: spruceName, modifier, className, peer})} style={style}>
            {children && <Text element="span" modifier={colorModifier}>{children}</Text>}
        </span>;
    }

    if(display === "block") {
        return <div className={SpruceClassName({name: spruceName, modifier, className, peer})} style={style}>
            {children && <Text element="span" modifier={colorModifier}>{children}</Text>}
        </div>;
    }

    if(display === "deadEnd") {
        return <div className={SpruceClassName({name: spruceName, modifier, className, peer})} style={style}>
            {title && <Text modifier="sizeGiga" element="div">{title}</Text>}
            {children && <Text element="div" className={`${spruceName}_message`}>{children}</Text>}
            {code && <Text modifier="monospace muted" element="div">{code}</Text>}
        </div>;
    }

    throw new Error(`"${display}"" is not a valid option for "display" on <Message />`);
}

Message.propTypes = {
    className: PropTypes.string,
    code: PropTypes.string,
    display: PropTypes.oneOf([
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
    type: PropTypes.oneOf([
        "error",
        "fetch",
        "success"
    ])
};

Message.defaultProps = {
    display: "deadEnd",
    migrate: false,
    type: ""
};
