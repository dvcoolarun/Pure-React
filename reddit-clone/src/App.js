import React from 'react';
import RedditList from './RedditList';
import {items} from './static-data';
import './App.css';		

class App extends React.Component {
    state = {
        score: []
    };

    handleUpVote = (item) => {
        const update_score = [...this.state.score];
        update_score[item.id] = update_score[item.id] + 1;
        
        this.setState({
            score: update_score
        });
    };

    handleDownVote = (item) => {
        const update_score = [...this.state.score];
        update_score[item.id] = update_score[item.id] - 1;
        
        this.setState({
            score: update_score
        });
    };
    
    renderList() {
        let scoreList = [];
        items.map(item => {
            scoreList.push(item.score);
            return scoreList;
        });

        /* Error Maximum Depth exceeded. This will happen when a component
          repetadally calls setState inside ComponentWillUpdate or ComponentDidUpdte, React limits numbers of nested updates to prevent infinite loops */
        
        // let scoreList = items.map(item => {
        //     this.setState({
        //         score: [...this.state.score, item.score]
        //     });
        //     return this.state.score;
        // });

        return (
            <RedditList items={items}
                        handleUpVote={this.handleUpVote}
                        handleDownVote={this.handleDownVote}
                        scoreList={scoreList}
                        />
        );
    };
    
    render() {
        return (
            <div className="App">
              <main className="App-content">
                {this.renderList()}
              </main>
            </div>
        );
    }
}

export default App;
