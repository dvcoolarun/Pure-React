import React from 'react';
import ReactDOM from 'react-dom';

function Child({ onAction, onReset }) {
    return(
        <>
        <button onClick={onAction}>
          Click Me!
        </button>
          &nbsp; &nbsp;
        <button onClick={onReset}>
          "Reset the State to Zero"
        </button>
        </>
    );
}

class CountingParent extends React.Component {
    // Another way to set-up the state(in a constructor)
    state = {
        actionCount: 0
    }
    
    handleAction = (action) => {
        console.log('Child says', action);

        this.setState({
            actionCount: this.state.actionCount + 1
        });
    }
    
    ResetState = (action) => {
        this.setState({
            actionCount: 0
        });
    }
    
    render() {
        return(
            <div>
              <Child onAction={this.handleAction} onReset={this.ResetState}/>
              <p>Clicked {this.state.actionCount} times</p>
            </div>
        );
    }
};

const Page = () => (
    <div>
      <CountingParent/>
      <CountingParent/>
      <CountingParent/>
    </div>
);

ReactDOM.render(<Page/>, document.getElementById('root'));

