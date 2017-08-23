// @flow
import React from 'react';
import SpruceClassName from 'stampy/lib/util/SpruceClassName';
import Text from './Text';

export default function DeadEnd(props: Object): React.Element<any> {
    const {
        children,
        className,
        code,
        modifier,
        peer,
        spruceName,
        style,
        title
    } = props;
    return <div className={SpruceClassName({name: spruceName, modifier, className, peer})} style={style}>
        {title && <Text modifier="alpha" element="div" className={`${spruceName}_title`}>{title}</Text>}
        {children && <Text element="div" className={`${spruceName}_message`}>{children}</Text>}
        {code && <Text modifier="monospace muted" element="div" className={`${spruceName}_code`}>{code}</Text>}
    </div>;
}

DeadEnd.propTypes = {
    className: React.PropTypes.string,
    code: React.PropTypes.string,
    modifier: React.PropTypes.string,
    peer: React.PropTypes.string,
    spruceName: React.PropTypes.string,
    style: React.PropTypes.object,
    title: React.PropTypes.string
};

DeadEnd.defaultProps = {
    spruceName: 'DeadEnd'
};
