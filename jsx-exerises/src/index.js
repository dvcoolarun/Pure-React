import React from 'react';
import ReactDOM from 'react-dom';

function MyThing() {
    return (
        <div className='book'>
          <div className='title'>
	    The Title
 	  </div>
          <div className='author'>
	    The Author
          </div>
          <ul className='stats'>
	    <li className='rating'>
	      5 starrs
	    </li>
            <li className='isbn'>
              12-345678-910
            </li>
          </ul>

          <div>
            &nbsp;Non-breaking
            &nbsp;Spaces&nbsp;
          </div>

          {/* Inserting spaces when content 
             span multiple lines. */}
          <div>
            Line1
            {' '}
            Line2
          </div>
        </div>
    );
}

ReactDOM.render(
    <MyThing/>,
    document.getElementById('root'),
);

function Greeting() {
//    let username = "root";
//    let username = undefined;
//    let username = null;
    let username = false;
    
    return (
        <span>
          {username && 'Hello, username'}
          {!username && 'Not logged in'}
        </span>
    );
}

ReactDOM.render(
    <Greeting/>,
    document.getElementById('root'),
);


function Hello() {
    return(
      <span>1</span>
    );
}

function World() {
    return(
	<span>2</span>
    );
}

function HelloWorld() {
    return[<Hello/>, <World/>];
}

ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('root'),
);

function ReturnInsideJsExperssion() {
    { return ('Return from JS expression ') }
}

ReactDOM.render(
   <ReturnInsideJsExperssion/>,
   document.getElementById('root'),
)

function MyThingCopy() {
    React.createElement('div', { className: 'book'},
                               React.createElement('div', { className: 'author'}, ''),
                               React.createElement('div', { className: 'title'}, 'The Title'),
                               React.createElement('div', { className: 'author'}, 'The Author'),
                               React.createElement('div', { className: 'stats'},
                                                   React.createElement('li', { className: 'rating'}, '5 stars'),
                                                   React.createElement('li', { className: 'isbn' }, '12-345678-910')
                                                  )
                              );
}

ReactDOM.render(
    <MyThingCopy/>,
    document.getElementById('root'),
);


function TwoExpression() {
    var x = true;
    alert('hi');
    return (
	<div>
	    <span>"Hello"</span>
	    <span>
	    {x && 5, (x && 7)}
	    </span>
	</div>
    );
}

ReactDOM.render(
    <TwoExpression/>,
    document.getElementById('root'),
)

function Table() {
    return (
	    <table>
	      <tbody>
	        <tr>
	          <Data/>
	        </tr>
	      </tbody>
	    </table>
    );
}

ReactDOM.render(
    <Table/>,
    document.getElementById('root'),
)

function Data() {
    return (
	<>
	    <td>Hello</td>
	    <td>First</td>
	    <td>Table</td>
	</>
    );
}
