import React from 'react'
import {render} from 'react-dom'

import './uikit.css'
import './base.css'

import Messages from '../../src'



let Demo = React.createClass({
  render() {

    const jsx = <div><h3>There are three correspondences fo you to action.</h3><p><a href="#" className="uikit-direction-link">View correspondences</a></p></div>

    return <div className="uikit-body">
      <Messages success="success" info="info" warning="warning" error="error"/>
      <Messages info={jsx} />
      <Messages success={'Success. <a href="#">Click here</a>'} />
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
