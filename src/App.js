import React from 'react'
import './App.css';
import MessageField from "./components/MessageField";

 class App extends React.Component {
    render(){
        return (
            <div>
                <h1>I am component!</h1>
                <MessageField />
            </div>
        )
    }
}
export default  App