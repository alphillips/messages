import React from 'react'
import {render} from 'react-dom'

import './uikit.css'
import './base.css'

import Messages from '../../src'



let Demo = React.createClass({
  render() {
    return <div className="uikit-body">
      <Messages success="test" info="rwar" warning="asd" error="werwer"/>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
