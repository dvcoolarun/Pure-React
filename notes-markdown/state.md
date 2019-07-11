## State

## Up untill this point we've used props, **props are read only,
   What if you need to track of data that change? What if you
   want to make your app interactive? This is where state comes in.

## Example: A container

***
    Here is a Parent component that contains a Child component.
    Parent passes down a function which Child calls whenever a button is clicked.

    function handleAction(event) {
    	     console.log('child did:', event);
    }
    function Parent() {
    	     return (
	     	    <Child onAction={handleAction}/>
	     );
    }	     

    function Child() {
    	     return (
	     	    <button onClick={onAction}>
		    	    Click Me!
		    </button>
	     )
    }
***

// What if we wanted Parent to keep track of how many times
   the button was clicked? In other words how many times
   its handleAction function is called.

// To do this, Parent needs 3 things:

   * an initial state where the counter is set to 0,

   * a call to this.setState to increment

   * the counter, and a way to display the current count.

// function component are stateless.

// To make parent stateful, it needs to be transformed into
   ES6 class.

// Here the new version of Parent, renamed to CountingParent

``` 
class CountingParent extends React.component {
      state = {
      	    actionCount: 0
      }
      handleAction = (action) => {
      		   console.log('Child says', action);

		   // actionCount is incremented, and
		   // the new count replaces the existing one

		   this.setState({
			actionCount: this.state.actionCount + 1
		   });
      }
      render() {
      	       return(
		<div>
			<Child onAction={this.handleAction}/>
			<p>Clicked {this.state.actionCount} times</p>
		</div>
	       );
      }
}

/** setState is actually Asynchronous **/

/* asynchronous: not occuring at the same time */

/* If you need to set the state, and immediately act on that change, you can pass in callback
   function as the last argument to setState like this:

this.setState({name: 'Joe'}), function() {
  // called after state has been updated
  // and the component has been re-rendered
  // this.state now contains {name: 'Joe'}
}

/* Functional setState */

// Another way to make it so that sequential state updates run in
   sequence is to use the functional form of setState, like this:

   this.setState((state, props) => {
   	return {
	       value: state.value + 1
	}
   });

   this.setState((state, props) => {
   	return {
	       value: state.value + 1
	}
   });

   /* In this form, you pass a function to setState.
      The function receives the current scope and props
      as arguemnts and expected to return the desired
      new state. If you were to run a few of these
      sequentially... */

      this.setState((state, props) => {
      	return {
	       value: state.value + 1
	}
      });
      
      this.setState((state, props) => {
      	return {
	       value: state.value + 1
	}
      });

      this.setState((state.props) => {
      	return {
	       value: state.value + 1
	}
      }

  /* This would work as expected, eventually incrementing value by 3.
  it works because calling setState "queues* the updates in the order
  they are called, and when they're executed, they receive the latest 
  state as an argument instead of potentially-stale this.state.*/
     
  /* 
     Another side benefit of the functional style of setState is that
     the state update functions can be extracted from the class and
     reused because they are "pure" -- that is, they only operate on
     their arguments, they don't modify the arguments, and they return
     a new value. A "pure" function has no side effects, which means
     that calling it multiple times with the same argument will always
     return the same results. 
  */

     Functional setState is the prefered way to call setState because it's guranteed to work correctly, every time. */
     
     Passing an object to setState works fine(much of the time), but it's like playing with fire. It's fun untill you get burned and spend 30 minutes trying to figure out why your state isn't updating the way you expect.
  */
```
  /* 
     ***Shallow vs Deep Merge***

     When you call setState, whether you call it with an object
     or in the functional form, the result is that it will shallow 
     merge the properties in your object with the current state.*/

     ** Only one level Deep **
     
     let say you start with a state like this:
     	 {
		score: 7,
		user: {
		      name: "somebody",
		      age: 26
		},
		products: [/*...*/]
	 }
	 
     After you run this.setState({ score: 42 }), the new state will be:

     {
	score: 42,
	user: {
	      name: "somebody",
	      age: 26
	},
	products: [/* unchanged */]
     }

     /* That's it merges the object you passes to setState(or return from the functional version)
     	with the existing state. It doesn't erase the existing state,

	And it doesn't replace the whole top-level state with your object. */
	
    /* If instead you run this.setState({ user: { age: 4 }}) then it would replace the entire user
       object with the new one. */
       
    {  
       score: 42,
       user: { 
       	     age: 4, // no more 'name'
    },
    products: [...], // unchanged
	
    /* A deep merge would peek into the user object and only update its age property
       while leaving the rest alone. 
       
       ** A "Shallow" merges overwrite the whole user object
       with the new one. ***
        
       *** It won't replace the top-level state, but it will only update
       one level deep ***/
```
    /* Handling Events */
    
    * According to convention React's events are named with camelCase like onClick, onSubmit, onKeyDown...
      Whereas the HTML events are lowercase.

      * onDoubleClick differs by ondblclick

      * Your event handler function(handleaction in our previous example) will recieve the event object.
      	Which looks like a lot like a native browser event. It has the standard **stopPropagation** and 
	**preventDefault** functions if you need to prevent bubbling or cancel a form submission, for example.
	It is not actually a native event object though - it is a SyntheticEvent.

      * The event object passed to a handler function is only valid right at that moment.

      * The SyntheticEvent object is pooled for performance. Instead of creating  a new one for every event,
      	React replaces the contents of the single instance.

      * If you print it the event using ** console.log(event), the instance logged to the console will be
      	cleared out the time you go look at it. You also can' access it asynchronously.

	** If you need to access an event asynchronously, call event.persist() and React will keep it around.
```
      ## ** What to Put in State **
      
      **  How do you decide what should go into state? Is there anywhere else to store persistent data?
      	  
	  ** As a general rule, data that is stored in state should be referenced inside render somewhere.	
	  
	  ** **Component state** is for storing UI state -- things that
	     affect the visual rendering of the page. This makes sense
	     because any time state is updated, the component will
	     re-render.

	  *** If modifying a piece of data does not visually change the component, that data should not go into the state ***

	  ** Here are some things that **make sense to put in **state:
	     
	     * User-entered input(values of text boxes and other form fields.)

	     * Current or selected item(the current tab, the selected row.)

	     * Data from the server(a list of products, the number of
	     "likes" on the page.)

	     * Open/Closed state (modal open/closed, sidebar-expanded/hidden.)

	    *** In the Component ** 
	    
	    *** Other stateful data, like handles to timers, should be
	    stored on the component itself. You've got a **this** object
	    available in class component classes, feel free to use it!

```
	*** Should Props Go in State? ***
	
	-> You should avoid copying props into state. It creates a second source of truth for your data, which usually leads to bugs. One source of truth is always best. **If you find yourself copying a prop into state and then thinking "Now I'm going to keep this updated?" -- take a step back and rethink.

    -> Component will automatically render when their props change, so there's no need to duplicate the props as state and then try to Keep it up to date.

	-> // Don't do this
	
    > Intializing State from Props 
    
However, It's not anti-pattern if you make it clear that the prop is only seed data for the component's
internally-controlled state.
    
-> Think of it this way: it's fine if the state needs
a starting value which then component will then control.

-> Ask yourself: Does this component "own" the data?
Does it just need a default value from a prop?
Those are good reasons to initialize state from a prop.

```
    class BadExample extends Component {
        state = {
            data: props.data
        }
    }
    ComponentDidUpdate(oldprops) {
        /* Duplicating the data, you have to keep the 
        local copy in sync with the updated props */

        if(oldprops.data !== this.props.data){
            // unneccasary re-render
            this.setState({
                data: this.props.data
            });
        }
    }
    render() {
        return(
            <div>
            The data: {this.state.data}
            </div>
        );
    }
```
// ...

class GoodExample extends Component {
    render() {
        return (
            <div>
              The data: {this.props.data}
            </div>
        );
    }
}

```
    Data stored inside state should be render somewhere
    Component state is for storing UI state. */

    Things that affect the visual rendering of the page.

    This makes the sense any time state is updated, the component
    will re-render.

    ### If modiying a piece of data does not visually change the component, that data shouldn't go into state.

    ### What to put in the state

    ** User-entered input(Values of text-boxes and other form-fields)

    ** Current or selected Item (the current tab, the selected row)

    ** Data from the server(a list of products, the number of "likes" on the page.

    ** Open/Closed State (modal open/closed, sidebar expanded/hidden)

    ** Other Stateful data, like handles to timers should be stored
    on the component itself. You've got a **this** object available
    in class components classes.

```
class BadExample extends Component {
    state = {
        data: props.data
    }

    componentDidUpdate(oldprops) {
        /* By Duplicating the data, you then have to
        keep the local copy in sync with the updated props */

        if (oldprops.data !== this.data.props) {
            // Local copy in sync with the updated props.
            // Un-necassary re-render
            this.setState({
                data: this.props.data
            });
        }
    }

    render() {
        return (
            <div>
                The data: {this.state.data}
            </div>
        )
    }
}

class GoodExample extends Component {
    render() {
        return (
            <div>
                The data: {this.props.data}
            </div>
        )
    }

}
```

    /** Intializing State from the Props **/

    * Prop is only seed data for the component's internally-controlled state.

    * Think of it this way: it's fine if the state needs a 
    Starting value which the component will then control.

        ((( Ask yourself Does this component "own" the data?

        Does it need a Default value from a prop?

        Those are good reasons to Intialize state from a prop. )))

```
** Thinking Declaratively **

    <Accordian isOpen={true}/>

    <Accordian isOpen={false}/>

    The Accordian can be displayed in either "open" state or the
    "close" state and we store the information as a flag inside the
    Parent component state.

    
    We tell the accordian which way to render by passing isOpen
    as a prop. When isOpen is true, it renders as open. When isOpen
    is false, it renders as closed. 


    The biggest difference is that in the declarative React way,     the expand/collapse state can be stored outside the Accordion and passed in as prop.

    /* Opening and Closing a Dialog */

    The old way: Clicking a button opens the modal. Clicking its
    close button closes it.

    The Declarative Way: Whether or not the Modal is open is a state, It's either "open" state or the "closed" state. So if 
    it's "open", We render the model, "closed" we don't render the model. Moreover we can pass an onClose callback to the Modal.

    (This way the parent component gets to decide what happens
    when the user clicks close.)

    <div>
        {this.state.isModelOpen && 
            <Modal onClose={this.handleClose}>}
    </div>

```

    /*** Notifications ***/

    ** Old Way **
    When an event occurs (like an error) call a notifcation library to display a popup, like toastr.error("Oh no!")

    *** The Declarative Way ***

    Think of notifications as state. There can be zero notifications or 1 or 2, Store those in an array.

    Put a NotificationTray component somewhere near the root of the app, and pass it the message to display.

    *** You can manage the array of messages in the root component's state, and pass an addNotification prop-down to components that need to be able to surface notifications.

```
Animating a Change

Animating a Badge with the animation, when the number
changes, Use a class or use the jQuery to animate the element directly.

The Declarative way:- 
You can respond when props change by implementing the
**componentWillReceiveProps** lifecycle method and comparing the old value to the new one 

If animation  == true; add a css class.

If animation == false; do not add a css class.

```javascript
    class Badge extends React.Component {
    componentWillReceiveProps(nextProps) {
        // comparing old value to the new value.
        if(this.props.counter !== nextProps.counter) {
            // Set animating to true right now.
            // When the state change finishes, set a timer.
            // to turn animating off in 200ms.

            this.setState({ animating: true }, () => {
                setTimeout(() => {
                    this.setState({ animating: false });
                }, 200);
            });
        }
    }
    render() {
        const animatingClass = 
            this.state.animating ? 'animating' : '';
        return (
            <div className={`badge ${animatingClass}`}>
            {this.props.counter}
            </div>
        );
        }    
    }
```

### Where to Keep State
    * Whenever you can, It's best to keep the components
      stateless. Components without state are easier to
      write, and easier to reason about.
    
    * Sometimes this isn't possible, but often, pieces of
      data you initially think should go into internal state
      can actually be pulled up to the parent component,
      or even higher.

``` javascript
    class layout extends React.Component {
        state = {
            showSidebar: false
        }

        toggleSidebar = () => {
            this.setState({
                showSidebar: !this.state.showSidebar
            });
        }

        render() {
            const { showSidebar } = this.state;
            return (
                <div className="layout">
                    {showSidebar && 
                      <Sidebar
                        onHide={this.toggleSidebar}>
                        some sidebar content
                      </Sidebar>}
                    <Content
                        isSidebarVisible={showSidebar}
                        onShowSidebar={this.toggleSidebar}>
                        some content here
                    </Content>
                </div>
            );
            }
        }

        const Content = ({
            children,
            isSidebarVisible,
            onShowSidebar
        }) => (
            <div className="content">
                {children}                {!isSidebarVisible && (
                    <button onClick={onShowSidebar}>
                        Show
                    </button>
                )}
            </div>
        );

        const Sidebar = ({
            onHide,
            children
        }) => (
            <div className="sidebar">
                {children}
                <button onClick={onHide}>
                    Hide
                </button>
            </div>
        );
```