import React from 'react'
import observer from 'node-observer'
import './messages.css'

class Messages extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      info:null,
      warning:null,
      success:null,
      error:null
    }
    this.apiHook = (props.apiHook === false) ? false : true
  }

  componentDidMount() {
    this.setState((prevState, props) => ({
      info:this.props.info,
      warning:this.props.warning,
      success:this.props.success,
      error:this.props.error
    }))

    if(this.apiHook){
      observer.subscribe('error-listener', "error", function(who, data) {
        this.setState((prevState, props) => ({
          error:data
        }))
      }.bind(this))
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState((prevState, props) => ({
      info:nextProps.info,
      warning:nextProps.warning,
      success:nextProps.success,
      error:nextProps.error
    }))
  }

  componentWillUnmount = () => {
    observer.unsubscribe('error-listener', "error")
  }
  
  render() {
    return (
      <div className="message-container">
        {this.state.info &&
          <div className="uikit-page-alerts" role="alert">
            <div dangerouslySetInnerHTML={{__html: (this.state.info)}}></div>
          </div>
        }

        {this.state.warning &&
          <div className="uikit-page-alerts uikit-page-alerts--warning" role="alert">
            <div dangerouslySetInnerHTML={{__html: (this.state.warning)}}></div>
          </div>
        }

        {this.state.success &&
          <div className="uikit-page-alerts uikit-page-alerts--success" role="alert">
            <div dangerouslySetInnerHTML={{__html: (this.state.success)}}></div>
          </div>
        }

        {this.state.error &&
          <div className="uikit-page-alerts uikit-page-alerts--error" role="alert">
           <div dangerouslySetInnerHTML={{__html: (this.state.error)}}></div>
          </div>
        }
      </div>
    )
  }
}

export default Messages
