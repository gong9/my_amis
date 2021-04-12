import * as React from 'react';
import { render as amisRender, SchemaType } from './my_amis/index'


const schema: SchemaType = {
  type: 'page',
  body: '这个是简单的amis'
}

// const schema02: SchemaType = {
//   type: 'dialog',
//   body: {
//     type: 'action',
//     label: '按钮',
//     actiontype: 'log'
//   }
// }

const jsx = amisRender(schema)
const App = () => {
  return jsx
}

export default App;