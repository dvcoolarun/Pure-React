## The Component LifeCycle

```
    Every React Component goes through a lifecyle as its renderedon screen. 
    
    There are a sequence of methods called in the speciic 
    order. Some of them only run once, and some run multiple times.

    ** Tapping into lifecyle hooks won't be necassary.

    Here's the entire lifecycle of a component:
```

```
                    constructor
                        |
                        |
             getDerivedStateFromProps
              (nextProps, prevState)
                        |
                        |
                      render
                        |
                        |
                 ComponentDidMount
                        *
                        |
            static getDerivedStateFromProps
                (nextProps, prevState)
            (return the new state(or null)
                        |
                        |
                shouldComponentUpdate
                (nextProps, nextState)
                (return true or false)
                        |    \
                        |     \
                        |      | ComponentWillUnMount
                        |
                        |
                      render
 > ComponentDidCatch    |
                        |
                        |
                getSnapShotBeforeUpdate
                (prevProps, prevState)
        (return the snapshot (anything you want))
                        |
                        |
                        |
                ComponentDidUpdate
                (prevProps, prevState, snapshot)

```

```
    Tapping into lifecycle hook is as simple 
    as adding the appropriate function to your
    component class, LifeCycle methods are only available
    to class components, not functional ones.
```

```
    Within the lifecycle of a component There
    are few Phases that occur.

    Mount: occurs when the component is first added to the
    DOM. Intialization and setup are done here.

    Render: occurs when the component renders for the first
    time,When it re-renders due to a change in props or state.

    Commit: Takes the output from render and updates the
    DOM to match.

    Unmount: happens when the component is being removed from
    the DOM.
```

```
    Example of using every lifecycle method. Run the console to see the order in which they are called. 

    There are two components here, ErrorCatcher and LifeCycleDemo, because error bounderies(components that implement componentDidCatch) can only catch errors in their childern, not in themselves.
```

```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';

    class ErrorCatcher extends React.Component {
        state = { error: null }

        componentDidCatch(error, info) {
            console.log('[]', error);
            this.setState({ error: info.componentStack });
        }

        render() {
            if(this.state.error) {
                return (
                    <div>
                        An error occured: {this.state.error}
                    </div>
                )
            }
            return this.props.children;
        }
    }

    class LifeCycleDemo extends React.Component {
        // Initialize state First
        // (happens before constructor)
        state = {counter: 0};

        // The first method called after initializing state
        constructor(props) {
            super(props);
            console.log('[constructor]');
            console.log(' State already set:', this.state);
        }

        // Called after initial render is done
        componentDidMount() {
            console.log('[componentDidMount]', 'Mounted.');
        }

        // ** Don't forget to make this `static`! **
        // called before initial render, and any time new props
        // are received
        static getDerivedStateFromProps(nextProps, prevState) {
            console.log('[getDerivedStateFromProps]');
            console.log(' Next props:', nextProps);
            console.log(' Prev state', prevState);
            return null;
        }

        // Called before each render, Return false to prevent rendering.
        shouldComponentUpdate(nextProps, nextState) {
            console.log('[shouldComponentUpdate]', 'Deciding to update');
            return true;
        }

        // Called after render() but before updating the DOM.
        // A good time to make calculations based on old DOM nodes.
        // The value returned here is passed into componentDidUpdate
        getSnapshotBeforeUpdate(nextProps, nextState) {
            console.log('[getSnapshotBeforeUpdate]', 'About to update...');
            return `Time is ${Date.now()}`;
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('[componentDidUpdate]', 'Updated.');
        }

        componentWillUnmount() {
            console.log('[componentWillUnmount]', 'Goodbye cruel world.');
        }

        handleClick = () => {
            this.setState({
                counter: this.state.counter + 1
            });
        };

        causeErrorNextRender = () => {
            // Set a flag to cause an error on the next render
            // This will cause componentDidCatch to run in the parent
            this.setState({
                causeError: true
            });
        };
    
        render() {
            console.log('[render]');
            if(this.state.causeError) {
                throw new Error('oh no!!');
            }

        return (
            <div>
                <span>Counter: {this.state.counter}</span>
                <button onClick={this.handleClick}>Click to increment</button>
                <button onClick={this.causeErrorNextRender}>
                    Throw an error
                </button>
            </div>
        );
        }
    }

    ReactDOM.render(
        <ErrorCatcher>
            <LifeCycleDemo/>
        </ErrorCatcher>,
        document.querySelector('#root')
    );
    
```