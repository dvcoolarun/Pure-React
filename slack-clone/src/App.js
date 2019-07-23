import React from 'react';
import Sidebar from './Sidebar';
import MessageList from './MessageList';
import InputBox from './InputBox';
import {items} from './static-data';
import './App.css';

class App extends React.Component {
    state = {
        channels: {
            general: [],
            help: [],
            react: [],
            redux: [],
            webpack: [],
            "react-router": []
        },
        people: {
            Dave: [],
            Sarah: [],
            Zack: [],
            Pam: [],
            Erin: [],
            Joe: []
        },
        selection: false,
        selectedListName: ""
    };

    handleSelection = (selectedItem) => {        
        const objectName = selectedItem.split('.')[0];
        const keyName = selectedItem.split('.')[1];
        const data = [];
        const parentObject = {...this.state[objectName]};

        
        items[objectName][keyName].map(item => {
            data.push(item);
        });

        parentObject[keyName] = data;

        this.setState({
            [objectName]: parentObject,
            selection: true,
            selectedListName: selectedItem
        });
    };

    handleKeyPress = (event) => {
        if (event.keyCode === 13) {
            console.log("Pressed Enter");
        }
    }

    handleSelectionRender() {        
        if (this.state.selection) {                       
            const objectName = this.state.selectedListName.split('.')[0];
            const keyName = this.state.selectedListName.split('.')[1];
            const messageList = this.state[objectName][keyName];
            return (
                <div className="content">
                  <MessageList messageList={messageList}/>
                  <InputBox onKeyDown={this.handleKeyPress}/>
                </div>
            );
        }
        else {
            return (
                <div className="content">
                  <h1>Sorry, Please Select a Channel/USER.</h1>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="App">
              <main className="App-content">
                <Sidebar
                  channelList={Object.keys(this.state.channels)}
                  peopleList={Object.keys(this.state.people)}
                  handleSelection={this.handleSelection}>
                </Sidebar>
                {this.handleSelectionRender()}
              </main>
            </div>
        );
    }
}

export default App;
