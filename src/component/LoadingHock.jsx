// @flow
import React from 'react';
import DeadEnd from './DeadEnd';
import Loader from './Loader';

export function applyLoaderAndError(requestState: Object): Object {
    return requestState
        .fetchingMap(() => <Loader modifier="spinner"/>)
        .errorMap((err: Object): React.Element<any> => {
            const firstError = [].concat(err)[0];
            const code = firstError && firstError.code;
            const message = firstError && firstError.message;
            return <DeadEnd
                title="Error"
                code={code || '?'}
                children={message || 'Something broke unexpectedly. Please refresh to try again.'}
            />;
        });
}

export default function LoadingHock(): Function {
    return (ComposedComponent: *): * => {
        return class LoadingHock extends React.Component {
            constructor(props: Object) {
                super(props);
            }
            render(): React.Element<any> {
                return applyLoaderAndError(this.props.requestState)
                    .map(data => <ComposedComponent {...this.props} {...data}/>)
                    .toFetching()
                    .orValue(null);
            }
        };
    };
}

