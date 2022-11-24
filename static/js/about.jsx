'use strict';

function About() {

    return (
        <React.Fragment>
            <h1>About Author</h1>
            <div id="author">
            <img src="/static/img/polymorphism.jpeg" ></img>
            </div>
            <p id="author">This author loves great food and creating <em>cool</em> things. <b>Enjoy</b> the website!</p>
            <p id="author">Click <a href="/">here</a> to return to the homepage.</p>
        </React.Fragment>
    );


}

ReactDOM.render(<About />, document.querySelector('#about'));