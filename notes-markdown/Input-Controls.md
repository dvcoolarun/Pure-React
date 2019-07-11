#Input Controls

* Now that you've got a handle on how state works, we can
  talk about handling user input.

* Input controls in React come in two flavors: controlled 
   and uncontrolled.

```
    Controlled Inputs

   ** The reason they're called "controlled" is because
      you are responsible for controlling their state. **

   ** You need to pass in a value, and keep that value updated
      as the user types. ** 

    Remember how state works: a value and a callback function
    are passed in as props, the child notifies the parent events (via the callback prop), and then the parent component is responsible for reacting to changes and passing an updated value to the child.
```

``` javascript
    class Example extends React.Component {
        state = { text: ''};

        handleChange = (event) => {
            this.setState({
                text: event.target.value
            });
        };
        
        render() {
            return (
                <input type="text"
                 value={this.state.text}
                 onChange={this.handleChange} />
            );
        }
    }
```

```
This is very useful if you want to do some
kind of custom validation or formating --
you can do both in the handleChange function.
Don't want the user to type numbers? 
Strip out the numbers
before user updating the number.
```

``` javascript
    class NoNumbersInput extends React.Component {
        // ...

        handleChange = (event) => {
            let text = event.target.value;
            text = text.replace(/[0-9]/g, '')
            // ES6 shorthand for this.setState({ text: text })
            // If the key is the same as the variable name,
            // You don't have to write it twice.
            this.setState({ text });
        };
        // ....
    }
```
```
    / * Sometime you want to manage(*input) to manage its own
    state. Uncontrolled inputs will do that. */

    When a input is uncontrolled, it manages its own internal
    state. So you can put a input like this(without a value prop).
```
```javascript
    const EasyInput = () => (
        <input type="text"/>
    );
```

```
    When you want to get a value out of it, you have two options.

    First, you can pass an onChange prop and respond to events.
    The downside with this is that you can't easily extract a 
    value at will. 
    
    You need to listen to the changes and keep 
    track of the "most recent value" somewhere, probably in state. So it doesn't save much code over the controlled input.
```

``` 
    Refs
    
    Second you can use a ref. A ref gives you access to the
    input underlying DOM node, So you can pull out its value
    directly.

    The ref prop is special one, pass it a function, and React will call that function with the component's DOM element
    once the component is finishing mounting.

    Example using a ref on an input to extract its value, 
    when button is clicked.
```

```javascript
    
    /* Here we're saving the DOM element on the
    component instance (this.input), so that we
    can access it from the showValue function later. */

    /* You can't attach a ref prop to stateless component */

    class RefInput extends React.Component {
        showValue = () => {
            alert('Input container: ${this.input.value}');
        }

        render() {
            return (
                <div>
                    <input type="text" ref={input => this.input = input}/>
                </div>

                <button onClick={this.showValue}>
                    Alert the Value!
                </button>
            )
        }
    }

```

```
    Here's example as above, written as a **stateless function**. it relies on the fact that JS lets functions access variables in their surrounding scope, storing the ref in the input variable and accessing that same variable when you click the button.
```

```javascript
    const RefInputStateless = () => {
        let input;

        const showValue = () => {
            alert(`Input contains: ${input.value}`);
        }

        return (
            <div>    
                <input 
                    type="text"
                    ref={i => input = i}
                />
                <button onClick={showValue}>
                    Alert the Value!
                </button>
            </div>
        );
    }
```

``` 
    Uncontrolled inputs can also be given a defaultValue prop, and the component will be intialized with the value. After that initial render though, if you want to change the value
    the best way to do that it to  a controlled input.
```





```