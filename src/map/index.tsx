
import * as React from 'react';
import page from '../conponent/page'
import dialog from '../conponent/dialog'
import { SchemaType } from '../my_amis';
const map = {
    page,
    dialog
}

//简单代理
const proxyTemplateHocProps = (Template: any, schema: SchemaType) => {
    let { type, body } = schema

    return (
        <Template
            body={body}
        />
    )
}

const findTemplate = (path: string, schema: SchemaType) => {
    if (path in map) {
        // @ts-ignore
        return proxyTemplateHocProps(map[path] as React.Component, schema)
    }
    alert('无此渲染器')
}
export { findTemplate }