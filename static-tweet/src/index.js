import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
    return (
        <div className="tweet">
            <Avatar/>
            <div className="content">
                <NameWithHandle/><Time/>
                <Message/>
                <div className="buttons">
                    <ReplyButton/>
                    <RetweenButton/>
                    <LikeButton/>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
    );
}

function Avatar() {
    return (
        <img 
            src="https://www.gravatar.com/avatar/nothing"
            className="avatar"
            alt="avatar"
            />
    );
}

function NameWithHandle() {
    return (
        <span className="name-with-handle">
            <span className="name">Your Name</span>
            <span className="handle">@yourhandle</span>
        </span>
    );
}

function Message() {
    return (
        <div className="message">
            This is less than 140 characters.
        </div>
    );
}

const Time = () => (
    <span className="time">3h ago</span>
);

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"></i>
);

const RetweenButton = () => (
    <i className="fa fa-retweet retween-button"/>
);

const LikeButton = () => (
    <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-buttons"/>
);

ReactDOM.render(<Tweet/>, 
    document.querySelector('#root'));

/*

// It can be written as anonymous function and
// stored in a (constant) variable:

function LikeButton() {
    return (
        <i className="fa fa-heart like-button"/>
    );
}

const LikeButton = function() {
    return (
        <i className="fa fa-heart like-button"/>
    );
}

// The anonymouse function can be
// turned into an arrow function:

const LikeButton = () => {
    return (
       <i className="fa fa-heart like-button"/>
    );
}

// It can be simplified by removing
// the braces and the 'return':

const LikeButton = () => (
    <i className="fa fa-heart like-button"/>
)

// And if it's really simple
// You can even write it on one line:

const Hi = () => <span>Hi</span>;
*/

/* With the help of const you can't do the reassignemnt of the 
   the variable, but you can still update the data within the variable
    
const answer = 42;
answer = 43; // error

const numbers = [1, 2, 3];
numbers[0] = 'this is fine'; //no error

 */

/*
Reusable components
    Parameterize components with props.
*/

/*
Think about how would you customize a plain function. This might seen a
bit basic but bear with me. Let's say you have a function:-
    function greet(): {
        return "Hi Dave";
    }

     
It works great, but it's pretty limited since it only return "Hi" + name;

What if you want to greet someone else? You'd pass in their name as an argument:

function greet(name){
    return "HI" + name;
}

Where functions have arguments, Components have props, (Props) let you pass
data to your components.

Here's is a bit of JSX passing a prop called name with a string value of "Dave"
into the person component.

    <Person name='Dave'/>

Here's another example, passing a className prop with the value "person":

    <div className='person'/>

JSX uses className instead of class to specify CSS classes.

In JSX every tag is self-enclosing even the components,
Every component could be self-closing. In fact, if the components
has no children(no-contents), the convention is to write it like this,
instead of using a tag like <div></div>

// In the next component we're passing a string for className, a number for the age prop,
    an actual javascript expression as the name:

function Dave() {
    const firstName = "Dave";
    const LastName = "Ceddia";

    return(
        <person
            className='person'
            age={33}
            name={firstName + ' ' + LastName}/>
    );
}

/* 
    Remember that in JSX, single braces must surround JavaScript expressions.
    
    The code in the braces is real javascript, and it follows all the same rules
    as normal javascript.

    /*
        It is important to understand that the JS inside the braces
        must be expression, not statement.

        Here are few things you can do inside JSX expression:
            Math, concetenation: { 7 + 5 } or {'Your' + 'Name'}

            Function calls: {this.getFullName(person)}

            Ternary (?) Operator: {name == 'Dave' ? 'me' : 'not me'}

            Boolean Expressions : {isEnabled && 'enabled'}

        Here are few things you can't do:
            * Define new variables with var
            * Use if, for, while, etc.
            * Define functions with function.
    
    /* JSX evaluates to JavaScript, which means the 
        props become keys and values in an object.

        Here's example of above component transformed into
        JavaScript.

        function Dave() {
            const firstName = "Dave";
            const lastName = "Ceddia";

            return React.createElement(Person, {
                age: 33,
                name: firstName + ' ' + lastName,
                className: 'person'
            }, null);
        }

    /* All the rules that apply to JavaScript expression
        apply to JSX expressions. You can't call a function
        like this?

        myFunc(var x = true; x && 'is true');

    If you try to pass that argument to a JSX Expression
    this is what you'd get:
    
        <Broken value={var x = true; x && 'is true' }/>

        // get compiled to

        React.createElement(Broken, {
            value: var x = true; x && 'is true'
        }, null);

    // Always ask your self this question, what to put
    // in the JSX expression, ask yourself, "Could I pass
    // this as a function argument?"
*/

/* 
        // Receiving Props
        // Props are passed as the first argument to the component, like this:


            function Hello(props){
                return(
                    <span>Hello, {props.name}</span>
                );
            }
        
        // Used Like:

            <Hello name="Dave">
        
            
        // It works the same way for the arrow function:
            
            const Hello = (props) => (
                <span>Hello, {props.name}</span>
            )
        
        // ES6 has a new syntax called destructuring which
        // Makes props easier to work with. It looks like this:
            
            const Hello = ({ name }) => (
                <span>Hello, {name}</span>
            )
            
            /* You can read { name } as "extract the 'name' key
            from the object passed as first argument, and
            put it in a variable called name".
            
            //You can exract multiple keys at the same time, too:

            const Hello = ({ firstName, LastName }) => (
                <span>Hello, {firstname} {lastName}</span>
            )
            
*/

/* 
  In practice props are very often written using this
  destructuring syntax. 

  Just so you know, it works outside
*/            

/* 
   Remember, arrow function need a return 
   If the body is surrounded by braces,
   
   And, it needs braces if the body contain
   multiple lines.

*/

const Hello = (props) => {
    const { name } = props;
    return (
        <span>Hello, {name}</span>
    );
}

/* Modiying Props */

/* Props are read only, components that receive props must not change them.
   
   If you come from an Angular background this is a change.


   Angular 2-way Binding mechanism allowed modifying scope variables 

   (Angular version of props) and would automatically propagate those changes

   to the parent component. */

/* In React Data Flow one way. Props are read-only, and can only be passed down to children */

/* Communicating With Parent Components */

/* If you can't change props, but you need to communicate something up
  to a parent component, how does that work? */

/* The child component receives the onAction prop, which it
   can call whenever it needs to send up data or notify the
   parent that something happened. */

function HandleAction(event) {
    console.log('child did:', event);
}

function Parent() {
    return (
        <child onAction={HandleAction}/>
    );
}

/* If you want to communicate something from the child
   to the parent component, 

   If a child needs to send data to its parent, the parent
   can send down a function as a prop.

   The child component receives the onAction prop, 
   which it can call whenever it needs to send up 
   data or notify that something happen. */

/* (One place where it is common to pass functions as props is for
  handling the events. For instance, the built-in-button element
  accepts onClick prop, which it'll call when the button is clicked.) */

function Child({ onAction }){
    return (
        <button onClick={ onAction }/>
    );
}
