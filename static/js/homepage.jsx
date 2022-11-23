'use strict';



function Homepage() {

{/* THIS FUNCTION is where we edit the Homepage component in 
order to add some content to the homepage.html 

Things to note:
1.instead of putting return statement in a div(to make sure return returns only ONE thing, 
  per convention, put i tin a react fragment tag so we dont have divs everywhere) https://reactjs.org/docs/fragments.html
2. parenthesis are important!
3. all tags must be closed...ex: input and image as the end include a "/" when using .jsx
*/}




  return (
   
    <React.Fragment>

  {/* A welcome message to the user */}
  <h3>welcome user!!!!</h3>

  {/* A link to the /cards page */}
  <a href="/cards">Click here to view trading cards!</a>
  
  {/* A nice, large image of Balloonicorn (the image is located at /static/img/balloonicorn.jpg) */}
  <img src="/static/img/balloonicorn.jpg" />

  </React.Fragment>

  );

}

ReactDOM.render(<Homepage />, document.querySelector('#app'));







//ReactDOM.render = WHAT TO PUT AND WHERE


//we use ReactDOM.render to answer "WHAT to put?" ....to render the homepage component inside div#app....forward slash lets us know were calling the function
// and the queryselector tells jsx "put it here"...its being referenced in homepage html via the div
//2nd param: HTMLElement object. In this case, we retrieve the element with document.querySelector.


// ReactDOM.render takes in two arguments:

// The components to render
// An HTML element — where you want to place this component

