import React from 'react'
import Message from "./Message";
import '../styles/layout.css'

 class MessageField extends React.Component {
    state = {
        messages: [
            {
                text: 'Привет!',
                author: 'Бот'
            },
            {
                text: 'Как дела?',
                author: 'Бот'
            }
        ],
        value: ''
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.messages.length % 2 === 0 &&
            this.state.messages[this.state.messages.length - 1].author === 'Алина'){
            setTimeout(() => this.setState({
                messages: [...this.state.messages, { text: 'Привет я бот', author: 'Бот' }]
            }), 1000)
        }
    }

    handleClick = () => {
        this.setState({
            messages: [...this.state.messages, { text: 'Новое сообщение', author: 'Алина' }]
        })
    }

    handleChange = (event) => {
        const val = event.target.value
        this.setState({ value: val })
    }

    sendMessage = (message) => {
        this.setState({
            messages: [...this.state.messages, { text: message, author: 'Алина' }]
        })
    }

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { 
            this.sendMessage(message)
        }
    };

    render(){
        const messageList = this.state.messages.map((message,item) => (
            <Message key={item} text={message.text} author={message.author} />
        ))

        return (
            <div>
                {messageList}

                <input className='inp'
                    onChange={this.handleChange}
                    onKeyUp={(event) => this.handleKeyUp(event, this.state.value)} />

                <button className='btn' onClick={this.handleClick}>add message</button>
            </div>
        )
    }
}

export default MessageField