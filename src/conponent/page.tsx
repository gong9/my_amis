import * as React from 'react';
export interface PageProps {
    body: any
}

const Page: React.SFC<PageProps> = (prop) => {
    return (
        <div>page模板组件{prop.body}</div>
    );
}

export default Page;