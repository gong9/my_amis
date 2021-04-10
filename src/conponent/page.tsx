import * as React from 'react';
export interface PageProps {
    body: any
}

const Page: React.SFC<PageProps> = (prop) => {
    console.log(prop.children);

    return (
        <div>
            {prop.children ? prop.children : 'F'}
            page模板组件{prop.body}
        </div>
    );
}

export default Page;