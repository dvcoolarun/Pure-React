import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import './App.css';

class App extends React.Component {
    state = {
        "channels": {
            "general": [],
            "help": [],
            "react": [],
            "redux": [],
            "webpack": []
        },
        "people": {
            "Dave": [],
            "Sarah": [],
            "Zack": [],
            "Pam": [],
            "Joe": []
        }
    }

    handleKeyPress = (event, selection) => {
        if(event.key === 'Enter'){
            // handling updation of state
            // based on the keypress
        }
    }

    handleSelectRender({name}) {
        return (
            <MessageList messagelist={this.state[name]}/>
        );
    }

    render() {
        return (
            <div className="App">
              <main className="App-content">
                <Sidebar
                  channelList={this.state.channel.keys()}
                  peopleList={this.state.people.keys()}/>
              </main>
            </div>
        );
    }
}

export default App;
