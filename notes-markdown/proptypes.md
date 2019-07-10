# PropTypes

## Documentation and Debuging In One

** If you forget to pass one of the props?

** Well, it ends up undefined, just as if you'd forgotten to pass
   an argument to a plain old function. This can be totally fine,
   or code-breaking disaster(just as if you'd forgotten to pass
   an argument to a plain old function.)

** React has a secret weapon though: proptypes

** When you create a component, you can declare that certain props
   are optional or required, and you can declare what type of value
   that prop expects.

   Import PropTypes from 'prop-types';

   function Comment({ author, message, likes}) {
   	    return (
	    	   <div>
			<div className='author'>{ author }</div>
			<div className='message'>{ message }</div>
			<div className='likes'>
			     {likes > 0 ? likes: 'No'} likes
			</div>
		   </div>
	    );
   }

      Comment.propTypes = {
   		     message: PropTypes.string.isrequired,
		     author: PropTypes.string.isrequired,
		     likes: PropTypes.number
   }

   /* Firstly note that PropTypes must be explicitly imported from the 'prop-types' package.*/

   /* Note that propType are set as a property on the component itself. This pattern is the
      same whether the component is a regular function, an arrow function, or even ES6 class. */ 

   /* Note that propTypes start with lower 'p', while the
      imported PropTypes starts with a capital 'P'.*/


   ReactDOM.render(<Comment author={42}/>,
   			    document.querySelector('#root'));

   /*
	If you forget to add any proptype which is required,
	you will get a *warning in *console,

	It tells you the mistake you made, and gives you a hint
	where to look!


/* The only catch with prop type is that you must rememeber to declare them.*/

/* You can either super-dilligent about writing those propTypes, or you can have a linter tool check for you. (I recommended the second one.) */

/* How do the validation?

   * PropTypes comes with a lot of validators built-in.
     * There are validators for the standard JavaScript types:
       	    * PropTypes.array
	    * PropTypes.bool
	    * PropTypes.func
	    * PropTypes.number
	    * PropTypes.object
	    * PropTypes.string

   * There are validators for node and element.

     An node is anything that can be rendered,
     meaning numbers, string, elements or any
     an array of those.

     An element is a React element created with JSX or by calling
     React.createElement.

     There is instanceOf validator for checking that the prop is
     an instance of a specific class. It takes an argument.

     PropTypes.instanceOf(SpecificClass)
*/

/* You can limit to specific values with oneOf */

   PropTypes.oneOf(['person', 'place', 1234])

/* You can validate that the prop is one of the few types:*/

   PropTypes.oneOfType([
	PropTypes.string,
	PropTypes.boolean
   ])

/* You can validate that it's an array of a certain type,

   or an object whose properties are values of a certain type: */
   
PropTypes.arrayOf(PropTypes.string)
	- Would match: ['a', 'b', 'c']
	- Would not match: ['a', 'b', 42]

PropTypes.objectOf(PropTypes.number)
	- Would match: {age: 27, birthMonth: 9}
	- Would not match: {age: 27, name: 'Joe'}

/* You can also validate that object has a certain shape, meaning
   that it has particular properties. The object passed to this prop
   is allowded to have extra properties too, but it must have the ones
   in the shape description.

PropTypes.shape({
	name: PropTypes.string,
	age: PropTypes.number
})

person = {
       name: 'Joe',
       age: 27
}

/* Since this PropTypes shape is requiring an object that has
   name and age keys, if we leave one of them off, it won't pass.
   This would generate a warning. */

person = {
       age: 27
}

/* Similary we'll get warning for passing wrong type */

/* Required Props */

/* A Prop type validation is *Optional, Optional prop will not warn
   if they're missing, but will warn if the wrong type is passed in.
*/

*** Any Prop type validation can be made **required, By appending  .required
   to the end of it. Here are few examples.

ProtoTypes.bool.isRequired

ProtoTypes.oneOf([]).isRequired

ProtoTypes.shape({
	
}).isRequired


/* Here's important point to note, Proptypes are great for debugging, but it will not stop your code from running, Keep an eye on console window. */


/* Principle of DRY (Don't Repeat Yourself, so there)
           is no point in repeatng the author(*shape) again(In the Tweet)*/

/*
It’s also good to follow the DRY (Don’t Repeat Yourself) principle. If you have an explicit object shape.

Required in one place, for instance in NameWithHandle , there’s little value in duplicating the shape in.

The parent Tweet component. If the shape of author changes some day, there will be two places to update code. Having that second check doesn’t buy you anything, and instead, could actually cost you
time in the future.

*/

Tweet.propTypes = {
    Tweet : PropTypes.shape({
        message: PropTypes.string.isRequired,
        gravatar: PropTypes.string.isRequired,
        author: PropTypes.shape({
            handle: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
        likes: PropTypes.number,
        retweets: PropTypes.number,
        timestamp: PropTypes.string.isRequired
    })
};
