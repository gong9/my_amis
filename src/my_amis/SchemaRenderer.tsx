import * as React from 'react';
import { SchemaType } from './index';
import { findTemplate } from '../map/index'
export interface SchemaRendererProps {
    schema?: SchemaType
}

export interface SchemaRendererState {
    Component: any
}

const resolveRenderer = (path: string,
    schema?: SchemaType) => {
    let name;
    if (schema) {
        name = schema.type
    }

    return {
        Renderer: findTemplate(path, schema as SchemaType),
        name: name
    }
}

class SchemaRenderer extends React.Component<SchemaRendererProps, SchemaRendererState> {
    constructor(props: SchemaRendererProps) {
        super(props)
        this.state = {
            Component: resolveRenderer(this.getRendererPath(this.props.schema) as string, this.props.schema)
        }
    }

    getRendererPath(schema: SchemaType | undefined) {
        if (schema) {
            return String(schema.type)
        }
    }

    render() {
        let { Renderer } = this.state.Component;
        return (
            <div>
                {Renderer}
            </div>
        )
    }
}

export default SchemaRenderer;
