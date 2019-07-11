## Architectually you can segment component into two kinds:-
    * Presentational(aka "Dumb")

    * Container(aka "Smart")
``` 
Presentational Components:- are stateless. They simply 
accepts props and render some elements based on those
props. A stateless component will generally contain less
logic. They are in essence **Pure Functions** 

They always return the same result for a given set of props, and they don't change anything. Ideally, most of your components will be presentational.

They accept the data and render it, and if events need to be handled, they call back up to the parent. Other kinds of common presentational components include buttons, navigation, bars, links, images etc.

Container components are stateful. They maintain state for themselves and any child components and pass it down to them via props. They usually pass down handler functions to children, and respond to callbacks by updating their internal state. Container components are
also responsible for asyn-chronous communication, such
as AJAX calls to the server.

*** Presentational compponents can contain Container components and containers can contain Presentational components -- there aren't any strict rule for nesting. 

*** In an Ideal situation, you try to organize your app
so that the components at the very top level (and maybe one level below that) are containers, and everything under them is presentational. 

*** In the real world this is difficult to achieve because you might have nested inputs that contain their own state, or more complicated requirements.