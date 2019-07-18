import React from 'react';
import RedditList from './RedditList';
import {items} from './static-data';
import './App.css';		

class App extends React.Component {
    state = {
        score: []
    };

    handleUpVote = (index) => {
        const update_score = [...this.state.score];
        update_score[index] = update_score[index] + 1;
        
        this.setState({
            score: update_score
        });
    };

    handleDownVote = (index) => {
        const update_score = [...this.state.score];
        update_score[index] = update_score[index] - 1;
        
        this.setState({
            score: update_score
        });
    };

    componentDidMount() {
        let scoreList = [];	
        items[0].data.children.map(item => {
            scoreList.push(item.data.score);
            return scoreList;
        });
        this.setState({
            score: [...scoreList]
        });
    }
        
    render() {
        return (
            <div className="App">
              <main className="App-content">
                <RedditList items={items[0].data.children}
                        handleUpVote={this.handleUpVote}
                        handleDownVote={this.handleDownVote}
                        scoreList={this.state.score}
                        />
              </main>
            </div>
        );
    }
}

export default App;
