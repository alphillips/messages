import React from 'react'

import './messages.css'

class Messages extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="message-container">
        {this.props.info &&
          <div className="uikit-page-alerts" role="alert">
            {this.props.info}
          </div>
        }

        {this.props.warning &&
          <div className="uikit-page-alerts uikit-page-alerts--warning" role="alert">
            {this.props.warning}
          </div>
        }

        {this.props.success &&
          <div className="uikit-page-alerts uikit-page-alerts--success" role="alert">
          	{this.props.success}
          </div>
        }

        {this.props.error &&
          <div className="uikit-page-alerts uikit-page-alerts--error" role="alert">
        	 {this.props.error}
          </div>
        }
      </div>
    )
  }
}

export default Messages
