// @flow
import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import moment from 'moment';
import SpruceClassName from 'stampy/lib/util/SpruceClassName';

export default function Text(props: Object): React.Element<any> {
    const {
        className,
        dateFormat,
        modifier,
        numberFormat,
        onClick,
        peer,
        spruceName = 'Text',
        style,
        title,
        element: Element = 'span'
    } = props;

    var children = props.children;

    if(numberFormat) {
        children = numeral(children).format(numberFormat);
    }

    if(dateFormat) {
        children = moment(new Date(children)).format(dateFormat);
    }

    return <Element
        className={SpruceClassName({name: spruceName, modifier, className, peer})}
        style={style}
        onClick={onClick}
        title={title}
        children={children}
    />;
}

Text.propTypes = {
    /** {ClassName} */
    className: PropTypes.string,

    /** {ReactElement} */
    element: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.func
    ]),

    /** {SpruceModifier} */
    modifier: PropTypes.string,

    /** Numeral format string. Will cause children to be passed through numeral.format */
    numberFormat: PropTypes.string,

    /** Moment format string. Will cause children to be cast to a Date and passed through moment.format */
    dateFormat: PropTypes.string,

    title: PropTypes.string,

    /** {OnClick} */
    onClick: PropTypes.func,

    /** {SpruceName} */
    spruceName: PropTypes.string,

    /** {Peer} */
    peer: PropTypes.string,

    /** {Style} */
    style: PropTypes.object
};
