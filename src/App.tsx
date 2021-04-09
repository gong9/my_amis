import * as React from 'react';
import { render as amisRender, SchemaType } from './my_amis/index'


const schema: SchemaType = {
  type: 'dialog',
  body: '这个是简单的amis'
}


const jsx = amisRender(schema)
const App = () => {
  return jsx
}

export default App;