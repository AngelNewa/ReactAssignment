// Common JS
//require('react');
//module.exports = {}
//export.varname = 24

// es6
import React from 'react';
import ReactDOM from 'react-dom';



// var test = (a, b) =>{

// }

// const renderer = () =>{
//     document.getElementById('normal').innerHTML = <p>This is fucking test!</p> <input /><br/>${new Date().toLocaleTimeString()};
//     ReactDOM.render(
//         //1st Param what to render
//         // the element to be created is html element
//         React.createElement(
//             'div', //1st) actual html element to be created
//             null, //2nd) id, class haru dine (Properties aka in react props)
//             'This div is created using react', // 3rd
    
//             React.createElement('input', null, null),
//             React.createElement('p', null, new Date().toLocaleTimeString())
//         ),
//         //2nd where to render
//         document.getElementById('react')
//     )
// }

// setInterval(renderer, 1000);


/* January 3, 2020 */


// React.createElement('input');

// React.createElement is replaced by jsx

const lecture = 'of react jsx';
const element = <h1> This is testing {lecture}</h1>; // jsx ko syntax "<h1> This is testing {lecture}</h1>"

// ReactDOM.render(what, where);
ReactDOM.render(element, document.getElementById('btnSave'));

/*Component creation
    -> Two types
        |-> function based
        |-> classed based

*/

// function based
function Button(props){ // we made this as a function so that it can be reused //props to get the value dynamically
    // props nai hunu parne bhanne chhaina... it can be any eg... xyz...
    return <button type="submit">{props.label}</button> // this is jsx
}
/*
    This also can be used but cannot be reused
    ---- ReactDOM.render(<button type="submit"></button>, document.getElementById('jsx'));
*/

// To give "" label
ReactDOM.render(<Button label="Add"/>, document.getElementById('btnAdd'));

// To give "Save" label
ReactDOM.render(<Button label="Save"/>, document.getElementById('btnSave'));

// To give "Cancel" label
ReactDOM.render(<Button label="Cancel"/>, document.getElementById('btnCancel'));