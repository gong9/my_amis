import * as React from 'react'
import SchemaRenderer from './SchemaRenderer'
export interface SchemaType {
    type?: string,
    body?: any
}

const render = (schema: SchemaType): JSX.Element => {

    return (
        <SchemaRenderer
            schema={schema}
        />
    )
}
export { render }