# Children

** We've seen how JSX supports nesting components, just like HTML.
   And We've seen that custom components can accept props as argument.
   and use those props to render content or pass along to child components.

   There's a special prop we haven't talked about yet: It is called children.

   /* Imagine Using it like this */
   
   <iconbutton>Do The Thing.</iconbutton>

   What happens to "Do The Thing"? Well, that's where the children prop comes in.

   ** When react renders IconButton, It will pass all of its subelements(In this case
   , the text "Do the thing") into IconButton as a prop called ***children***.

   The children are automatically passed in, but they are ***not displayed anywhere***.
   You have to explicitly render the children somewhere in your component. If you
   don't, they're ignored.

   /* Iconbutton component looks like this */

   function IconButton() {
   	    return(
		<button>
			<i class="target-icon">
		</button>
	    );
   }

/* The passed in component would be button with an icon, and no text.
   it would look like a button with no text and a icon.

   *** After inserting the children prop and then inserting it after the icon,
   the passed in children will be rendered where we want them.

   function IconButton({ children }) {
   	    return (
	    	   <button>
			<i class="target-icon">
			{children}
	           </button>
	    )
   }

   /* Notice that children is used by receving component,
      but that no prop named children is explictly passed to
      **iconbutton,

      OR You can achieve the same result using explicitly passing
      the children prop: */

      <iconbutton children={"Do the thing"}></iconbutton>

      ** The convention is to put children inside the tag in JSX.

      	 and not pass them explicitly as a prop, but I wanted to

	 show you that children **can be used like any other prop.

	 <iconbutton children={<em>Just Do it</em>}/ >

	 ** You can also pass the JSX into props.

	 ** Sometimes you can use (or write) a component that accepts JSX as a prop.

	 ** A confirmation component that displays a dialog with 'Ok' and 'Cancel' buttons.

	 *** If you wanted the user to be able to customize the title and message of the dialog.

	 *** You could write it to accept title and message as seperate props and use them in confirmation.

	 ** Confirmation component that accept two props

	    ** title :-

	    ** message :-

	 ** Pass JSX into props.
	    
	 <confirmation
		title={<h1>Are you Sure?</h1>}
		message={<strong>Really Really Sure?</strong>}
	 />

	 ** Different Types of Children

	 The children prop is always pluralized as children
	 no matter whether there's a single child or multiple
	 children. ***

	 ** Type of children prop will change depending
	    on what it contains.

	 ** When there are multiple childrens, children is
	 an array of ReactElements.

	 ** However, when there is only one child, it is a ReactElements	object. wouldn't be easier to work with if children was
	 an array.(Instead of ReactElement object).

	 ** Well yes, it would but children is used very often(use-case) is common enough that the React team decided to optimize by not allocating an array when there's only one child.

*** Dealing With Different type of children

    React.children.map(children, function)

    React.children.forEach(children, function)

    React.children.count(children)

    React.children.only(children)

    React.children.toArray(children)

    ** map and forEach works on the JavaScript built-in Array.
       They accept children, whether it's single element or an
       array, and function .

    ** ForEach iterates over the children and returns nothing.

    ** Whereas *** map *** returns an array made up values you return
       from the function you provide ***.

    ** Count (number of items in the children.)

    ** toArray converts children into a flat array, whether is was
       an array or not.

    ** Only :- returns the single child, or throws an error if there is more than one child.

    ** You have access to every child element individually, so you
       can reorder them, remove some, insert new ones, pass them
       children down to further children, and so on.

    *** PropTypes for children

    	** If you want your component to accept zero, one or more
	   children, use the .node validator:

	   propTypes: {
	   	      children: PropTypes.node
	   }
	   


	** If you want it to accept only single child, use the element
	   validator :-

	   propTypes: {
	   	      children: PropTypes.element
	   }

	** You can't accept any other thing from children***. Beware that *** this expects a single React Element as child.***

	** This means it has a custom component, or tag like
	   <div>.

	** PropTypes.element will warn if you pass a
	   string or number.

	** If you need to allow an element or a string, you can
	   use the node validator(which will accept elements, strings,
	   more).

	   Or be more explicit with a OneofType validator like this.

	   propTypes: {
	   	      children: PropTypes.oneOftype([
		      		PropTypes.element
				PropTypes.string
		      ])
	   }

	*** Customizing Children Before Rendering ***

	What if we wanted to do something more expressive,
	like creating our own custom component hierarchy?

	// Imagine that we constructed own own "API"
	   of sorts for expressing a navigation header:

	<Nav>
		<Navitem url = '/'></Navitem>
		<Navitem url = '/about'></Navitem>
		<Navitem url = '/contact'></Navitem>
	</Nav>

	// Using the children prop, the nav component can do things
	   like insert a seperator between each item.

	   function Nav({ children }) {
	   	    let items = React.Children.toArray(children);
		    for(let i = items.length - 1; i >= 1; i--) {
		    	    items.splice(i, 0,
			      <span key={i} className='seperator'>|</span>		    
			    );
		    }

		    return (
		    	   <div>{items}</div>
		    );
	   }

	   /* The code converts children into an array, then walks
	      backward from the end as it inserts a new element between
	      very existing element. */

	  
	   
	   

	   
		   

	   

       





       

       
    
    

	 
	 

	
	    
   
   