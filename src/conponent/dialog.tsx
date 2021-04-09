import * as React from 'react';
export interface DialogProps {
    body: any
}

const Dialog: React.SFC<DialogProps> = (prop) => {
    return (
        <div>这是dialog模板{prop.body}</div>
    );
}

export default Dialog;