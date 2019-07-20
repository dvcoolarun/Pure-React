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
            // Update the State of Selected
            // Item on the Enter KeyPress
        }
    }

    handleSelection = (selection) => {
        if (selection) {
            return (
                <MessageList messagelist={this.state[selection]}/>
            );
        }
        else {
            return (
                <MessageList messagelist={this.state.channels.general}/>
            );
        } 
    }

    render() {
        return (
            <div className="App">
              <main className="App-content">
                <Sidebar
                  channelList={this.state.channel.keys()}
                  peopleList={this.state.people.keys()}
                  handleSelection={this.handleSelection()}/>
              </main>
            </div>
        );
    }
}


export default App;
