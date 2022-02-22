import React from "react";
import '../styles/layout.css'
class Message extends React.Component {
    render() {
        return(
            <div className='mess'>
                <p style={{ margin: 0 }}>{this.props.text}</p>
                <small>{this.props.author}</small>
            </div>
        )
    }
}
export default Message