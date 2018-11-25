import React, { Component } from 'react';

class Home extends Component {
    state = {
        sessionText: ''
    }

    handleClick = () => {
        // i am guessing there is a better way to do this redirect.
        document.location.href=`/team-session/id=${this.state.sessionText}`;
    }

    onTextChange = (event) => {
        this.setState({sessionText: event.target.value});
    }

    render(){
    return (
        <div className='home' >
            <p>Start a new voting session, or continue an existing session</p>
            <div>
                To start a new session, simply click submit:
                <br/>
                <input type='text' onChange={this.onTextChange} placeholder='enter session id' value={this.state.sessionText} />
                <br/>
                <input type='submit' onClick={this.handleClick} />
            </div>
        </div>
    )}
}

export default Home;